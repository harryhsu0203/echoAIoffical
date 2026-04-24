"use client";

import { motion } from "framer-motion";
import { Server, Shield, Zap, Lock, Cpu, HardDrive } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const, delay },
});

const tags = [
  { icon: Cpu, label: "RTX 40/50 優化" },
  { icon: Shield, label: "資料不離境" },
  { icon: Lock, label: "零資料外洩風險" },
  { icon: Zap, label: "推理延遲 < 100ms" },
  { icon: HardDrive, label: "企業私有雲" },
  { icon: Server, label: "多節點叢集" },
];

const specs = [
  {
    title: "硬體選型",
    desc: "依需求評估 GPU / CPU 組合，規劃 VRAM、頻寬與儲存容量，提供完整採購建議。",
  },
  {
    title: "模型部署",
    desc: "支援 Llama、Mistral、Qwen 等主流開源 LLM，搭配 Ollama / vLLM 推理框架快速上線。",
  },
  {
    title: "RAG 知識庫",
    desc: "向量資料庫建置、文件切割與嵌入，打造企業專屬知識檢索系統。",
  },
  {
    title: "微調客製",
    desc: "以 LoRA / QLoRA 技術對企業資料微調，讓模型熟悉你的業務語境與口吻。",
  },
];

export default function LocalSection() {
  return (
    <section
      id="local"
      className="snap-section relative flex flex-col justify-center bg-[#0a0a0a] overflow-hidden"
    >
      {/* Ambient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 py-24">
        <motion.div {...fadeUp(0)}>
          <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-medium">
            本地架設
          </span>
        </motion.div>

        <motion.h2
          {...fadeUp(0.08)}
          className="mt-4 text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight"
        >
          本地 AI
          <br />
          <span className="text-slate-400">完全掌控</span>
        </motion.h2>

        <motion.p
          {...fadeUp(0.14)}
          className="mt-6 text-slate-300 text-lg max-w-xl"
        >
          將企業 AI 能力完整部署於自有環境，無月租費用，資料主權百分百在你手中。
          針對 RTX 40 / 50 系列 GPU 深度優化，確保最佳推理效能。
        </motion.p>

        <motion.div
          {...fadeUp(0.2)}
          className="mt-10 flex flex-wrap gap-3"
        >
          {tags.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/70 text-sm"
            >
              <Icon size={14} className="text-blue-400" />
              {label}
            </div>
          ))}
        </motion.div>

        <motion.div
          {...fadeUp(0.28)}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {specs.map(({ title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.28 + i * 0.07, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
              className="p-5 rounded-2xl border border-white/8 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06] transition-all group"
            >
              <div className="text-sm font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {title}
              </div>
              <div className="text-sm text-white/40 leading-relaxed">{desc}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div {...fadeUp(0.4)} className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all hover:scale-105"
          >
            取得架設報價
          </a>
        </motion.div>
      </div>
    </section>
  );
}
