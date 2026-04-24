"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay },
});

const values = [
  { title: "隱私第一", desc: "我們相信每個人都有權在不被監控的環境下創作與工作。本地部署是最純粹的隱私保障。" },
  { title: "技術自由", desc: "任何模型、任何內容、任何風格，都應由使用者決定，而非平台政策。" },
  { title: "真實效能", desc: "我們只推薦真正有效的配置，不過度銷售，確保每一分投資都有對應回報。" },
  { title: "長期陪跑", desc: "架設完成不是終點，我們持續提供技術支援，確保系統始終在最佳狀態。" },
];

export default function AboutClient() {
  return (
    <PageWrapper>
      <main className="bg-white text-[#333]">
        <section className="pt-24 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fade(0)}>
              <Link href="/" className="inline-flex items-center gap-2 text-[#999] hover:text-black text-sm mb-8 transition-colors">← 返回首頁</Link>
            </motion.div>
            <motion.p {...fade(0.05)} className="text-xs tracking-[0.3em] uppercase font-bold mb-4" style={{ color: "#D4AF37" }}>關於我們</motion.p>
            <motion.h1 {...fade(0.12)} className="text-4xl sm:text-6xl font-black tracking-tighter text-black mb-6 leading-tight">
              我們相信 AI 的未來
              <br /><span className="text-[#BBBBBB]">屬於你自己</span>
            </motion.h1>
            <motion.p {...fade(0.22)} className="text-[#555] text-lg max-w-2xl leading-relaxed">
              樞智科技 (Pivot AI) 由一群對 AI 自由化充滿熱情的技術人組成。我們目睹了雲端 AI 服務的審查收緊、成本上漲與隱私問題，決心為創作者與企業打造真正屬於自己的 AI 基礎建設。
            </motion.p>
          </div>
        </section>

        <section className="py-20 px-6" style={{ background: "#FBFBFB" }}>
          <div className="max-w-4xl mx-auto">
            <motion.h2 {...fade(0)} className="text-3xl font-black tracking-tighter text-black mb-10 text-center">我們的核心價值</motion.h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {values.map(({ title, desc }, i) => (
                <motion.div key={title} {...fade(i * 0.08)}
                  className="p-6 rounded-2xl border bg-white transition-all hover:shadow-[0_4px_20px_rgba(212,175,55,0.1)] hover:border-[#D4AF37]/30"
                  style={{ borderColor: "#E8E8E8" }}>
                  <div className="w-1 h-8 rounded-full mb-4" style={{ background: "#D4AF37" }} />
                  <h3 className="text-base font-bold text-black mb-2">{title}</h3>
                  <p className="text-sm text-[#777] leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 text-center">
          <motion.div {...fade(0)} className="max-w-xl mx-auto">
            <h2 className="text-3xl font-black tracking-tighter text-black mb-4">一起打造你的私有 AI</h2>
            <p className="text-[#888] mb-8">不論你是個人創作者還是企業決策者，我們都有對應的解決方案。</p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-9 py-3.5 rounded-full font-bold text-sm text-white transition-all hover:scale-[1.02]"
              style={{ background: "#000" }}>
              立即聯絡我們 <ArrowRight size={15} />
            </Link>
          </motion.div>
        </section>
      </main>
    </PageWrapper>
  );
}
