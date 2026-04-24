"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Cpu, Zap, Lock, Check, ArrowRight, Server } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay },
});

const platforms = [
  { name: "Automatic1111 (A1111)", desc: "最成熟的 SD WebUI，外掛生態豐富" },
  { name: "ComfyUI", desc: "節點式工作流，專業創作者首選" },
  { name: "Stable Diffusion Forge", desc: "高效優化版，VRAM 使用率更低" },
  { name: "FLUX.1 (dev / schnell)", desc: "最新世代圖像模型，細節逼真" },
  { name: "Ollama / vLLM", desc: "本地 LLM 推理，支援 Llama/Qwen/Mistral" },
  { name: "Open WebUI", desc: "本地 ChatGPT 替代，全功能界面" },
];

const features = [
  { icon: Lock, title: "100% 本地運行", desc: "所有運算在你的機器上完成，雲端看不到任何一張圖或一行提示詞。" },
  { icon: Shield, title: "無審核限制", desc: "支持所有模型內容，包括 NSFW、成人創作、特定風格，完全不受平台政策限制。" },
  { icon: Cpu, title: "RTX 40/50 深度優化", desc: "針對 NVIDIA Ada/Blackwell 架構調校，最大化 VRAM 使用效率與推理速度。" },
  { icon: Zap, title: "零月租費用", desc: "一次架設，永久使用。無訂閱費、無 API 限制、不依賴任何第三方服務。" },
  { icon: Server, title: "多模型並行", desc: "同時運行圖像生成與 LLM，建立完整的本地 AI 工作站環境。" },
  { icon: Check, title: "完整技術支援", desc: "架設完成後提供完整操作培訓，確保你能獨立維護與升級。" },
];

const hardware = [
  { tier: "入門推薦", gpu: "RTX 4070 / 4070 Ti", vram: "12 GB", perf: "FLUX.1 schnell 快速生成", price: "約 NT$15,000 起" },
  { tier: "專業首選", gpu: "RTX 4090 / 5090", vram: "24 GB", perf: "全解析度 FLUX + LoRA 訓練", price: "約 NT$50,000 起" },
  { tier: "多人工作站", gpu: "雙 A100 / H100", vram: "80 GB×2", perf: "同時服務多用戶 + 訓練", price: "報價制" },
];

export default function LocalAIClient() {
  return (
    <PageWrapper>
      <main className="bg-black text-white">
        {/* ── Hero ── */}
        <section className="relative pt-24 pb-20 px-6 overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-30"
              style={{ background: "radial-gradient(ellipse, rgba(0,210,255,0.2) 0%, transparent 65%)", filter: "blur(80px)" }} />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div {...fade(0)}>
              <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors">
                ← 返回首頁
              </Link>
            </motion.div>
            <motion.p {...fade(0.05)} className="text-xs tracking-[0.3em] uppercase text-[#00D2FF]/70 font-medium mb-4">
              本地部署服務
            </motion.p>
            <motion.h1 {...fade(0.12)} className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-tight mb-6">
              釋放創作本能，
              <br />
              <span style={{ background: "linear-gradient(135deg,#00D2FF,#818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                拒絕規則審核
              </span>
            </motion.h1>
            <motion.p {...fade(0.22)} className="text-white/55 text-lg max-w-2xl leading-relaxed mb-10">
              樞智 AI 提供最完整的本地 SD / FLUX / LLM 環境架設服務。
              數據永不落地，隱私與創意完全由你掌控。
              無論你是專業創作者、研究人員或企業用戶，我們都能為你打造最理想的私有 AI 工作站。
            </motion.p>
            <motion.div {...fade(0.3)} className="flex flex-wrap gap-4">
              <Link href="/contact" className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-white/90 transition-all hover:scale-[1.02]">
                預約架設諮詢
              </Link>
              <a href="#platforms" className="px-8 py-3.5 rounded-full border border-white/20 text-white font-bold text-sm hover:border-white/45 hover:bg-white/6 transition-all">
                查看支援平台
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="py-20 px-6 border-t border-white/6">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fade(0)} className="mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-white/35 font-medium mb-3">為何選擇本地部署</p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-white">完全的自由與掌控</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map(({ icon: Icon, title, desc }, i) => (
                <motion.div key={title} {...fade(i * 0.07)}
                  className="p-6 rounded-2xl border border-white/8 bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.05] transition-all group">
                  <Icon size={20} className="text-[#00D2FF] mb-4" />
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#00D2FF] transition-colors">{title}</h3>
                  <p className="text-sm text-white/45 leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Supported Platforms ── */}
        <section id="platforms" className="py-20 px-6 border-t border-white/6">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fade(0)} className="mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-white/35 font-medium mb-3">支援平台</p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-white">涵蓋所有主流環境</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {platforms.map(({ name, desc }, i) => (
                <motion.div key={name} {...fade(i * 0.06)}
                  className="flex items-start gap-4 p-5 rounded-xl border border-white/8 bg-white/[0.02] hover:border-[#00D2FF]/30 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-[#00D2FF] mt-1.5 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-white mb-1">{name}</div>
                    <div className="text-xs text-white/40">{desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Hardware ── */}
        <section className="py-20 px-6 border-t border-white/6">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fade(0)} className="mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-white/35 font-medium mb-3">硬體建議</p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-white">找到你的最佳配置</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-5">
              {hardware.map(({ tier, gpu, vram, perf, price }, i) => (
                <motion.div key={tier} {...fade(i * 0.1)}
                  className="p-6 rounded-2xl border border-white/8 bg-white/[0.025] hover:border-white/20 transition-all">
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-3">{tier}</p>
                  <h3 className="text-lg font-bold text-white mb-1">{gpu}</h3>
                  <p className="text-sm text-[#00D2FF] font-semibold mb-3">{vram} VRAM</p>
                  <p className="text-sm text-white/50 mb-4 leading-relaxed">{perf}</p>
                  <p className="text-xs text-white/30 border-t border-white/6 pt-3">{price}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 px-6 border-t border-white/6 text-center">
          <motion.div {...fade(0)} className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-white mb-4">
              立即開始架設你的私有 AI 工作站
            </h2>
            <p className="text-white/45 mb-8 leading-relaxed">
              我們提供從硬體選型到系統上線的一條龍服務，並確保你能完全獨立維護。
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-9 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-white/90 transition-all hover:scale-[1.02]">
              預約免費諮詢
              <ArrowRight size={15} />
            </Link>
          </motion.div>
        </section>
      </main>
    </PageWrapper>
  );
}
