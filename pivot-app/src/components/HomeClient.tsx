"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Lock, Zap, Shield } from "lucide-react";
import TechFlowBackground from "./TechFlowBackground";

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const, delay },
});

const serviceCards = [
  {
    tag: "本地部署",
    title: "本地生圖部署",
    desc: "SD / FLUX / LLM 完整本地架設。無月租、無審核、無限制。RTX 50 深度優化，數據永不外流。",
    href: "/services/local-ai",
    external: false,
    accent: "#00D2FF",
    badges: ["無審核", "RTX 50", "NSFW 支援"],
  },
  {
    tag: "企業方案",
    title: "企業 AI 串接",
    desc: "私有知識大腦、API 深度整合、員工 AI 助理、EchoChat 客服平台，一站式企業 AI 落地。",
    href: "/services/enterprise",
    external: false,
    accent: "#818cf8",
    badges: ["私有部署", "API 整合", "知識庫"],
  },
  {
    tag: "SaaS 平台",
    title: "EchoChat SaaS",
    desc: "即插即用 AI 客服平台，整合 LINE、Instagram、Telegram，訂閱制即可享有企業級智能客服。",
    href: "https://echochat.com.tw/",
    external: true,
    accent: "#a78bfa",
    badges: ["LINE 串接", "24/7 客服", "即開即用"],
  },
];

const certBadges = [
  { icon: Lock, label: "100% 本地運行" },
  { icon: Shield, label: "隱私永不外洩" },
  { icon: Zap, label: "無審核限制" },
];

export default function HomeClient() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-black">
        <TechFlowBackground />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <motion.div {...rise(0.05)}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-white/45 text-xs tracking-[0.25em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-pulse" />
              一站式私有化 AI 解決方案
            </span>
          </motion.div>

          <motion.h1
            {...rise(0.16)}
            className="mt-6 font-black tracking-tighter leading-[1.04]"
          >
            <span
              className="block text-5xl sm:text-7xl lg:text-[80px]"
              style={{
                background: "linear-gradient(170deg,#ffffff 0%,#E1E1E1 45%,#94a3b8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Pivot AI
            </span>
            <span
              className="block text-2xl sm:text-3xl lg:text-4xl mt-3 font-semibold"
              style={{
                background: "linear-gradient(135deg,#00D2FF 0%,#818cf8 55%,#c084fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              你的私有化、不設限 AI 核心
            </span>
          </motion.h1>

          <motion.p
            {...rise(0.28)}
            className="mt-5 text-white/50 text-lg max-w-xl leading-relaxed"
          >
            拒絕雲端審核，釋放創作自由。
            本地算力由你掌控，隱私永不外流。
          </motion.p>

          {/* Cert badges */}
          <motion.div {...rise(0.38)} className="mt-6 flex flex-wrap justify-center gap-2.5">
            {certBadges.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border border-white/10 bg-white/[0.04] text-white/70"
              >
                <Icon size={14} className="text-[#00D2FF]" />
                {label}
              </span>
            ))}
          </motion.div>

          <motion.div {...rise(0.48)} className="mt-8 flex gap-4">
            <Link href="/services/local-ai"
              className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-white/90 transition-all hover:scale-[1.02]">
              立即部署
            </Link>
            <Link href="/contact"
              className="px-8 py-3.5 rounded-full border border-white/20 text-white font-bold text-sm hover:border-white/45 hover:bg-white/6 transition-all">
              諮詢方案
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICE CARDS ─── */}
      <section className="bg-black py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-center mb-14"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-white/35 font-medium mb-3">服務方案</p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter text-white">
              選擇你的 AI 路徑
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {serviceCards.map((card, i) => {
              const inner = (
                <>
                  {/* Top */}
                  <div className="flex items-start justify-between mb-5">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full border"
                      style={{
                        color: card.accent,
                        borderColor: `${card.accent}40`,
                        background: `${card.accent}12`,
                      }}
                    >
                      {card.tag}
                    </span>
                    {card.external && (
                      <ExternalLink size={16} className="text-white/25 group-hover:text-white/60 transition-colors" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                    {card.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-sm text-white/45 leading-relaxed max-w-2xl mb-6">
                    {card.desc}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {card.badges.map((b) => (
                      <span key={b} className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-white/40">
                        {b}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto flex items-center gap-1.5 text-sm font-semibold transition-all duration-200"
                    style={{ color: card.accent }}>
                    {card.external ? "前往官網" : "了解更多"}
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </div>

                  {/* Hover border glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ boxShadow: `inset 0 0 0 1px ${card.accent}40` }}
                  />
                </>
              );

              const cls = "group relative flex flex-col p-7 rounded-2xl border border-white/8 bg-white/[0.025] hover:bg-white/[0.05] transition-all duration-300 cursor-pointer";

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.1 }}
                >
                  {card.external ? (
                    <a href={card.href} target="_blank" rel="noopener noreferrer" className={cls}>
                      {inner}
                    </a>
                  ) : (
                    <Link href={card.href} className={cls}>
                      {inner}
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA STRIP ─── */}
      <section className="bg-black border-t border-white/6 py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-white mb-4">
            準備好釋放你的 AI 潛能了嗎？
          </h2>
          <p className="text-white/45 mb-8 max-w-xl mx-auto leading-relaxed">
            無論是本地架設還是雲端 SaaS，我們提供最專業的建議與支援。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact"
              className="px-9 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-white/90 transition-all hover:scale-[1.02]">
              預約免費諮詢
            </Link>
            <a href="https://echochat.com.tw/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-9 py-3.5 rounded-full border border-purple-500/30 text-purple-300 font-bold text-sm hover:border-purple-400/60 hover:bg-purple-950/25 transition-all">
              試用 EchoChat
              <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
