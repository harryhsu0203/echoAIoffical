"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay },
});

const platforms = [
  { name: "Automatic1111 (A1111)", desc: "最成熟的 SD WebUI，外掛生態豐富，一鍵安裝" },
  { name: "ComfyUI", desc: "節點式工作流，專業創作者首選，支援複雜管線" },
  { name: "Stable Diffusion Forge", desc: "A1111 高效優化版，VRAM 使用率更低 20–30%" },
  { name: "FLUX.1 (dev / schnell)", desc: "最新世代圖像模型，細節逼真，風格多樣" },
  { name: "Ollama / vLLM", desc: "本地 LLM 推理，支援 Llama / Qwen / Mistral" },
  { name: "Open WebUI", desc: "本地 ChatGPT 替代方案，全功能對話界面" },
];

const features = [
  { num: "01", title: "100% 本地運行", desc: "所有運算在你的機器完成，雲端無法看到任何圖片或提示詞。" },
  { num: "02", title: "無審核限制", desc: "支持所有模型內容，包含 NSFW、成人創作，完全不受平台政策限制。" },
  { num: "03", title: "RTX 40/50 深度優化", desc: "針對 NVIDIA Ada/Blackwell 架構調校，最大化 VRAM 效率與推理速度。" },
  { num: "04", title: "零月租費用", desc: "一次架設，永久使用。無訂閱費、無 API 限制、不依賴任何第三方服務。" },
];

const hardware = [
  { tier: "Entry", gpu: "RTX 4070 / 4070 Ti", vram: "12 GB", perf: "FLUX.1 schnell，個人創作首選" },
  { tier: "Professional", gpu: "RTX 4090 / 5090", vram: "24 GB", perf: "全解析度 FLUX + LoRA 訓練並行" },
  { tier: "Enterprise", gpu: "Dual A100 / H100", vram: "80 GB ×2", perf: "多用戶服務 + 大型模型訓練" },
];

export default function LocalAIClient() {
  return (
    <PageWrapper>
      <main style={{ background: "#0a0a0a", color: "#ffffff" }}>

        {/* Hero */}
        <section className="relative pt-32 pb-24 px-6 overflow-hidden" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse 50% 60% at 80% 50%, rgba(200,214,229,0.05) 0%, transparent 60%)" }} />
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeUp(0)}>
              <Link href="/" className="inline-flex items-center gap-2 text-sm mb-10 transition-colors"
                style={{ color: "rgba(255,255,255,0.35)" }}>
                ← Back
              </Link>
            </motion.div>
            <motion.p {...fadeUp(0.05)} className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-6" style={{ color: "rgba(200,214,229,0.5)" }}>
              Local Deployment
            </motion.p>
            <motion.h1 {...fadeUp(0.12)} className="font-black tracking-tighter leading-tight mb-6"
              style={{ fontSize: "clamp(40px, 6vw, 72px)", color: "#ffffff" }}>
              釋放創作本能，
              <br />
              <span style={{ color: "rgba(255,255,255,0.35)" }}>拒絕規則審核</span>
            </motion.h1>
            <motion.p {...fadeUp(0.22)} className="max-w-xl text-base leading-relaxed mb-10"
              style={{ color: "rgba(255,255,255,0.45)" }}>
              樞智 AI 提供最完整的本地 SD / FLUX / LLM 環境架設服務。數據永不落地，隱私與創意完全由你掌控。支持所有 NSFW 內容生成。
            </motion.p>
            <motion.div {...fadeUp(0.3)} className="flex gap-6 flex-wrap">
              <Link href="/contact" className="flex items-center gap-2 px-7 py-3 bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors">
                預約架設諮詢
              </Link>
              <a href="#platforms" className="flex items-center gap-2 text-sm border-b pb-0.5 transition-colors"
                style={{ color: "rgba(255,255,255,0.5)", borderColor: "rgba(255,255,255,0.2)" }}>
                查看支援平台 <ArrowRight size={14} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Image placeholder */}
        <section style={{ background: "#111111", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="max-w-7xl mx-auto px-6 py-16">
            <motion.div {...fadeUp(0)}
              className="w-full flex flex-col items-center justify-center gap-3"
              style={{ aspectRatio: "16/7", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="w-12 h-12 border border-dashed flex items-center justify-center text-2xl" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
                +
              </div>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.25)" }}>請在此處放入高品質的 AI 生成藝術圖</p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.15)" }}>建議尺寸：1920×810px</p>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section style={{ background: "#0a0a0a", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="max-w-7xl mx-auto px-6 py-20">
            <motion.h2 {...fadeUp(0)} className="font-black tracking-tighter mb-12"
              style={{ fontSize: "clamp(28px, 3vw, 40px)", color: "#ffffff" }}>
              完全的自由與掌控
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-0">
              {features.map(({ num, title, desc }, i) => (
                <motion.div key={num} {...fadeUp(i * 0.08)}
                  className="py-8 px-6 border-b transition-colors group"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.025)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                  <span className="text-xs font-mono mb-3 block" style={{ color: "rgba(255,255,255,0.2)" }}>{num}</span>
                  <h3 className="font-bold text-lg mb-2" style={{ color: "#ffffff" }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section id="platforms" style={{ background: "#111111", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="max-w-7xl mx-auto px-6 py-20">
            <motion.h2 {...fadeUp(0)} className="font-black tracking-tighter mb-10"
              style={{ fontSize: "clamp(28px, 3vw, 40px)", color: "#ffffff" }}>
              涵蓋所有主流平台
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-0">
              {platforms.map(({ name, desc }, i) => (
                <motion.div key={name} {...fadeUp(i * 0.06)}
                  className="flex gap-4 py-5 px-4 -mx-4 border-b transition-colors"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                  <div className="w-1 h-1 rounded-full mt-2.5 shrink-0" style={{ background: "rgba(200,214,229,0.5)" }} />
                  <div>
                    <div className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.85)" }}>{name}</div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Hardware */}
        <section style={{ background: "#0a0a0a", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="max-w-7xl mx-auto px-6 py-20">
            <motion.h2 {...fadeUp(0)} className="font-black tracking-tighter mb-10"
              style={{ fontSize: "clamp(28px, 3vw, 40px)", color: "#ffffff" }}>
              硬體配置建議
            </motion.h2>
            <div className="grid md:grid-cols-3 divide-x" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              {hardware.map(({ tier, gpu, vram, perf }, i) => (
                <motion.div key={tier} {...fadeUp(i * 0.1)} className="px-8 py-8">
                  <p className="text-[10px] tracking-[0.2em] uppercase font-semibold mb-4" style={{ color: "rgba(255,255,255,0.25)" }}>{tier}</p>
                  <h3 className="text-lg font-black mb-1" style={{ color: "#ffffff" }}>{gpu}</h3>
                  <p className="text-sm font-semibold mb-3" style={{ color: "rgba(200,214,229,0.7)" }}>{vram} VRAM</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{perf}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 text-center" style={{ background: "#111111" }}>
          <motion.div {...fadeUp(0)} className="max-w-lg mx-auto">
            <h2 className="font-black tracking-tighter mb-4" style={{ fontSize: "clamp(28px, 3vw, 40px)", color: "#ffffff" }}>
              立即開始架設
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.4)" }}>
              從硬體選型到系統上線，一條龍服務，確保你能完全獨立維護。
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors">
              預約免費諮詢 <ArrowRight size={15} />
            </Link>
          </motion.div>
        </section>
      </main>
    </PageWrapper>
  );
}
