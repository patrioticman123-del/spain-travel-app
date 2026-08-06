import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { PwaRegister } from "./pwa-register";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const incoming = await headers();
  const host = incoming.get("x-forwarded-host") || incoming.get("host") || "localhost:3000";
  const protocol = incoming.get("x-forwarded-proto") || (host.startsWith("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  return {
    metadataBase: base,
    title: "西班牙漫遊｜18 日自由行",
    description: "馬德里、安達魯西亞與巴塞隆納 18 日自由行程，支援離線票券、導航、個人修改與旅費記帳。",
    applicationName: "西班牙漫遊",
    manifest: "/manifest.webmanifest",
    appleWebApp: { capable: true, statusBarStyle: "black-translucent", title: "西班牙漫遊" },
    icons: { icon: [{ url: "/icon-192.png", sizes: "192x192", type: "image/png" }], apple: "/icon-192.png" },
    openGraph: { title: "西班牙 18 日自由行", description: "Madrid · Andalucía · Barcelona", images: [{ url: "/og.png", width: 1536, height: 1024, alt: "西班牙 18 日自由行" }] },
    twitter: { card: "summary_large_image", title: "西班牙 18 日自由行", description: "Madrid · Andalucía · Barcelona", images: ["/og.png"] },
  };
}

export const viewport: Viewport = { themeColor: "#9b1c2e", width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body><PwaRegister />{children}</body></html>;
}
