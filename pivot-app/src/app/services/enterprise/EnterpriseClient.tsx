"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay },
});

const services = [
  { num: "01", title: "私有知識大腦", desc: "向量資料庫 + RAG 架構，讓企業文件、FAQ、規範成為可查詢的智能資產。" },
  { num: "02", title: "EchoChat 客服平台", desc: "整合 LINE、Instagram、Telegram，24/7 智能客服，含人機協作切換。", link: true },
  { num: "03", title: "工作流程自動化", desc: "AI Agent 串接內部系統，自動化審批、摘要、分類與回報。" },
  { num: "04", title: "AI 效益儀表板", desc: "視覺化追蹤 AI 使用率、節省工時與成本效益，量化投資回報。" },
];

const steps = [
  { n: "01", title: "需求盤點與架構規劃", desc: "梳理業務痛點、資料現況與資安需求，2 週內輸出可行架構方案。" },
  { n: "02", title: "PoC 快速驗證", desc: "建立試點系統，以真實業務資料驗證準確度、效率與 ROI。" },
  { n: "03", title: "正式部署與整合", desc: "完成私有環境建置，串接 ERP / CRM / 現有系統。" },
  { n: "04", title: "持續維運與優化", desc: "模型版本管理、效能監控、使用者回饋循環。" },
];

export default function EnterpriseClient() {
  return (
    <PageWrapper>
      <main style={{ background: "#0a0a0a", color: "#ffffff" }}>
        <section className="pt-32 pb-24 px-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeUp(0)}>
              <Link href="/" className="inline-flex items-center gap-2 text-sm mb-10 transition-colors" style={{ color: "rgba(255,255,255,0.35)" }}>← Back</Link>
            </motion.div>
            <motion.p {...fadeUp(0.05)} className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-6" style={{ color: "rgba(200,214,229,0.5)" }}>Enterprise</motion.p>
            <motion.h1 {...fadeUp(0.12)} className="font-black tracking-tighter leading-tight mb-6"
              style={{ fontSize: "clamp(40px, 6vw, 72px)", color: "#ffffff" }}>
              企業 AI，
              <br /><span style={{ color: "rgba(255,255,255,0.3)" }}>從落地到擴規</span>
            </motion.h1>
            <motion.p {...fadeUp(0.22)} className="max-w-xl text-base leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.45)" }}>
              從私有知識庫到 SaaS 客服平台，一站式企業 AI 導入，確保資料安全與系統穩定。
            </motion.p>
            <motion.div {...fadeUp(0.3)} className="flex gap-4 flex-wrap">
              <Link href="/contact" className="px-7 py-3 bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors">預約企業諮詢</Link>
              <a href="https://echochat.com.tw/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-3 border text-sm font-medium text-white/60 hover:text-white hover:border-white/40 transition-all"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                試用 EchoChat <ExternalLink size={14} />
              </a>
            </motion.div>
          </div>
        </section>

        <section style={{ background: "#111111", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="max-w-7xl mx-auto px-6 py-20">
            <motion.h2 {...fadeUp(0)} className="font-black tracking-tighter mb-10" style={{ fontSize: "clamp(28px, 3vw, 40px)", color: "#ffffff" }}>涵蓋企業 AI 全場景</motion.h2>
            {services.map(({ num, title, desc, link }, i) => (
              <motion.div key={num} {...fadeUp(i * 0.08)}
                className="flex flex-col sm:flex-row gap-6 py-7 border-b transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.025)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                <span className="text-xs font-mono w-8 shrink-0 mt-0.5" style={{ color: "rgba(255,255,255,0.2)" }}>{num}</span>
                <div className="sm:w-56 shrink-0">
                  <span className="font-bold text-base" style={{ color: "rgba(255,255,255,0.85)" }}>{title}</span>
                  {link && <a href="https://echochat.com.tw/" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 ml-2 text-xs" style={{ color: "rgba(200,214,229,0.6)" }}>↗</a>}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section style={{ background: "#0a0a0a", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="max-w-7xl mx-auto px-6 py-20">
            <motion.h2 {...fadeUp(0)} className="font-black tracking-tighter mb-10" style={{ fontSize: "clamp(28px, 3vw, 40px)", color: "#ffffff" }}>導入流程</motion.h2>
            {steps.map(({ n, title, desc }, i) => (
              <motion.div key={n} {...fadeUp(i * 0.07)}
                className="flex gap-6 py-6 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <span className="text-xs font-mono w-8 shrink-0" style={{ color: "rgba(255,255,255,0.2)" }}>{n}</span>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: "rgba(255,255,255,0.85)" }}>{title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20 px-6 text-center" style={{ background: "#111111" }}>
          <motion.div {...fadeUp(0)} className="max-w-lg mx-auto">
            <h2 className="font-black tracking-tighter mb-4" style={{ fontSize: "clamp(28px, 3vw, 40px)", color: "#ffffff" }}>讓 AI 成為企業最強生產力</h2>
            <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.4)" }}>30 分鐘免費諮詢，找到最適合你的方案。</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors">
              預約企業諮詢 <ArrowRight size={15} />
            </Link>
          </motion.div>
        </section>
      </main>
    </PageWrapper>
  );
}
