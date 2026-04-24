import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "關於我們",
  description: "樞智科技 (Pivot AI) 致力於為個人創作者與企業提供最自由、最安全的私有化 AI 環境。",
};

export default function AboutPage() {
  return <AboutClient />;
}
