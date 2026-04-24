"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

/* ── Animation helpers ── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay },
});

const heroAnim = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay },
});

/* ── Data ── */
const services = [
  {
    num: "01",
    title: "本地生圖部署",
    desc: "SD / FLUX / LLM 完整架設，無審核，零月租，數據永不外流。RTX 50 深度優化。",
    href: "/services/local-ai",
    external: false,
  },
  {
    num: "02",
    title: "企業 AI 串接",
    desc: "私有知識大腦、API 深度整合、EchoChat 客服，從 PoC 到上線一站交付。",
    href: "/services/enterprise",
    external: false,
  },
  {
    num: "03",
    title: "EchoChat SaaS",
    desc: "LINE · Instagram · Telegram 一鍵串接，企業級 AI 客服，訂閱即用。",
    href: "https://echochat.com.tw/",
    external: true,
  },
  {
    num: "04",
    title: "硬體調優 & 模型代工",
    desc: "N100 / RTX 50 系統優化、LoRA 訓練代工，榨出每一分硬體潛能。",
    href: "/services/others",
    external: false,
  },
];

const stats = [
  { val: "100%", label: "DATA SOVEREIGNTY" },
  { val: "0", label: "CENSORSHIP FILTERS" },
  { val: "24/7", label: "UPTIME" },
  { val: "RTX 50", label: "OPTIMIZED" },
];

export default function HomeClient() {
  return (
    <main style={{ background: "#0a0a0a" }}>

      {/* ═══════════════════════════════════════════════
          HERO — full viewport, light column from bottom-left
      ═══════════════════════════════════════════════ */}
      <section
        className="relative min-h-[100dvh] flex flex-col justify-end pb-24 overflow-hidden"
        style={{ background: "#0a0a0a" }}
      >
        {/* Light column — CSS only */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 70% at 10% 110%, rgba(200,214,229,0.09) 0%, transparent 60%),
              radial-gradient(ellipse 40% 50% at 5% 100%, rgba(200,214,229,0.05) 0%, transparent 50%)
            `,
          }}
        />

        {/* Subtle horizontal scan lines */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 3px)",
            backgroundSize: "100% 80px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          {/* Overline */}
          <motion.p
            {...heroAnim(0.2)}
            className="text-[11px] font-semibold tracking-[0.3em] uppercase mb-6"
            style={{ color: "rgba(200,214,229,0.6)" }}
          >
            PRIVATE · UNLIMITED · SOVEREIGN
          </motion.p>

          {/* Main headline */}
          <motion.h1
            {...heroAnim(0.35)}
            className="font-black tracking-tighter leading-[0.95]"
            style={{
              fontSize: "clamp(48px, 8vw, 96px)",
              color: "#ffffff",
            }}
          >
            你的私有化
            <br />
            AI 核心
          </motion.h1>

          <motion.p
            {...heroAnim(0.5)}
            className="mt-8 max-w-md text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            拒絕雲端審核。釋放創作自由。
            本地算力，完整隱私，由你掌控。
          </motion.p>

          <motion.div {...heroAnim(0.65)} className="mt-10 flex items-center gap-6">
            <Link href="/services/local-ai"
              className="flex items-center gap-2 px-7 py-3 bg-white text-black text-sm font-semibold tracking-wide hover:bg-white/90 transition-all duration-200">
              立即部署
            </Link>
            <Link href="/contact"
              className="flex items-center gap-2 text-sm font-medium border-b border-white/30 pb-0.5 hover:border-white/70 transition-all duration-200"
              style={{ color: "rgba(255,255,255,0.65)" }}>
              諮詢方案
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Bottom divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
      </section>


      {/* ═══════════════════════════════════════════════
          STATS — Tesla spec sheet style
      ═══════════════════════════════════════════════ */}
      <section style={{ background: "#0a0a0a", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/6">
            {stats.map(({ val, label }, i) => (
              <motion.div
                key={label}
                {...fadeUp(i * 0.08)}
                className="px-8 py-12 text-center md:text-left"
              >
                <div
                  className="font-black leading-none tracking-tighter"
                  style={{ fontSize: "clamp(40px, 5vw, 64px)", color: "#ffffff" }}
                >
                  {val}
                </div>
                <div
                  className="mt-3 text-[11px] font-semibold tracking-[0.18em] uppercase"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  {label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════
          SERVICES — horizontal rows with numbers
      ═══════════════════════════════════════════════ */}
      <section style={{ background: "#111111" }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Header row */}
          <div className="py-16 border-b border-white/8">
            <motion.p
              {...fadeUp(0)}
              className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-4"
              style={{ color: "rgba(200,214,229,0.5)" }}
            >
              Services
            </motion.p>
            <motion.h2
              {...fadeUp(0.08)}
              className="font-black tracking-tighter"
              style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "#ffffff" }}
            >
              全方位 AI 解決方案
            </motion.h2>
          </div>

          {/* Service rows */}
          {services.map(({ num, title, desc, href, external }, i) => {
            const inner = (
              <motion.div
                {...fadeUp(i * 0.1)}
                className="group flex flex-col sm:flex-row sm:items-center gap-6 py-8 px-4 -mx-4 border-b transition-colors duration-300 cursor-pointer"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.04)" }}
              >
                {/* Number */}
                <span
                  className="text-xs font-mono font-semibold shrink-0 w-8"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                >
                  {num}
                </span>

                {/* Title */}
                <div className="sm:w-64 shrink-0">
                  <span
                    className="font-bold text-xl tracking-tight group-hover:text-white transition-colors"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    {title}
                  </span>
                  {external && (
                    <ExternalLink size={13} className="inline-block ml-2 opacity-30 group-hover:opacity-70 transition-opacity" />
                  )}
                </div>

                {/* Desc */}
                <p className="flex-1 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>
                  {desc}
                </p>

                {/* Arrow */}
                <ArrowRight
                  size={18}
                  className="shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
                  style={{ color: "rgba(200,214,229,0.7)" }}
                />
              </motion.div>
            );

            return external
              ? <a key={num} href={href} target="_blank" rel="noopener noreferrer">{inner}</a>
              : <Link key={num} href={href}>{inner}</Link>;
          })}
        </div>
      </section>


      {/* ═══════════════════════════════════════════════
          ECHOCHAT — split layout with CSS phone mockup
      ═══════════════════════════════════════════════ */}
      <section
        style={{
          background: "linear-gradient(135deg, #0d0d0d 0%, #0f0f1e 100%)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <motion.p {...fadeUp(0)} className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-6" style={{ color: "rgba(200,214,229,0.5)" }}>
                SaaS Platform
              </motion.p>
              <motion.h2 {...fadeUp(0.08)} className="font-black tracking-tighter mb-6" style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "#ffffff" }}>
                EchoChat
                <br />
                <span style={{ color: "rgba(255,255,255,0.35)" }}>企業 AI 對話平台</span>
              </motion.h2>
              <motion.p {...fadeUp(0.16)} className="text-base leading-relaxed mb-8 max-w-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                無需自建伺服器。訂閱即享企業級智能客服，整合 LINE、Instagram、Telegram，支援多語言與情感分析。
              </motion.p>
              <motion.div {...fadeUp(0.24)} className="flex flex-wrap gap-4">
                <a href="https://echochat.com.tw/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors">
                  前往 EchoChat
                  <ExternalLink size={14} />
                </a>
                <Link href="/services/enterprise"
                  className="flex items-center gap-2 px-6 py-3 border text-sm font-medium text-white/70 hover:text-white hover:border-white/40 transition-all"
                  style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                  企業方案
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            </div>

            {/* Right: CSS phone mockup */}
            <motion.div {...fadeUp(0.1)} className="flex justify-center lg:justify-end">
              <div
                className="relative"
                style={{ width: "260px", height: "520px" }}
              >
                {/* Phone body */}
                <div
                  className="absolute inset-0 rounded-[40px] border"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderColor: "rgba(255,255,255,0.12)",
                    boxShadow: "0 0 60px rgba(200,214,229,0.06), inset 0 1px 0 rgba(255,255,255,0.1)",
                  }}
                />
                {/* Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }} />
                {/* Screen content */}
                <div className="absolute inset-3 top-12 rounded-[32px] overflow-hidden" style={{ background: "rgba(255,255,255,0.02)" }}>
                  {/* Chat bubbles */}
                  <div className="p-4 flex flex-col gap-3 mt-2">
                    {[
                      { align: "left", w: "w-36", h: "h-8" },
                      { align: "right", w: "w-28", h: "h-6" },
                      { align: "left", w: "w-40", h: "h-10" },
                      { align: "right", w: "w-24", h: "h-6" },
                      { align: "left", w: "w-32", h: "h-8" },
                    ].map(({ align, w, h }, i) => (
                      <div key={i} className={`flex ${align === "right" ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`${w} ${h} rounded-2xl`}
                          style={{
                            background: align === "right"
                              ? "rgba(200,214,229,0.15)"
                              : "rgba(255,255,255,0.06)",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  {/* Typing bar */}
                  <div className="absolute bottom-4 left-4 right-4 h-10 rounded-full" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }} />
                </div>
                {/* Side button */}
                <div className="absolute top-24 -right-0.5 w-0.5 h-16 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════
          CTA — white background contrast section
      ═══════════════════════════════════════════════ */}
      <section
        className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-24"
        style={{ background: "#ffffff" }}
      >
        <motion.p
          {...fadeUp(0)}
          className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-6"
          style={{ color: "rgba(0,0,0,0.35)" }}
        >
          Get Started
        </motion.p>
        <motion.h2
          {...fadeUp(0.1)}
          className="font-black tracking-tighter leading-tight mb-6"
          style={{ fontSize: "clamp(40px, 6vw, 80px)", color: "#000000" }}
        >
          準備好了嗎？
        </motion.h2>
        <motion.p
          {...fadeUp(0.18)}
          className="max-w-sm text-base mb-10 leading-relaxed"
          style={{ color: "rgba(0,0,0,0.5)" }}
        >
          30 分鐘免費諮詢，找到最適合你的 AI 方案。
        </motion.p>
        <motion.div {...fadeUp(0.26)}>
          <Link href="/contact"
            className="flex items-center gap-3 px-10 py-4 bg-black text-white text-sm font-semibold tracking-wide hover:bg-black/90 transition-all duration-200">
            預約免費諮詢
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
