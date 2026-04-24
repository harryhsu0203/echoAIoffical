"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, ShieldCheck, Zap } from "lucide-react";

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const, delay },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay },
});

const certBadges = [
  { emoji: "🛡️", label: "100% 本地算力" },
  { emoji: "🔞", label: "無審核限制" },
  { emoji: "💎", label: "隱私安全" },
];

const serviceCards = [
  {
    tag: "本地部署",
    title: "本地 AI 生圖",
    subtitle: "無審核 · 零月租 · 完全私有",
    desc: "SD / FLUX / LLM 完整本地架設，數據永不外流。RTX 50 深度優化，釋放硬體全部潛能。",
    href: "/services/local-ai",
    external: false,
    features: ["A1111 / ComfyUI / Forge", "FLUX.1 支援", "NSFW 全支援", "無月租費用"],
  },
  {
    tag: "企業方案",
    title: "企業 AI 串接",
    subtitle: "私有大腦 · API 整合 · EchoChat",
    desc: "從私有知識庫到 SaaS 客服平台，一站式企業 AI 落地，確保資料安全與系統穩定。",
    href: "/services/enterprise",
    external: false,
    features: ["私有知識大腦", "EchoChat 整合", "API 深度串接", "員工 AI 助理"],
  },
  {
    tag: "SaaS 平台",
    title: "EchoChat SaaS",
    subtitle: "LINE · Instagram · Telegram",
    desc: "即插即用 AI 客服平台，訂閱制即享企業級智能客服，支援多語言、情感分析與人機協作。",
    href: "https://echochat.com.tw/",
    external: true,
    features: ["多平台串接", "24/7 智能客服", "對話分析", "即開即用"],
  },
];

export default function HomeClient() {
  return (
    <main className="bg-white">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[95dvh] flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        {/* Subtle background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-30"
            style={{ background: "radial-gradient(ellipse, #FFF9E6 0%, transparent 65%)", filter: "blur(60px)" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div {...rise(0.05)}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase"
              style={{ background: "#FDFBF2", border: "1px solid #E8D99A", color: "#B8942A" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              樞智科技 · 一站式私有化 AI 解決方案
            </span>
          </motion.div>

          <motion.h1 {...rise(0.14)} className="mt-8 font-black tracking-tighter leading-[1.02]">
            <span className="block text-6xl sm:text-8xl lg:text-[96px] text-black">
              Pivot AI
            </span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold mt-3" style={{ color: "#D4AF37" }}>
              你的私有化、不設限 AI 核心
            </span>
          </motion.h1>

          <motion.p {...rise(0.26)} className="mt-6 text-lg text-[#555] max-w-xl mx-auto leading-relaxed">
            拒絕雲端審核，釋放創作自由。本地算力由你掌控，隱私永不外流。
          </motion.p>

          {/* Cert badges */}
          <motion.div {...rise(0.36)} className="mt-7 flex flex-wrap justify-center gap-3">
            {certBadges.map(({ emoji, label }) => (
              <span key={label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border"
                style={{ background: "#FAFAFA", borderColor: "#E8E8E8", color: "#333" }}>
                <span>{emoji}</span>
                {label}
              </span>
            ))}
          </motion.div>

          <motion.div {...rise(0.46)} className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/services/local-ai"
              className="px-9 py-3.5 rounded-full font-bold text-sm text-white transition-all hover:opacity-88 hover:scale-[1.02]"
              style={{ background: "#000" }}>
              立即部署
            </Link>
            <Link href="/contact"
              className="px-9 py-3.5 rounded-full font-bold text-sm border transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]"
              style={{ borderColor: "#DDDDD", color: "#333" }}>
              諮詢方案
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[#CCC] tracking-widest uppercase">了解更多</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#CCC] to-transparent" />
        </motion.div>
      </section>

      {/* ─── SERVICE CARDS ─── */}
      <section className="py-24 px-6" style={{ background: "#FBFBFB" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn(0)} className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#D4AF37" }}>服務方案</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-black">選擇你的 AI 路徑</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {serviceCards.map((card, i) => {
              const inner = (
                <>
                  <div className="flex items-start justify-between mb-5">
                    <span className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: "#FDFBF2", color: "#D4AF37", border: "1px solid #E8D99A" }}>
                      {card.tag}
                    </span>
                    {card.external && <ExternalLink size={15} className="text-[#CCC] group-hover:text-[#D4AF37] transition-colors" />}
                  </div>
                  <h3 className="text-xl font-black text-black tracking-tight mb-1">{card.title}</h3>
                  <p className="text-sm font-medium mb-4" style={{ color: "#D4AF37" }}>{card.subtitle}</p>
                  <p className="text-sm text-[#666] leading-relaxed mb-6">{card.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {card.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-[#555]">
                        <span className="w-1 h-1 rounded-full shrink-0" style={{ background: "#D4AF37" }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center gap-1.5 text-sm font-bold transition-all group-hover:gap-2.5"
                    style={{ color: "#D4AF37" }}>
                    {card.external ? "前往官網" : "了解更多"}
                    <ArrowRight size={15} />
                  </div>
                </>
              );

              const cls = "group relative flex flex-col h-full p-7 rounded-3xl border bg-white transition-all duration-300 cursor-pointer hover:shadow-[0_8px_40px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/40 hover:scale-[1.01]";

              return (
                <motion.div key={card.title} {...fadeIn(i * 0.1)}>
                  {card.external
                    ? <a href={card.href} target="_blank" rel="noopener noreferrer" className={cls} style={{ borderColor: "#E8E8E8" }}>{inner}</a>
                    : <Link href={card.href} className={cls} style={{ borderColor: "#E8E8E8" }}>{inner}</Link>
                  }
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── TRUST STRIP ─── */}
      <section className="py-16 px-6 border-t border-[#F0F0F0]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { val: "100%", sub: "資料主權" },
              { val: "無限制", sub: "創作自由" },
              { val: "零月租", sub: "本地算力" },
              { val: "24/7", sub: "技術支援" },
            ].map(({ val, sub }) => (
              <motion.div key={sub} {...fadeIn()}>
                <div className="text-3xl font-black text-black tracking-tight">{val}</div>
                <div className="text-sm text-[#999] mt-1">{sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ECHOCHAT CALLOUT ─── */}
      <section className="py-20 px-6 border-t border-[#F0F0F0]" style={{ background: "#FBFBFB" }}>
        <motion.div {...fadeIn(0)} className="max-w-4xl mx-auto rounded-3xl border p-10 sm:p-14 text-center"
          style={{ borderColor: "#E8D99A", background: "linear-gradient(135deg, #FFFDF5, #FDFBF2)" }}>
          <span className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest"
            style={{ background: "#FFF9E0", color: "#D4AF37", border: "1px solid #E8D99A" }}>
            SaaS 推薦
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-black tracking-tighter text-black">
            EchoChat — 企業 AI 客服平台
          </h2>
          <p className="mt-4 text-[#666] max-w-xl mx-auto leading-relaxed">
            無需自建伺服器，訂閱即可整合 LINE、Instagram、Telegram，
            打造 24/7 智能客服，支援多語言與情感分析。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="https://echochat.com.tw/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:opacity-88"
              style={{ background: "#D4AF37", color: "#fff" }}>
              立即前往 EchoChat <ExternalLink size={14} />
            </a>
            <Link href="/services/enterprise"
              className="px-8 py-3.5 rounded-full font-bold text-sm border transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]"
              style={{ borderColor: "#D4AF37", color: "#D4AF37", background: "transparent" }}>
              企業方案介紹
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-24 px-6 text-center">
        <motion.div {...fadeIn(0)} className="max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-black mb-4">
            準備好了嗎？
          </h2>
          <p className="text-[#888] mb-8 text-lg">免費諮詢，30 分鐘了解最適合你的 AI 方案。</p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-base text-white transition-all hover:scale-[1.02]"
            style={{ background: "#000" }}>
            預約免費諮詢 <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
