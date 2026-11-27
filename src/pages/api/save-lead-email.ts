import type { APIRoute } from "astro";
import fs from "node:fs";
import path from "node:path";
import { promisify } from "node:util";

const appendFile = promisify(fs.appendFile);

const CSV_PATH = process.env.LEADS_CSV_PATH?.trim() || path.resolve(process.cwd(), "data", "leads.csv");
const MAX_EMAIL_LENGTH = 254;
const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB
const MAX_MEMORY_DEDUP_SIZE = 50_000;
const ALLOWED_SOURCES = ["nutricion", "fiebre"];
const ALLOWED_ORIGINS = getAllowedOrigins();

// Rate limiting simple en memoria (no persiste entre reinicios, pero evita abuso básico)
const rateLimits = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minuto
const RATE_LIMIT_MAX_REQUESTS = 10;

// Caché en memoria de emails ya guardados para deduplicación eficiente
const seenEmails = new Set<string>();
let seenEmailsLoaded = false;

function getAllowedOrigins(): string[] {
  const fromEnv = process.env.ALLOWED_ORIGINS?.split(",").map((o) => o.trim()).filter(Boolean);
  if (fromEnv?.length) return fromEnv;

  if (process.env.NODE_ENV === "development") {
    return ["http://localhost:4321", "http://127.0.0.1:4321"];
  }

  return ["https://pedia-360.com", "https://www.pedia-360.com"];
}

function isSameOrigin(origin: string, request: Request): boolean {
  const host = request.headers.get("host") || "";
  if (!host) return false;
  return origin === `https://${host}` || origin === `http://${host}`;
}

function isAllowedOrigin(origin: string | null, request: Request): boolean {
  if (!origin) {
    // Si no hay Origin, validamos por Referer como fallback
    const referer = request.headers.get("referer");
    if (!referer) return false;
    try {
      const refererOrigin = new URL(referer).origin;
      return isAllowedOrigin(refererOrigin, request);
    } catch {
      return false;
    }
  }

  // Permitir el origen que coincida con el host actual (mismo sitio)
  if (isSameOrigin(origin, request)) return true;

  if (ALLOWED_ORIGINS.includes(origin)) return true;

  // En desarrollo permitir cualquier localhost
  if (process.env.NODE_ENV === "development" && /^https?:\/\/localhost(:\d+)?$/.test(origin)) {
    return true;
  }

  return false;
}

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") || "unknown";
}

function anonymizeIp(ip: string): string {
  if (!ip || ip === "unknown") return "unknown";

  // IPv4: reemplazar último octeto
  if (/^\d+\.\d+\.\d+\.\d+$/.test(ip)) {
    return ip.replace(/\.\d+$/, ".0");
  }

  // IPv6: conservar solo los primeros 4 grupos
  if (ip.includes(":")) {
    const groups = ip.split(":");
    if (groups.length >= 4) {
      return groups.slice(0, 4).join(":") + ":...";
    }
  }

  return "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimits.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX_REQUESTS;
}

function isValidEmail(email: string): boolean {
  // RFC 5322 simplificado con al menos un punto en el dominio
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email) && email.length <= MAX_EMAIL_LENGTH;
}

function sanitizeForCsv(value: string): string {
  // Elimina caracteres peligrosos para CSV: saltos de línea, tabulaciones, retornos de carro y comillas
  let sanitized = value
    .replace(/[\r\n\t"',;]/g, "")
    .trim();

  // Previene CSV injection prefijando con comilla simple si el valor empieza con caracteres de fórmula
  if (/^[+\-=@]/.test(sanitized)) {
    sanitized = `"${sanitized}"`;
  }

  return sanitized;
}

function ensureCsvFile(): void {
  const dir = path.dirname(CSV_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true, mode: 0o700 });
  }

  if (!fs.existsSync(CSV_PATH)) {
    fs.writeFileSync(CSV_PATH, "timestamp,email,source,ip\n", { mode: 0o600 });
  }
}

function loadSeenEmails(): void {
  if (seenEmailsLoaded) return;
  seenEmailsLoaded = true;

  if (!fs.existsSync(CSV_PATH)) return;

  try {
    const content = fs.readFileSync(CSV_PATH, "utf8");
    const lines = content.split("\n").slice(1); // omitir header

    for (const line of lines) {
      const parts = line.split(",");
      if (parts.length >= 2) {
        seenEmails.add(parts[1].trim().toLowerCase());
      }
    }

    // Evitar que el Set crezca indefinidamente en memoria
    while (seenEmails.size > MAX_MEMORY_DEDUP_SIZE) {
      const first = seenEmails.values().next().value;
      if (first === undefined) break;
      seenEmails.delete(first);
    }
  } catch (error) {
    console.error("[save-lead-email] Error cargando emails existentes:", error);
  }
}

function isDuplicate(email: string): boolean {
  loadSeenEmails();
  return seenEmails.has(email.trim().toLowerCase());
}

function isFileTooLarge(): boolean {
  try {
    const stats = fs.statSync(CSV_PATH);
    return stats.size > MAX_FILE_SIZE_BYTES;
  } catch {
    return false;
  }
}

function isValidSource(source: unknown): source is "nutricion" | "fiebre" {
  return typeof source === "string" && ALLOWED_SOURCES.includes(source);
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const origin = request.headers.get("origin");

    if (!isAllowedOrigin(origin, request)) {
      return Response.json({ success: false, message: "Forbidden" }, { status: 403 });
    }

    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return Response.json({ success: false, message: "Unsupported Media Type" }, { status: 415 });
    }

    const clientIp = getClientIp(request);

    if (isRateLimited(clientIp)) {
      return Response.json({ success: false, message: "Too Many Requests" }, { status: 429 });
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return Response.json({ success: false, message: "Invalid JSON" }, { status: 400 });
    }

    if (!body || typeof body !== "object") {
      return Response.json({ success: false, message: "Invalid body" }, { status: 400 });
    }

    const { email, source, website } = body as Record<string, unknown>;

    // Honeypot: si un bot llena este campo, rechazamos silenciosamente
    if (typeof website === "string" && website.trim()) {
      return Response.json({ success: false, message: "Invalid request" }, { status: 400 });
    }

    if (typeof email !== "string" || !email.trim()) {
      return Response.json({ success: false, message: "El correo es obligatorio." }, { status: 400 });
    }

    const normalizedEmail = email.trim().toLowerCase();

    if (!isValidEmail(normalizedEmail)) {
      return Response.json({ success: false, message: "El correo no es válido." }, { status: 400 });
    }

    if (!isValidSource(source)) {
      return Response.json({ success: false, message: "Origen no válido." }, { status: 400 });
    }

    if (isDuplicate(normalizedEmail)) {
      // Devolvemos éxito para no revelar si el correo ya existe, pero no guardamos
      return Response.json({ success: true });
    }

    ensureCsvFile();

    if (isFileTooLarge()) {
      console.error("[save-lead-email] El archivo CSV excede el tamaño máximo permitido.");
      return Response.json({ success: false, message: "Storage limit reached" }, { status: 507 });
    }

    const safeSource = sanitizeForCsv(source);
    const safeEmail = sanitizeForCsv(normalizedEmail);
    const anonymizedIp = anonymizeIp(clientIp);
    const timestamp = new Date().toISOString();
    const row = `${timestamp},${safeEmail},${safeSource},${anonymizedIp}\n`;

    await appendFile(CSV_PATH, row);

    seenEmails.add(normalizedEmail);

    return Response.json({ success: true });
  } catch (error) {
    console.error("[save-lead-email] Error:", error);
    return Response.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
};

export const GET: APIRoute = async () => {
  // No permitir lectura del archivo bajo ninguna circunstancia
  return new Response("Method Not Allowed", { status: 405 });
};
