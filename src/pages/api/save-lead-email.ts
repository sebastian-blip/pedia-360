import type { APIRoute } from "astro";
import fs from "node:fs";
import path from "node:path";

const CSV_PATH = process.env.LEADS_CSV_PATH?.trim() || path.resolve(process.cwd(), "data", "leads.csv");
const MAX_EMAIL_LENGTH = 254;
const ALLOWED_ORIGINS = getAllowedOrigins();

// Rate limiting simple en memoria (no persiste entre reinicios, pero evita abuso básico)
const rateLimits = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minuto
const RATE_LIMIT_MAX_REQUESTS = 10;

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
  return value
    .replace(/[\r\n\t"',;]/g, "")
    .trim();
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

    const ip = getClientIp(request);

    if (isRateLimited(ip)) {
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

    const { email, source } = body as Record<string, unknown>;

    if (typeof email !== "string" || !email.trim()) {
      return Response.json({ success: false, message: "El correo es obligatorio." }, { status: 400 });
    }

    const normalizedEmail = email.trim().toLowerCase();

    if (!isValidEmail(normalizedEmail)) {
      return Response.json({ success: false, message: "El correo no es válido." }, { status: 400 });
    }

    const safeSource = typeof source === "string" ? sanitizeForCsv(source) : "unknown";
    const safeEmail = sanitizeForCsv(normalizedEmail);

    ensureCsvFile();

    const timestamp = new Date().toISOString();
    const row = `${timestamp},${safeEmail},${safeSource},${ip}\n`;

    fs.appendFileSync(CSV_PATH, row);

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
