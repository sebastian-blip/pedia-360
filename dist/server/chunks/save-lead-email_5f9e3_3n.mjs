import fs from 'node:fs';
import path from 'node:path';
import { promisify } from 'node:util';

const appendFile = promisify(fs.appendFile);
const CSV_PATH = process.env.LEADS_CSV_PATH?.trim() || path.resolve(process.cwd(), "data", "leads.csv");
const MAX_EMAIL_LENGTH = 254;
const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024;
const MAX_MEMORY_DEDUP_SIZE = 5e4;
const ALLOWED_SOURCES = ["nutricion", "fiebre"];
const ALLOWED_ORIGINS = getAllowedOrigins();
const rateLimits = /* @__PURE__ */ new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1e3;
const RATE_LIMIT_MAX_REQUESTS = 10;
const seenEmails = /* @__PURE__ */ new Set();
let seenEmailsLoaded = false;
function getAllowedOrigins() {
  const fromEnv = process.env.ALLOWED_ORIGINS?.split(",").map((o) => o.trim()).filter(Boolean);
  if (fromEnv?.length) return fromEnv;
  if (process.env.NODE_ENV === "development") {
    return ["http://localhost:4321", "http://127.0.0.1:4321"];
  }
  return ["https://pedia-360.com", "https://www.pedia-360.com"];
}
function isSameOrigin(origin, request) {
  const host = request.headers.get("host") || "";
  if (!host) return false;
  return origin === `https://${host}` || origin === `http://${host}`;
}
function isAllowedOrigin(origin, request) {
  if (!origin) {
    const referer = request.headers.get("referer");
    if (!referer) return false;
    try {
      const refererOrigin = new URL(referer).origin;
      return isAllowedOrigin(refererOrigin, request);
    } catch {
      return false;
    }
  }
  if (isSameOrigin(origin, request)) return true;
  if (ALLOWED_ORIGINS.includes(origin)) return true;
  if (process.env.NODE_ENV === "development" && /^https?:\/\/localhost(:\d+)?$/.test(origin)) {
    return true;
  }
  return false;
}
function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") || "unknown";
}
function anonymizeIp(ip) {
  if (!ip || ip === "unknown") return "unknown";
  if (/^\d+\.\d+\.\d+\.\d+$/.test(ip)) {
    return ip.replace(/\.\d+$/, ".0");
  }
  if (ip.includes(":")) {
    const groups = ip.split(":");
    if (groups.length >= 4) {
      return groups.slice(0, 4).join(":") + ":...";
    }
  }
  return "unknown";
}
function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimits.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX_REQUESTS;
}
function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email) && email.length <= MAX_EMAIL_LENGTH;
}
function sanitizeForCsv(value) {
  let sanitized = value.replace(/[\r\n\t"',;]/g, "").trim();
  if (/^[+\-=@]/.test(sanitized)) {
    sanitized = `"${sanitized}"`;
  }
  return sanitized;
}
function ensureCsvFile() {
  const dir = path.dirname(CSV_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true, mode: 448 });
  }
  if (!fs.existsSync(CSV_PATH)) {
    fs.writeFileSync(CSV_PATH, "timestamp,email,source,ip\n", { mode: 384 });
  }
}
function loadSeenEmails() {
  if (seenEmailsLoaded) return;
  seenEmailsLoaded = true;
  if (!fs.existsSync(CSV_PATH)) return;
  try {
    const content = fs.readFileSync(CSV_PATH, "utf8");
    const lines = content.split("\n").slice(1);
    for (const line of lines) {
      const parts = line.split(",");
      if (parts.length >= 2) {
        seenEmails.add(parts[1].trim().toLowerCase());
      }
    }
    while (seenEmails.size > MAX_MEMORY_DEDUP_SIZE) {
      const first = seenEmails.values().next().value;
      if (first === void 0) break;
      seenEmails.delete(first);
    }
  } catch (error) {
    console.error("[save-lead-email] Error cargando emails existentes:", error);
  }
}
function isDuplicate(email) {
  loadSeenEmails();
  return seenEmails.has(email.trim().toLowerCase());
}
function isFileTooLarge() {
  try {
    const stats = fs.statSync(CSV_PATH);
    return stats.size > MAX_FILE_SIZE_BYTES;
  } catch {
    return false;
  }
}
function isValidSource(source) {
  return typeof source === "string" && ALLOWED_SOURCES.includes(source);
}
const POST = async ({ request }) => {
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
    let body;
    try {
      body = await request.json();
    } catch {
      return Response.json({ success: false, message: "Invalid JSON" }, { status: 400 });
    }
    if (!body || typeof body !== "object") {
      return Response.json({ success: false, message: "Invalid body" }, { status: 400 });
    }
    const { email, source, website } = body;
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
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    const row = `${timestamp},${safeEmail},${safeSource},${anonymizedIp}
`;
    await appendFile(CSV_PATH, row);
    seenEmails.add(normalizedEmail);
    return Response.json({ success: true });
  } catch (error) {
    console.error("[save-lead-email] Error:", error);
    return Response.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
};
const GET = async () => {
  return new Response("Method Not Allowed", { status: 405 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
