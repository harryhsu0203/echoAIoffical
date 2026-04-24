"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay },
});

const hwItems = [
  { num: "01", title: "N100 / 低功耗平台優化", desc: "調校記憶體時序、散熱策略與系統服務，讓小主機也能高效運行輕量 LLM。" },
  { num: "02", title: "RTX 40/50 驅動調校", desc: "驅動版本選型、Power Limit 優化、VRAM 時脈調整，提升 10–25% 推理效能。" },
  { num: "03", title: "系統層級加速", desc: "BIOS 優化、記憶體 XMP / EXPO 設定、Windows / Linux 系統精簡化。" },
  { num: "04", title: "效能基準測試報告", desc: "使用業界標準 benchmark 工具量化優化前後差異，提供完整報告。" },
];

const loraFAQ = [
  { q: "什麼是 LoRA 訓練？", a: "LoRA 是輕量微調技術，可讓模型學習特定人物、風格或物件，大幅提升生圖精準度與一致性。" },
  { q: "訓練一個 LoRA 需要多久？", a: "依訓練圖片數量與目標效果，通常 2–48 小時不等，我們會根據需求評估並報價。" },
  { q: "需要提供什麼素材？", a: "通常需要 15–50 張目標圖片，我們提供圖片篩選、標注 (tagging) 與訓練一條龍服務。" },
  { q: "訓練完的模型可以在哪裡使用？", a: "可在 A1111、ComfyUI、Forge 等本地環境直接使用，模型檔案完全歸你所有。" },
];

export default function OthersClient() {
  return (
    <PageWrapper>
      <main style={{ background: "#0a0a0a", color: "#ffffff" }}>
        <section className="pt-32 pb-24 px-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeUp(0)}>
              <Link href="/" className="inline-flex items-center gap-2 text-sm mb-10 transition-colors" style={{ color: "rgba(255,255,255,0.35)" }}>← Back</Link>
            </motion.div>
            <motion.p {...fadeUp(0.05)} className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-6" style={{ color: "rgba(200,214,229,0.5)" }}>Advanced Services</motion.p>
            <motion.h1 {...fadeUp(0.12)} className="font-black tracking-tighter leading-tight mb-6"
              style={{ fontSize: "clamp(40px, 6vw, 72px)", color: "#ffffff" }}>
              硬體調優 &<br />
              <span style={{ color: "rgba(255,255,255,0.3)" }}>模型訓練代工</span>
            </motion.h1>
            <motion.p {...fadeUp(0.22)} className="max-w-xl text-base leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.45)" }}>
              讓你的硬體跑在最佳狀態，讓你的 AI 模型認識你的需求。從系統層級優化到客製 LoRA 訓練，最專業的技術服務。
            </motion.p>
            <motion.div {...fadeUp(0.3)}>
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors">
                預約諮詢
              </Link>
            </motion.div>
          </div>
        </section>

        <section style={{ background: "#111111", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="max-w-7xl mx-auto px-6 py-20">
            <motion.h2 {...fadeUp(0)} className="font-black tracking-tighter mb-10" style={{ fontSize: "clamp(28px, 3vw, 40px)", color: "#ffffff" }}>硬體性能調優</motion.h2>
            {hwItems.map(({ num, title, desc }, i) => (
              <motion.div key={num} {...fadeUp(i * 0.08)}
                className="flex flex-col sm:flex-row gap-6 py-7 border-b transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.025)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                <span className="text-xs font-mono w-8 shrink-0 mt-0.5" style={{ color: "rgba(255,255,255,0.2)" }}>{num}</span>
                <div className="sm:w-56 shrink-0 font-bold text-base" style={{ color: "rgba(255,255,255,0.85)" }}>{title}</div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section style={{ background: "#0a0a0a", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="max-w-4xl mx-auto px-6 py-20">
            <motion.h2 {...fadeUp(0)} className="font-black tracking-tighter mb-4" style={{ fontSize: "clamp(28px, 3vw, 40px)", color: "#ffffff" }}>LoRA 訓練代工</motion.h2>
            <motion.p {...fadeUp(0.06)} className="text-sm mb-12 leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
              讓 AI 模型精準認識你的角色、風格或品牌，生成高度一致的專屬圖像。
            </motion.p>
            <div className="space-y-0">
              {loraFAQ.map(({ q, a }, i) => (
                <motion.div key={q} {...fadeUp(i * 0.07)}
                  className="py-7 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <h4 className="font-semibold mb-2" style={{ color: "rgba(255,255,255,0.8)" }}>{q}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 text-center" style={{ background: "#111111" }}>
          <motion.div {...fadeUp(0)} className="max-w-lg mx-auto">
            <h2 className="font-black tracking-tighter mb-4" style={{ fontSize: "clamp(28px, 3vw, 40px)", color: "#ffffff" }}>準備好提升你的 AI 能力？</h2>
            <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.4)" }}>告訴我們你的需求，提供免費評估報告。</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors">
              免費諮詢 <ArrowRight size={15} />
            </Link>
          </motion.div>
        </section>
      </main>
    </PageWrapper>
  );
}
