import type { Metadata } from "next";
import LocalAIClient from "./LocalAIClient";

export const metadata: Metadata = {
  title: "本地 AI 生圖部署",
  description: "SD / FLUX / LLM 完整本地架設，無審核、無月租、NSFW 全支援。RTX 40/50 深度優化，資料永不外流。",
  keywords: ["本地AI", "SD部署", "FLUX", "ComfyUI", "A1111", "無審核", "NSFW", "RTX 50"],
};

export default function LocalAIPage() {
  return <LocalAIClient />;
}
