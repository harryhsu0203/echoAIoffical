import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "Pivot AI｜樞智科技 — 私有化 AI 解決方案", template: "%s | Pivot AI 樞智科技" },
  description: "Pivot AI 樞智科技提供本地 AI 生圖部署、私有化 LLM、企業 AI 串接與 EchoChat SaaS 服務，無審核限制，資料永不外流。",
  keywords: ["本地AI", "私有化AI", "SD部署", "FLUX", "無審核", "EchoChat", "企業AI", "樞智科技"],
  openGraph: {
    title: "Pivot AI｜樞智科技",
    description: "本地算力，不設限創作。私有化 AI 的最佳選擇。",
    siteName: "Pivot AI",
    locale: "zh_TW",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body className="antialiased bg-white text-[#333]">
        <Navbar />
        <div className="pt-[64px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
