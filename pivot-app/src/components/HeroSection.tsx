"use client";

import { motion } from "framer-motion";
import { ChevronDown, ShieldCheck } from "lucide-react";
import BackgroundCanvas from "./BackgroundCanvas";

/* All hero animations use `animate` (not whileInView) so they always run */
const show = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const, delay },
});

const services = [
  {
    id: "local",
    label: "本地生圖部署",
    sub: "無審核 · NSFW · RTX 50 優化",
    href: "#local",
    external: false,
  },
  {
    id: "echochat",
    label: "EchoChat SaaS",
    sub: "LINE · Instagram · 24/7 客服",
    href: "https://echochat.com.tw/",
    external: true,
  },
  {
    id: "enterprise",
    label: "企業 AI 串接",
    sub: "知識庫 · API 整合 · 自動化",
    href: "#integration",
    external: false,
  },
  {
    id: "hardware",
    label: "硬體性能調優",
    sub: "驅動配置 · 系統加速 · 散熱規劃",
    href: "#local",
    external: false,
  },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="snap-section relative flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#050507" }}
    >
      {/* z-0 background */}
      <BackgroundCanvas />

      {/* z-10: all content — always on top */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center w-full">

        {/* Badge */}
        <motion.div {...show(0.05)}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/60 text-xs tracking-[0.22em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            全方位 AI 服務商
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          {...show(0.18)}
          className="mt-7 text-white text-5xl sm:text-7xl lg:text-[82px] font-black tracking-tighter leading-[1.05]"
        >
          樞智 AI (Pivot AI)
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%)",
            }}
          >
            最強私有化 AI 解決方案
          </span>
        </motion.h1>

        {/* Highlight tag */}
        <motion.div {...show(0.3)}>
          <div className="mt-6 inline-flex flex-wrap justify-center items-center gap-2 px-5 py-2.5 rounded-2xl border border-emerald-500/30 bg-emerald-950/30">
            <ShieldCheck size={15} className="text-emerald-400 shrink-0" />
            <span className="text-sm text-emerald-300 font-semibold">
              100% 本地運行 · 隱私安全 · 無審核限制（支持所有模型內容）
            </span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          {...show(0.42)}
          className="mt-5 text-slate-300 text-lg sm:text-xl font-light max-w-2xl leading-relaxed"
        >
          釋放硬體潛能，拒絕雲端審核。
          <br className="hidden sm:block" />
          針對專業創作與企業機密設計。
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...show(0.52)}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#bento"
            className="group relative px-9 py-3.5 rounded-full bg-white text-black font-bold text-sm transition-all duration-200 hover:bg-white/90"
          >
            立即部署
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ boxShadow: "0 0 24px 4px rgba(255,255,255,0.3)" }} />
          </a>
          <a
            href="#contact"
            className="px-9 py-3.5 rounded-full border border-white/30 text-white font-bold text-sm hover:border-white/60 hover:bg-white/8 transition-all duration-200"
          >
            諮詢方案
          </a>
        </motion.div>

        {/* Service Matrix */}
        <motion.div
          {...show(0.64)}
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl"
        >
          {services.map((s) =>
            s.external ? (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-1.5 px-4 py-4 rounded-2xl border border-white/10 bg-white/[0.04] hover:border-white/30 hover:bg-white/[0.09] transition-all duration-200 text-center"
              >
                <span className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                  {s.label}
                </span>
                <span className="text-[11px] text-white/40 leading-snug">{s.sub}</span>
                <span className="mt-1 text-[10px] text-purple-400 font-medium">↗ 官網</span>
              </a>
            ) : (
              <a
                key={s.id}
                href={s.href}
                className="group flex flex-col items-center gap-1.5 px-4 py-4 rounded-2xl border border-white/10 bg-white/[0.04] hover:border-white/30 hover:bg-white/[0.09] transition-all duration-200 text-center"
              >
                <span className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                  {s.label}
                </span>
                <span className="text-[11px] text-white/40 leading-snug">{s.sub}</span>
              </a>
            )
          )}
        </motion.div>

        {/* Stats */}
        <motion.div
          {...show(0.76)}
          className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/8 max-w-2xl w-full"
        >
          {[
            { val: "100%", label: "資料主權" },
            { val: "無限制", label: "模型內容自由" },
            { val: "24/7", label: "持續運行" },
          ].map(({ val, label }) => (
            <div key={label} className="py-5 px-4 text-center bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
              <div className="text-xl sm:text-2xl font-bold text-white">{val}</div>
              <div className="text-xs text-white/35 mt-1 tracking-wide">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#bento"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 text-white/25 hover:text-white/50 transition-colors"
      >
        <ChevronDown size={26} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
