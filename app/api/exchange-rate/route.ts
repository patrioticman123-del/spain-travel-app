const FALLBACK_RATE = 37.31;
const FALLBACK_DATE = "2026-08-06";

type RateResponse = {
  time_last_update_utc?: string;
  rates?: { TWD?: number };
};

export async function GET() {
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/EUR", {
      next: { revalidate: 21600 },
    });
    if (!response.ok) throw new Error("Exchange rate unavailable");
    const data = (await response.json()) as RateResponse;
    const rate = Number(data.rates?.TWD);
    if (!Number.isFinite(rate) || rate <= 0) throw new Error("Invalid exchange rate");
    const updated = data.time_last_update_utc ? new Date(data.time_last_update_utc) : new Date();
    return Response.json({
      rate,
      date: Number.isNaN(updated.getTime()) ? FALLBACK_DATE : updated.toISOString().slice(0, 10),
    }, { headers: { "cache-control": "public, s-maxage=21600, stale-while-revalidate=86400" } });
  } catch {
    return Response.json({ rate: FALLBACK_RATE, date: FALLBACK_DATE, fallback: true });
  }
}
