"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Globe,
  BrainCircuit,
  Webhook,
  LineChart,
  Users,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const, delay },
});

const features = [
  {
    icon: MessageSquare,
    title: "EchoChat 對話平台",
    desc: "一站式 AI 客服串接，整合 LINE、Instagram、Telegram，24/7 全天候智能服務。",
    href: "https://echochat.com.tw/",
    ext: true,
  },
  {
    icon: Globe,
    title: "多平台管理",
    desc: "統一後台管理所有對話渠道，不再需要切換多個視窗。",
  },
  {
    icon: BrainCircuit,
    title: "企業大腦",
    desc: "上傳企業知識庫，AI 自動學習產品資訊、FAQ，精準回答客戶問題。",
  },
  {
    icon: Webhook,
    title: "API 深度整合",
    desc: "支援 REST API / Webhook，與 CRM、ERP、電商系統無縫串接。",
  },
  {
    icon: LineChart,
    title: "對話分析儀表板",
    desc: "即時監控滿意度、轉換率與熱點問題，驅動持續優化。",
  },
  {
    icon: Users,
    title: "人機協作",
    desc: "AI 處理常規問題，複雜情境無縫轉接真人客服，確保服務品質。",
  },
];

export default function SaasSection() {
  return (
    <section
      id="saas"
      className="snap-section relative flex flex-col justify-center bg-black overflow-hidden"
    >
      {/* Ambient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-indigo-900/15 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 py-24">
        <motion.div {...fadeUp(0)}>
          <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-medium">
            SaaS 串接
          </span>
        </motion.div>

        <motion.h2
          {...fadeUp(0.08)}
          className="mt-4 text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight"
        >
          雲端 AI
          <br />
          <span className="text-white/30">即插即用</span>
        </motion.h2>

        <motion.p
          {...fadeUp(0.14)}
          className="mt-6 text-white/50 text-lg max-w-xl"
        >
          無需自建伺服器，透過訂閱制 SaaS 方案立即獲得企業級 AI 能力，
          快速串接現有社群與業務系統，數分鐘內上線。
        </motion.p>

        {/* EchoChat Featured Card */}
        <motion.div {...fadeUp(0.2)} className="mt-10">
          <a
            href="https://echochat.com.tw/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 rounded-2xl border border-purple-500/30 bg-gradient-to-r from-purple-950/40 to-indigo-950/40 hover:border-purple-400/50 hover:from-purple-950/60 hover:to-indigo-950/60 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold border border-purple-500/30">
                    旗艦產品
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">EchoChat</h3>
                <p className="text-white/50 text-sm mt-1">
                  AI 客服串接平台 — 一站式整合 LINE、Instagram、Telegram 等渠道，
                  智能意圖識別 + 情感分析，立即為企業打造 24/7 智能客服。
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold group-hover:bg-white/90 transition-all whitespace-nowrap">
                  前往官網
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.28)}
          className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.slice(1).map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.07, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
              className="p-5 rounded-2xl border border-white/8 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05] transition-all group"
            >
              <Icon size={18} className="text-purple-400 mb-3" />
              <div className="text-sm font-semibold text-white mb-1.5 group-hover:text-purple-300 transition-colors">
                {title}
              </div>
              <div className="text-sm text-white/40 leading-relaxed">{desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
