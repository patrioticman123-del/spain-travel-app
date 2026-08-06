import { Redis } from "@upstash/redis";
import { isAdmin } from "../../../lib/admin-auth";

const STATE_KEY = "spain-travel:shared-state";
const MAX_STATE_BYTES = 4 * 1024 * 1024;

type SharedState = {
  hero: unknown;
  days: unknown;
  version: number;
};

function getRedis() {
  const url =
    process.env.UPSTASH_REDIS_REST_URL ||
    process.env.UPSTASH_REDIS_REST_KV_REST_API_URL ||
    process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ||
    process.env.UPSTASH_REDIS_REST_KV_REST_API_TOKEN ||
    process.env.KV_REST_API_TOKEN;
  return url && token ? new Redis({ url, token }) : null;
}

export async function GET() {
  const redis = getRedis();
  if (!redis) return Response.json({ hero: null, days: null, version: 0 });

  try {
    const state = await redis.get<SharedState>(STATE_KEY);
    return Response.json(state || { hero: null, days: null, version: 0 }, {
      headers: { "cache-control": "no-store" },
    });
  } catch {
    return Response.json({ hero: null, days: null, version: 0 });
  }
}

export async function PUT(request: Request) {
  if (!(await isAdmin())) return Response.json({ error: "只有管理員可以發布共同行程" }, { status: 401 });

  const redis = getRedis();
  if (!redis) return Response.json({ error: "共用資料庫尚未設定" }, { status: 503 });

  const body = await request.json();
  const state: SharedState = { hero: body.hero, days: body.days, version: Date.now() };
  const payload = JSON.stringify(state);
  if (Buffer.byteLength(payload, "utf8") > MAX_STATE_BYTES) {
    return Response.json({ error: "共同行程資料過大，請減少或更換背景圖片" }, { status: 413 });
  }

  await redis.set(STATE_KEY, state);
  return Response.json({ version: state.version });
}
