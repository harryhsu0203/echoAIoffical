"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BrainCircuit, GitMerge, MessageSquare, BarChart3, ArrowRight, ExternalLink } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay },
});

const steps = [
  { n: "01", title: "需求盤點與架構規劃", desc: "梳理業務痛點、資料現況與資安需求，2 週內輸出可行架構方案。" },
  { n: "02", title: "PoC 快速驗證", desc: "建立試點系統，以真實業務資料驗證準確度、效率與 ROI。" },
  { n: "03", title: "正式部署與整合", desc: "完成私有環境建置，串接 ERP / CRM / 現有系統。" },
  { n: "04", title: "持續維運與優化", desc: "模型版本管理、效能監控、使用者回饋循環。" },
];

const services = [
  { icon: BrainCircuit, title: "私有知識大腦", desc: "向量資料庫 + RAG 架構，讓企業文件、FAQ、規範成為可查詢的智能資產。" },
  { icon: MessageSquare, title: "EchoChat 客服平台", desc: "整合 LINE、Instagram、Telegram，24/7 智能客服，含人機協作切換。", link: "https://echochat.com.tw/" },
  { icon: GitMerge, title: "工作流程自動化", desc: "AI Agent 串接內部系統，自動化審批、摘要、分類與回報。" },
  { icon: BarChart3, title: "AI 效益儀表板", desc: "視覺化追蹤 AI 使用率、節省工時與成本效益，量化投資回報。" },
];

export default function EnterpriseClient() {
  return (
    <PageWrapper>
      <main className="bg-white text-[#333]">
        <section className="pt-24 pb-20 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fade(0)}>
              <Link href="/" className="inline-flex items-center gap-2 text-[#999] hover:text-black text-sm mb-8 transition-colors">← 返回首頁</Link>
            </motion.div>
            <motion.p {...fade(0.05)} className="text-xs tracking-[0.3em] uppercase font-bold mb-4" style={{ color: "#D4AF37" }}>企業方案</motion.p>
            <motion.h1 {...fade(0.12)} className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-black leading-tight mb-6">
              企業 AI，
              <br /><span style={{ color: "#D4AF37" }}>從落地到擴規</span>
            </motion.h1>
            <motion.p {...fade(0.22)} className="text-[#555] text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              從私有知識庫到 SaaS 客服平台，樞智 AI 提供完整的企業 AI 導入服務，確保資料安全與系統穩定。
            </motion.p>
            <motion.div {...fade(0.3)} className="flex flex-wrap justify-center gap-4">
              <Link href="/contact"
                className="px-8 py-3.5 rounded-full font-bold text-sm text-white transition-all hover:opacity-88"
                style={{ background: "#000" }}>
                預約企業諮詢
              </Link>
              <a href="https://echochat.com.tw/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm border transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]"
                style={{ borderColor: "#D4AF37", color: "#D4AF37" }}>
                試用 EchoChat <ExternalLink size={14} />
              </a>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ background: "#FBFBFB" }}>
          <div className="max-w-6xl mx-auto">
            <motion.div {...fade(0)} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-black">涵蓋企業 AI 全場景</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-5">
              {services.map(({ icon: Icon, title, desc, link }, i) => (
                <motion.div key={title} {...fade(i * 0.08)}
                  className="p-7 rounded-2xl border bg-white transition-all hover:shadow-[0_6px_30px_rgba(212,175,55,0.1)] hover:border-[#D4AF37]/30 group"
                  style={{ borderColor: "#E8E8E8" }}>
                  <Icon size={22} className="mb-5" style={{ color: "#D4AF37" }} />
                  <h3 className="text-lg font-bold text-black mb-3 group-hover:text-[#D4AF37] transition-colors">{title}</h3>
                  <p className="text-sm text-[#777] leading-relaxed mb-4">{desc}</p>
                  {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold transition-colors hover:opacity-80"
                      style={{ color: "#D4AF37" }}>
                      前往 EchoChat 官網 <ExternalLink size={11} />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fade(0)} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-black">透明、可控、高效的導入流程</h2>
            </motion.div>
            <div className="space-y-4">
              {steps.map(({ n, title, desc }, i) => (
                <motion.div key={n} {...fade(i * 0.08)}
                  className="flex gap-5 p-5 rounded-2xl border bg-white transition-all hover:border-[#D4AF37]/30 group"
                  style={{ borderColor: "#E8E8E8" }}>
                  <span className="text-sm font-bold mt-0.5 w-8 shrink-0" style={{ color: "#D4AF37" }}>{n}</span>
                  <div>
                    <h4 className="text-sm font-bold text-black mb-1.5 group-hover:text-[#D4AF37] transition-colors">{title}</h4>
                    <p className="text-sm text-[#777] leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 text-center" style={{ background: "#FBFBFB" }}>
          <motion.div {...fade(0)} className="max-w-xl mx-auto">
            <h2 className="text-3xl font-black tracking-tighter text-black mb-4">讓 AI 成為企業最強生產力</h2>
            <p className="text-[#777] mb-8 leading-relaxed">30 分鐘免費諮詢，了解最適合你的方案。</p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-9 py-3.5 rounded-full font-bold text-sm text-white transition-all hover:scale-[1.02]"
              style={{ background: "#000" }}>
              預約企業諮詢 <ArrowRight size={15} />
            </Link>
          </motion.div>
        </section>
      </main>
    </PageWrapper>
  );
}
