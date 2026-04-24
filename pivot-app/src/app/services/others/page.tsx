import type { Metadata } from "next";
import OthersClient from "./OthersClient";

export const metadata: Metadata = {
  title: "硬體調優 & 模型代工",
  description: "N100 / RTX 50 系列系統優化、LoRA 模型訓練代工，讓你的硬體與 AI 模型發揮最大潛能。",
  keywords: ["RTX50", "N100", "LoRA訓練", "硬體優化", "模型代工", "系統加速"],
};

export default function OthersPage() {
  return <OthersClient />;
}
