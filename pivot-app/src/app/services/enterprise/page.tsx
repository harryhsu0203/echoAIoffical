import type { Metadata } from "next";
import EnterpriseClient from "./EnterpriseClient";

export const metadata: Metadata = {
  title: "企業 AI 串接方案",
  description: "私有知識大腦、API 深度整合、EchoChat 客服平台、員工 AI 助理，一站式企業 AI 落地服務。",
  keywords: ["企業AI", "私有大腦", "EchoChat", "API整合", "知識庫", "RAG"],
};

export default function EnterprisePage() {
  return <EnterpriseClient />;
}
