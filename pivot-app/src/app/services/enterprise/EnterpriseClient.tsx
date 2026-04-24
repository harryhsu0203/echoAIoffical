"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BrainCircuit, GitMerge, MessageSquare, BarChart3, ArrowRight, ExternalLink } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
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
      <main className="bg-black text-white">
        {/* ── Hero ── */}
        <section className="relative pt-24 pb-20 px-6 overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 right-0 w-[600px] h-[500px] rounded-full opacity-25"
              style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.25) 0%, transparent 65%)", filter: "blur(90px)" }} />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div {...fade(0)}>
              <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors">
                ← 返回首頁
              </Link>
            </motion.div>
            <motion.p {...fade(0.05)} className="text-xs tracking-[0.3em] uppercase text-purple-400/70 font-medium mb-4">
              企業方案
            </motion.p>
            <motion.h1 {...fade(0.12)} className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-tight mb-6">
              企業 AI，
              <br />
              <span style={{ background: "linear-gradient(135deg,#818cf8,#c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                從落地到擴規
              </span>
            </motion.h1>
            <motion.p {...fade(0.22)} className="text-white/55 text-lg max-w-2xl leading-relaxed mb-10">
              從私有知識庫到 SaaS 客服平台，樞智 AI 提供完整的企業 AI 導入服務。
              確保資料安全、系統穩定，並讓每位員工都能享受 AI 帶來的效率提升。
            </motion.p>
            <motion.div {...fade(0.3)} className="flex flex-wrap gap-4">
              <Link href="/contact" className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-white/90 transition-all hover:scale-[1.02]">
                預約企業諮詢
              </Link>
              <a href="https://echochat.com.tw/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3.5 rounded-full border border-purple-500/35 text-purple-300 font-bold text-sm hover:border-purple-400/60 hover:bg-purple-950/25 transition-all">
                試用 EchoChat
                <ExternalLink size={14} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="py-20 px-6 border-t border-white/6">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fade(0)} className="mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-white/35 font-medium mb-3">服務項目</p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-white">涵蓋企業 AI 全場景</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-5">
              {services.map(({ icon: Icon, title, desc, link }, i) => (
                <motion.div key={title} {...fade(i * 0.08)}
                  className="p-7 rounded-2xl border border-white/8 bg-white/[0.025] hover:border-white/18 hover:bg-white/[0.04] transition-all group">
                  <Icon size={22} className="text-purple-400 mb-5" />
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{title}</h3>
                  <p className="text-sm text-white/45 leading-relaxed mb-4">{desc}</p>
                  {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors">
                      前往 EchoChat 官網 <ExternalLink size={11} />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="py-20 px-6 border-t border-white/6">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fade(0)} className="mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-white/35 font-medium mb-3">導入流程</p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-white">透明、可控、高效</h2>
            </motion.div>
            <div className="space-y-4">
              {steps.map(({ n, title, desc }, i) => (
                <motion.div key={n} {...fade(i * 0.08)}
                  className="flex gap-5 p-5 rounded-xl border border-white/8 bg-white/[0.02] hover:border-white/15 transition-colors group">
                  <span className="text-sm font-mono text-purple-400/60 mt-0.5 w-8 shrink-0">{n}</span>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1.5 group-hover:text-purple-300 transition-colors">{title}</h4>
                    <p className="text-sm text-white/40 leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 px-6 border-t border-white/6 text-center">
          <motion.div {...fade(0)} className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-white mb-4">
              讓 AI 成為企業最強生產力
            </h2>
            <p className="text-white/45 mb-8 leading-relaxed">
              一場 30 分鐘的免費諮詢，讓我們了解你的需求並提出最適合的方案。
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-9 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-white/90 transition-all hover:scale-[1.02]">
              預約企業諮詢
              <ArrowRight size={15} />
            </Link>
          </motion.div>
        </section>
      </main>
    </PageWrapper>
  );
}
