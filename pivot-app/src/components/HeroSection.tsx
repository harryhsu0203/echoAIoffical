"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay },
});

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="snap-section relative flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Gradient ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-radial from-white/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-950/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-950/40 rounded-full blur-3xl" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/60 text-xs tracking-widest uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          全方位 AI 服務商
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none"
        >
          Pivot AI
          <br />
          <span className="text-white/40 font-thin">樞智科技</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-8 text-xl sm:text-2xl text-white/50 font-light tracking-wide max-w-xl mx-auto"
        >
          本地極速部署，雲端智慧串接。
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all hover:scale-105"
          >
            立即開始
          </a>
          <a
            href="#local"
            className="px-8 py-3.5 rounded-full border border-white/20 text-white font-semibold text-sm hover:border-white/50 hover:bg-white/5 transition-all"
          >
            諮詢方案
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.4)}
          className="mt-20 grid grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden max-w-2xl mx-auto border border-white/10"
        >
          {[
            { val: "100%", label: "資料主權" },
            { val: "24/7", label: "持續運行" },
            { val: "0", label: "月租限制" },
          ].map(({ val, label }) => (
            <div key={label} className="bg-black py-6 px-4 text-center">
              <div className="text-2xl font-bold text-white">{val}</div>
              <div className="text-xs text-white/40 mt-1 tracking-wide">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#local"
        {...fadeUp(0.6)}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/60 transition-colors"
      >
        <ChevronDown size={28} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
