import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Pivot AI｜樞智科技 — 私有化、不設限 AI 核心",
  description: "樞智 AI：本地極速部署，雲端智慧串接。100% 本地算力、無審核限制、RTX 50 系列優化。",
};

export default function Home() {
  return <HomeClient />;
}
