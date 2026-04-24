import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Pivot AI｜樞智科技 — 定義你的全場景 AI 戰力",
  description:
    "Pivot AI 樞智科技提供本地 AI 部署、AI 伺服器建置、SaaS AI 串接與全案整合服務，協助企業安全、快速地導入 AI 能力。",
  openGraph: {
    title: "Pivot AI｜樞智科技",
    description: "本地極速部署，雲端智慧串接。",
    siteName: "Pivot AI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant" className="dark">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
