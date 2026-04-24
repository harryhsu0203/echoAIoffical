"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Cpu, Zap, Lock, Check, ArrowRight, Server } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay },
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
  { icon: Lock, title: "100% 本地運行", desc: "所有運算在你的機器完成，雲端無法看到任何圖片或提示詞。" },
  { icon: Shield, title: "無審核限制", desc: "支持所有模型內容，包含 NSFW、成人創作，完全不受平台政策限制。" },
  { icon: Cpu, title: "RTX 40/50 深度優化", desc: "針對 NVIDIA Ada/Blackwell 架構調校，最大化 VRAM 效率與推理速度。" },
  { icon: Zap, title: "零月租費用", desc: "一次架設，永久使用。無訂閱費、無 API 限制、不依賴任何第三方服務。" },
  { icon: Server, title: "多模型並行", desc: "同時運行圖像生成與 LLM，建立完整本地 AI 工作站環境。" },
  { icon: Check, title: "完整技術支援", desc: "架設後提供完整操作培訓，確保你能獨立維護與升級。" },
];

const hardware = [
  { tier: "入門推薦", gpu: "RTX 4070 / 4070 Ti", vram: "12 GB", perf: "FLUX.1 schnell 快速生成，適合個人創作", price: "約 NT$15,000 起" },
  { tier: "專業首選", gpu: "RTX 4090 / 5090", vram: "24 GB", perf: "全解析度 FLUX + LoRA 訓練並行", price: "約 NT$50,000 起" },
  { tier: "多人工作站", gpu: "雙 A100 / H100", vram: "80 GB × 2", perf: "同時服務多用戶 + 大型模型訓練", price: "報價制" },
];

export default function LocalAIClient() {
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
              本地部署服務
            </motion.p>
            <motion.h1 {...fade(0.12)} className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-black leading-tight mb-6">
              釋放創作本能，
              <br />
              <span style={{ color: "#D4AF37" }}>拒絕規則審核</span>
            </motion.h1>
            <motion.p {...fade(0.22)} className="text-[#555] text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              樞智 AI 提供最完整的本地 SD / FLUX / LLM 環境架設服務。
              數據永不落地，隱私與創意完全由你掌控。支持所有 NSFW 內容生成，隱私永不外洩。
            </motion.p>
            <motion.div {...fade(0.3)} className="flex flex-wrap justify-center gap-4 mb-14">
              <Link href="/contact"
                className="px-8 py-3.5 rounded-full font-bold text-sm text-white transition-all hover:opacity-88"
                style={{ background: "#000" }}>
                預約架設諮詢
              </Link>
              <a href="#platforms"
                className="px-8 py-3.5 rounded-full font-bold text-sm border transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]"
                style={{ borderColor: "#E8E8E8", color: "#333" }}>
                查看支援平台
              </a>
            </motion.div>

            {/* ── Image placeholder ── */}
            <motion.div {...fade(0.38)}>
              <div className="aspect-video rounded-3xl border border-[#E8E8E8] bg-[#F7F7F7] flex flex-col items-center justify-center gap-3 overflow-hidden"
                style={{ background: "linear-gradient(135deg, #F7F7F7 0%, #F0F0F0 100%)" }}>
                <div className="w-12 h-12 rounded-2xl border-2 border-dashed border-[#CCC] flex items-center justify-center">
                  <span className="text-2xl">🖼️</span>
                </div>
                <p className="text-sm text-[#AAA] font-medium">請在此處放入高品質的 AI 生成藝術圖</p>
                <p className="text-xs text-[#CCC]">建議尺寸：1920×1080px，展示 FLUX / SD 生成作品</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="py-20 px-6" style={{ background: "#FBFBFB" }}>
          <div className="max-w-6xl mx-auto">
            <motion.div {...fade(0)} className="text-center mb-12">
              <p className="text-xs tracking-[0.3em] uppercase font-bold mb-3" style={{ color: "#D4AF37" }}>核心優勢</p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-black">完全的自由與掌控</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map(({ icon: Icon, title, desc }, i) => (
                <motion.div key={title} {...fade(i * 0.07)}
                  className="p-6 rounded-2xl bg-white border transition-all hover:shadow-[0_4px_24px_rgba(212,175,55,0.12)] hover:border-[#D4AF37]/30 group"
                  style={{ borderColor: "#E8E8E8" }}>
                  <Icon size={20} className="mb-4 transition-colors group-hover:text-[#D4AF37]" style={{ color: "#D4AF37" }} />
                  <h3 className="text-base font-bold text-black mb-2">{title}</h3>
                  <p className="text-sm text-[#777] leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Platforms ── */}
        <section id="platforms" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fade(0)} className="text-center mb-12">
              <p className="text-xs tracking-[0.3em] uppercase font-bold mb-3" style={{ color: "#D4AF37" }}>支援平台</p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-black">涵蓋所有主流環境</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {platforms.map(({ name, desc }, i) => (
                <motion.div key={name} {...fade(i * 0.06)}
                  className="flex items-start gap-4 p-5 rounded-2xl border bg-white transition-all hover:border-[#D4AF37]/40 hover:shadow-[0_4px_16px_rgba(212,175,55,0.08)]"
                  style={{ borderColor: "#E8E8E8" }}>
                  <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: "#D4AF37" }} />
                  <div>
                    <div className="text-sm font-bold text-black mb-1">{name}</div>
                    <div className="text-xs text-[#888]">{desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Hardware ── */}
        <section className="py-20 px-6" style={{ background: "#FBFBFB" }}>
          <div className="max-w-6xl mx-auto">
            <motion.div {...fade(0)} className="text-center mb-12">
              <p className="text-xs tracking-[0.3em] uppercase font-bold mb-3" style={{ color: "#D4AF37" }}>硬體建議</p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-black">找到你的最佳配置</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-5">
              {hardware.map(({ tier, gpu, vram, perf, price }, i) => (
                <motion.div key={tier} {...fade(i * 0.1)}
                  className="p-7 rounded-2xl bg-white border transition-all hover:shadow-[0_6px_30px_rgba(212,175,55,0.12)] hover:border-[#D4AF37]/40"
                  style={{ borderColor: "#E8E8E8" }}>
                  <p className="text-[10px] text-[#AAA] uppercase tracking-widest mb-3">{tier}</p>
                  <h3 className="text-lg font-black text-black mb-1">{gpu}</h3>
                  <p className="text-sm font-bold mb-3" style={{ color: "#D4AF37" }}>{vram} VRAM</p>
                  <p className="text-sm text-[#777] mb-4 leading-relaxed">{perf}</p>
                  <p className="text-xs text-[#BBB] border-t border-[#F0F0F0] pt-3">{price}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 px-6 text-center">
          <motion.div {...fade(0)} className="max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-black mb-4">立即開始架設</h2>
            <p className="text-[#777] mb-8 leading-relaxed">一條龍服務，從硬體選型到系統上線，確保你能完全獨立維護。</p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-9 py-3.5 rounded-full font-bold text-sm text-white transition-all hover:scale-[1.02]"
              style={{ background: "#000" }}>
              預約免費諮詢 <ArrowRight size={15} />
            </Link>
          </motion.div>
        </section>
      </main>
    </PageWrapper>
  );
}
