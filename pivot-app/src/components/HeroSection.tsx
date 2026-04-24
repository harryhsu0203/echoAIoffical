"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import BackgroundCanvas from "./BackgroundCanvas";

const word = (delay = 0) => ({
  initial: { opacity: 0, y: 40, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: {
    duration: 0.9,
    ease: [0.16, 1, 0.3, 1] as const,
    delay,
  },
});

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="snap-section relative flex flex-col items-center justify-center overflow-hidden bg-[#050507]"
    >
      <BackgroundCanvas />

      {/* Content — above all canvas layers (z-50) */}
      <div className="relative z-50 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Badge */}
        <motion.div {...word(0.1)}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs tracking-[0.25em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            全方位 AI 服務商
          </span>
        </motion.div>

        {/* Main title with metallic gradient */}
        <motion.h1
          {...word(0.22)}
          className="mt-8 text-5xl sm:text-7xl lg:text-[88px] font-black tracking-tighter leading-none"
          style={{
            background:
              "linear-gradient(160deg, #ffffff 0%, #e2e8f0 30%, #94a3b8 60%, #ffffff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          樞智 AI：定義你的
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            全場景 AI 戰力
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...word(0.36)}
          className="mt-7 text-lg sm:text-xl text-white/40 font-light tracking-widest"
        >
          本地極速部署，雲端智慧串接。
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...word(0.5)}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {/* Primary: White glow */}
          <a
            href="#bento"
            className="group relative px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm transition-all hover:bg-white/95"
          >
            <span className="relative z-10">立即部署</span>
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg bg-white/40" />
          </a>

          {/* Secondary: Transparent white border */}
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full border border-white/25 text-white font-semibold text-sm backdrop-blur-sm hover:border-white/50 hover:bg-white/8 transition-all"
          >
            諮詢方案
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          {...word(0.64)}
          className="mt-16 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/8 max-w-2xl w-full"
        >
          {[
            { val: "100%", label: "資料主權" },
            { val: "< 100ms", label: "本地推理延遲" },
            { val: "24/7", label: "持續服務" },
          ].map(({ val, label }) => (
            <div
              key={label}
              className="py-6 px-4 text-center bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
            >
              <div
                className="text-xl sm:text-2xl font-bold"
                style={{
                  background: "linear-gradient(135deg, #fff 0%, #94a3b8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {val}
              </div>
              <div className="text-xs text-white/30 mt-1 tracking-wide">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#bento"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 text-white/20 hover:text-white/50 transition-colors"
      >
        <ChevronDown size={26} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
