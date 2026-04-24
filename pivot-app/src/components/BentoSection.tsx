"use client";

import { motion } from "framer-motion";
import { Server, Cloud, Layers, GitMerge, BrainCircuit, Settings2 } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay },
});

/* ── LED blinking server animation ── */
function ServerLED() {
  const leds = [
    { color: "#4ade80", delay: 0 },
    { color: "#4ade80", delay: 0.4 },
    { color: "#60a5fa", delay: 0.2 },
    { color: "#f87171", delay: 0.8 },
    { color: "#4ade80", delay: 1.1 },
    { color: "#4ade80", delay: 0.6 },
  ];

  return (
    <div className="relative flex flex-col gap-2.5">
      {[0, 1, 2].map((row) => (
        <div key={row} className="flex items-center gap-2">
          {/* Server rack bar */}
          <div className="flex-1 h-7 rounded bg-white/[0.04] border border-white/8 flex items-center px-2 gap-2">
            <div className="w-4 h-1.5 rounded-sm bg-white/10" />
            <div className="flex-1 h-1 rounded-full bg-white/5" />
            {/* LEDs */}
            {leds.slice(row * 2, row * 2 + 2).map((led, i) => (
              <motion.div
                key={i}
                animate={{
                  opacity: [1, 0.15, 1],
                  boxShadow: [
                    `0 0 4px ${led.color}`,
                    `0 0 0px transparent`,
                    `0 0 6px ${led.color}`,
                  ],
                }}
                transition={{
                  duration: 1.8,
                  delay: led.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: led.color }}
              />
            ))}
          </div>
        </div>
      ))}
      {/* Status label */}
      <div className="flex items-center gap-1.5 mt-1">
        <motion.div
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1.5 h-1.5 rounded-full bg-emerald-400"
        />
        <span className="text-xs text-emerald-400/80 font-mono">
          SYSTEM ONLINE
        </span>
      </div>
    </div>
  );
}

/* ── Flowing data chain animation ── */
function DataChain() {
  const nodes = ["API", "LLM", "DB", "APP"];

  return (
    <div className="flex items-center gap-0 justify-center w-full">
      {nodes.map((node, i) => (
        <div key={node} className="flex items-center">
          {/* Node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.15,
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="w-12 h-12 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center text-xs font-mono text-white/60 relative"
          >
            {node}
            {/* Pulse ring on active node */}
            {i === 1 && (
              <motion.span
                animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0 rounded-xl border border-purple-400/40"
              />
            )}
          </motion.div>

          {/* Connector line between nodes */}
          {i < nodes.length - 1 && (
            <div className="relative w-8 h-px bg-white/8 overflow-hidden">
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 1.2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-0 left-0 h-full w-4 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(139,92,246,0.9), transparent)",
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Small cards data ── */
const smallCards = [
  {
    icon: BrainCircuit,
    title: "模型微調",
    desc: "LoRA/QLoRA 客製化訓練，讓模型理解你的業務語境。",
    color: "#818cf8",
  },
  {
    icon: GitMerge,
    title: "系統整合",
    desc: "串接 ERP/CRM，打造 AI 驅動的業務自動化工作流。",
    color: "#34d399",
  },
  {
    icon: Layers,
    title: "知識管理",
    desc: "向量資料庫 + RAG，讓企業資料成為可用資產。",
    color: "#f59e0b",
  },
  {
    icon: Settings2,
    title: "維運監控",
    desc: "模型版本管理、效能追蹤與持續優化支援。",
    color: "#38bdf8",
  },
];

export default function BentoSection() {
  return (
    <section
      id="bento"
      className="snap-section relative flex flex-col justify-center bg-[#050507] overflow-hidden"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(ellipse, rgba(99,102,241,0.3) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 py-16">
        <motion.div {...fadeUp(0)}>
          <span className="text-xs tracking-[0.3em] uppercase text-white/35 font-medium">
            服務方案
          </span>
        </motion.div>

        <motion.h2
          {...fadeUp(0.08)}
          className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white"
        >
          一站式 AI 能力
        </motion.h2>

        {/* Bento Grid */}
        <motion.div
          {...fadeUp(0.16)}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {/* Card 1 — 本地部署 (tall) */}
          <motion.div
            whileHover={{ borderColor: "rgba(255,255,255,0.25)" }}
            className="group lg:row-span-2 p-6 rounded-2xl border border-white/8 bg-white/[0.025] flex flex-col gap-4 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Server size={16} className="text-emerald-400" />
              <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">
                本地部署
              </span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">企業內部 AI 架設</h3>
              <p className="text-sm text-white/40 mt-2 leading-relaxed">
                RTX 40/50 系列 GPU 優化，資料完全不離境。無月租費用，算力由你掌控。
              </p>
            </div>

            {/* LED Server animation */}
            <div className="mt-auto pt-4 border-t border-white/6">
              <ServerLED />
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {["RTX 4090", "零月租", "100% 私有", "Ollama"].map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-full text-xs border border-white/10 text-white/40"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2 — SaaS 串接 */}
          <motion.div
            whileHover={{ borderColor: "rgba(255,255,255,0.25)" }}
            className="group p-6 rounded-2xl border border-white/8 bg-white/[0.025] flex flex-col gap-4 transition-colors sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-2">
              <Cloud size={16} className="text-purple-400" />
              <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">
                SaaS 串接
              </span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">即插即用雲端 AI</h3>
              <p className="text-sm text-white/40 mt-1 leading-relaxed">
                訂閱制，無需硬體，分鐘內上線 EchoChat 客服平台。
              </p>
            </div>

            {/* Data chain animation */}
            <div className="mt-auto py-4">
              <DataChain />
            </div>

            <a
              href="https://echochat.com.tw/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-2 text-xs text-purple-400 hover:text-purple-300 transition-colors"
            >
              EchoChat 官網
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          {/* Card 3 — 全案整合 */}
          <motion.div
            whileHover={{ borderColor: "rgba(255,255,255,0.25)" }}
            className="group p-6 rounded-2xl border border-white/8 bg-white/[0.025] flex flex-col gap-3 transition-colors"
          >
            <div className="flex items-center gap-2">
              <GitMerge size={16} className="text-sky-400" />
              <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">
                全案整合
              </span>
            </div>
            <h3 className="text-base font-bold text-white">從 PoC 到上線</h3>
            <p className="text-sm text-white/40 leading-relaxed">
              需求盤點 → 快速驗證 → 部署上線 → 長期維運，全程陪跑。
            </p>
            <div className="mt-auto flex gap-2">
              {["2–4 週交付", "API 串接", "員工培訓"].map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-full text-xs border border-white/10 text-white/35"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 4 small cards */}
          {smallCards.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              whileHover={{ borderColor: "rgba(255,255,255,0.22)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2 + i * 0.07,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="group p-5 rounded-2xl border border-white/8 bg-white/[0.02] flex flex-col gap-3 transition-colors"
            >
              <Icon size={16} style={{ color }} />
              <h4 className="text-sm font-bold text-white">{title}</h4>
              <p className="text-xs text-white/35 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
