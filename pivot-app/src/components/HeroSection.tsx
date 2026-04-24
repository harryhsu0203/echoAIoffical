"use client";

import { motion } from "framer-motion";
import { ChevronDown, Lock, Zap, ExternalLink } from "lucide-react";
import TechFlowBackground from "./TechFlowBackground";

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay },
});

const badges = [
  { icon: Lock, label: "本地算力", color: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-950/30" },
  { icon: () => <span className="text-sm">🔞</span>, label: "無審核限制（支持 NSFW）", color: "text-rose-300", border: "border-rose-500/30", bg: "bg-rose-950/25" },
  { icon: Zap, label: "RTX 50 系列優化", color: "text-amber-300", border: "border-amber-500/30", bg: "bg-amber-950/25" },
];

const services = [
  {
    label: "本地生圖部署",
    desc: "無審核 · 一鍵啟動",
    href: "#local",
    external: false,
    accent: "#00D2FF",
  },
  {
    label: "EchoChat SaaS",
    desc: "企業級 AI 對話系統",
    href: "https://echochat.com.tw/",
    external: true,
    accent: "#a78bfa",
  },
  {
    label: "模型訓練代工",
    desc: "專屬 LoRA 訓練",
    href: "#integration",
    external: false,
    accent: "#34d399",
  },
  {
    label: "硬體性能調優",
    desc: "N100 / RTX 50 系統優化",
    href: "#local",
    external: false,
    accent: "#fbbf24",
  },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="snap-section relative flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#000000" }}
    >
      <TechFlowBackground />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center w-full">

        {/* Top badge */}
        <motion.div {...rise(0.06)}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.05] text-[#E1E1E1]/50 text-xs tracking-[0.25em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-pulse" />
            Pivot AI · 樞智科技 · 一站式私有化 AI 解決方案
          </span>
        </motion.div>

        {/* Main metallic title */}
        <motion.h1
          {...rise(0.18)}
          className="mt-7 font-black tracking-tighter leading-[1.04] text-5xl sm:text-7xl lg:text-[86px]"
        >
          <span
            style={{
              background: "linear-gradient(175deg, #ffffff 0%, #E1E1E1 40%, #94a3b8 75%, #ffffff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            樞智 AI (Pivot AI)
          </span>
          <br />
          <span
            className="text-4xl sm:text-5xl lg:text-6xl font-bold"
            style={{
              background: "linear-gradient(135deg, #00D2FF 0%, #818cf8 55%, #c084fc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            你的私有化、不設限 AI 核心
          </span>
        </motion.h1>

        {/* Badge Row */}
        <motion.div
          {...rise(0.3)}
          className="mt-7 flex flex-wrap justify-center gap-3"
        >
          {badges.map(({ icon: Icon, label, color, border, bg }) => (
            <span
              key={label}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold ${border} ${bg} ${color}`}
            >
              <Icon size={14} />
              {label}
            </span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          {...rise(0.42)}
          className="mt-6 text-[#E1E1E1]/60 text-base sm:text-lg font-light max-w-2xl leading-relaxed"
        >
          拒絕雲端審核，釋放創作自由。
          <br className="hidden sm:block" />
          樞智 AI 提供最專業的本地 SD / FLUX / LLM 環境架設，
          <br className="hidden sm:block" />
          數據永不落地，隱私與創意由你掌控。
        </motion.p>

        {/* Primary CTAs */}
        <motion.div {...rise(0.52)} className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#bento"
            className="group relative px-9 py-3.5 rounded-full bg-white text-black font-bold text-sm transition-all duration-200 hover:bg-white/90 overflow-hidden"
          >
            立即部署
            <motion.span
              className="absolute inset-0 rounded-full"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              style={{ boxShadow: "0 0 28px 6px rgba(0,210,255,0.35)" }}
            />
          </a>
          <a
            href="#contact"
            className="px-9 py-3.5 rounded-full border border-[#E1E1E1]/20 text-[#E1E1E1] font-bold text-sm hover:border-[#00D2FF]/50 hover:bg-[#00D2FF]/5 transition-all duration-200"
          >
            諮詢方案
          </a>
        </motion.div>

        {/* Service Matrix */}
        <motion.div
          {...rise(0.64)}
          className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl"
        >
          {services.map((s) => {
            const inner = (
              <>
                <span
                  className="text-sm font-bold text-white group-hover:transition-colors duration-200"
                  style={{ color: "inherit" }}
                >
                  {s.label}
                </span>
                <span className="text-[11px] text-[#E1E1E1]/35 leading-snug">{s.desc}</span>
                {s.external && (
                  <ExternalLink size={11} className="absolute top-2.5 right-2.5 text-white/20 group-hover:text-white/50 transition-colors" />
                )}
              </>
            );

            const cls =
              "group relative flex flex-col items-center gap-1.5 px-3 py-4 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20 transition-all duration-200 text-center cursor-pointer";

            return s.external ? (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={cls}>
                {inner}
              </a>
            ) : (
              <a key={s.label} href={s.href} className={cls}>
                {inner}
              </a>
            );
          })}
        </motion.div>

        {/* Stats row */}
        <motion.div
          {...rise(0.76)}
          className="mt-10 grid grid-cols-3 divide-x divide-white/8 overflow-hidden rounded-2xl border border-white/8 max-w-2xl w-full"
        >
          {[
            { val: "100%", label: "資料主權" },
            { val: "無限制", label: "創作自由" },
            { val: "零月租", label: "本地算力" },
          ].map(({ val, label }) => (
            <div key={label} className="py-5 px-4 text-center bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
              <div
                className="text-xl sm:text-2xl font-bold"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {val}
              </div>
              <div className="text-xs text-[#E1E1E1]/30 mt-1 tracking-wide">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#bento"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 text-white/20 hover:text-[#00D2FF]/60 transition-colors"
      >
        <ChevronDown size={26} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
