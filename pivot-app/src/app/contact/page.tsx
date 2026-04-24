import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "預約諮詢",
  description: "預約 Pivot AI 樞智科技免費諮詢，了解本地 AI 架設或企業 AI 方案的最佳選擇。",
};

export default function ContactPage() {
  return <ContactClient />;
}
