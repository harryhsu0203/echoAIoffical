"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Cpu, Zap, Settings2, BarChart3, ArrowRight } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay },
});

const hwItems = [
  { icon: Cpu, title: "N100 / 低功耗平台優化", desc: "針對 Intel N100 / N305 等低功耗平台，調校記憶體時序、散熱策略與系統服務，讓小主機也能高效運行輕量 LLM。" },
  { icon: Zap, title: "RTX 40/50 系列驅動調校", desc: "驅動版本選型、Power Limit 優化、VRAM 時脈調整，在不超壓的前提下提升 10–25% AI 推理效能。" },
  { icon: Settings2, title: "系統層級加速", desc: "BIOS 優化、記憶體 XMP / EXPO 設定、Windows / Linux 系統精簡化，消除多餘背景負載。" },
  { icon: BarChart3, title: "效能基準測試", desc: "使用業界標準 benchmark 工具量化優化前後差異，提供完整報告。" },
];

const loraItems = [
  { q: "什麼是 LoRA 訓練？", a: "LoRA (Low-Rank Adaptation) 是一種輕量微調技術，可讓模型學習特定人物、風格或物件，大幅提升生圖的精準度與一致性。" },
  { q: "訓練一個 LoRA 需要多久？", a: "依照訓練圖片數量與目標效果，通常 2–48 小時不等。我們會根據你的需求評估並報價。" },
  { q: "需要提供什麼素材？", a: "通常需要 15–50 張目標圖片，我們提供圖片篩選、標注 (tagging) 與訓練一條龍服務。" },
  { q: "訓練完的模型可以在哪裡使用？", a: "可在 A1111、ComfyUI、Forge 等本地環境直接使用，模型檔案完全歸你所有。" },
];

export default function OthersClient() {
  return (
    <PageWrapper>
      <main className="bg-white text-[#333]">
        {/* ── Hero ── */}
        <section className="pt-24 pb-20 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fade(0)}>
              <Link href="/" className="inline-flex items-center gap-2 text-[#999] hover:text-black text-sm mb-8 transition-colors">
                ← 返回首頁
              </Link>
            </motion.div>
            <motion.p {...fade(0.05)} className="text-xs tracking-[0.3em] uppercase font-bold mb-4" style={{ color: "#D4AF37" }}>
              進階服務
            </motion.p>
            <motion.h1 {...fade(0.12)} className="text-4xl sm:text-6xl font-black tracking-tighter text-black leading-tight mb-6">
              硬體調優 &
              <br />
              <span style={{ color: "#D4AF37" }}>模型訓練代工</span>
            </motion.h1>
            <motion.p {...fade(0.22)} className="text-[#555] text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              讓你的硬體跑在最佳狀態，讓你的 AI 模型認識你的需求。
              從系統層級優化到客製 LoRA 訓練，我們提供最專業的技術服務。
            </motion.p>
            <motion.div {...fade(0.3)} className="flex flex-wrap justify-center gap-4">
              <Link href="/contact"
                className="px-8 py-3.5 rounded-full font-bold text-sm text-white transition-all hover:opacity-88"
                style={{ background: "#000" }}>
                預約諮詢
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Hardware Tuning ── */}
        <section className="py-20 px-6" style={{ background: "#FBFBFB" }}>
          <div className="max-w-6xl mx-auto">
            <motion.div {...fade(0)} className="text-center mb-12">
              <p className="text-xs tracking-[0.3em] uppercase font-bold mb-3" style={{ color: "#D4AF37" }}>硬體性能調優</p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-black">
                榨出每一分硬體潛能
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-5">
              {hwItems.map(({ icon: Icon, title, desc }, i) => (
                <motion.div key={title} {...fade(i * 0.08)}
                  className="p-7 rounded-2xl bg-white border transition-all hover:shadow-[0_6px_30px_rgba(212,175,55,0.1)] hover:border-[#D4AF37]/30 group"
                  style={{ borderColor: "#E8E8E8" }}>
                  <Icon size={20} className="mb-4" style={{ color: "#D4AF37" }} />
                  <h3 className="text-base font-bold text-black mb-2 group-hover:text-[#D4AF37] transition-colors">{title}</h3>
                  <p className="text-sm text-[#777] leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LoRA Training ── */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fade(0)} className="text-center mb-12">
              <p className="text-xs tracking-[0.3em] uppercase font-bold mb-3" style={{ color: "#D4AF37" }}>模型訓練代工</p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-black">
                打造你的專屬 LoRA
              </h2>
              <p className="mt-4 text-[#666] max-w-xl mx-auto leading-relaxed">
                讓 AI 模型精準認識你的角色、風格或品牌，生成高度一致的專屬圖像。
              </p>
            </motion.div>

            {/* Process */}
            <div className="grid sm:grid-cols-4 gap-4 mb-14">
              {["提供素材", "篩選標注", "訓練微調", "交付測試"].map((step, i) => (
                <motion.div key={step} {...fade(i * 0.08)} className="text-center">
                  <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center mx-auto mb-3 font-bold text-sm"
                    style={{ borderColor: "#D4AF37", color: "#D4AF37" }}>
                    {i + 1}
                  </div>
                  <div className="text-sm font-semibold text-black">{step}</div>
                </motion.div>
              ))}
            </div>

            {/* FAQ */}
            <div className="space-y-4">
              {loraItems.map(({ q, a }, i) => (
                <motion.div key={q} {...fade(i * 0.07)}
                  className="p-6 rounded-2xl border bg-white"
                  style={{ borderColor: "#E8E8E8" }}>
                  <h4 className="text-sm font-bold text-black mb-2">{q}</h4>
                  <p className="text-sm text-[#777] leading-relaxed">{a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 px-6 text-center" style={{ background: "#FBFBFB" }}>
          <motion.div {...fade(0)} className="max-w-xl mx-auto">
            <h2 className="text-3xl font-black tracking-tighter text-black mb-4">
              準備好提升你的 AI 能力了嗎？
            </h2>
            <p className="text-[#777] mb-8 leading-relaxed">告訴我們你的需求，我們提供免費評估報告。</p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-9 py-3.5 rounded-full font-bold text-sm text-white transition-all hover:scale-[1.02]"
              style={{ background: "#000" }}>
              免費諮詢 <ArrowRight size={15} />
            </Link>
          </motion.div>
        </section>
      </main>
    </PageWrapper>
  );
}
