"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay },
});

const values = [
  { title: "隱私第一", desc: "我們相信每個人都有權利在不被監控的環境下創作與工作。本地部署是最純粹的隱私保障。" },
  { title: "技術自由", desc: "任何模型、任何內容、任何風格，都應該由使用者決定，而非平台政策。" },
  { title: "真實效能", desc: "我們只推薦真正有效的配置，不過度銷售，確保每一分投資都有對應回報。" },
  { title: "長期陪跑", desc: "架設完成不是終點，我們持續提供技術支援，確保系統始終在最佳狀態。" },
];

export default function AboutClient() {
  return (
    <PageWrapper>
      <main className="bg-black text-white">
        <section className="pt-24 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fade(0)}>
              <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors">
                ← 返回首頁
              </Link>
            </motion.div>
            <motion.p {...fade(0.05)} className="text-xs tracking-[0.3em] uppercase text-white/35 font-medium mb-4">關於我們</motion.p>
            <motion.h1 {...fade(0.12)} className="text-4xl sm:text-6xl font-black tracking-tighter text-white mb-6">
              我們相信 AI 的未來
              <br />
              <span className="text-white/40">屬於你自己</span>
            </motion.h1>
            <motion.p {...fade(0.22)} className="text-white/55 text-lg max-w-2xl leading-relaxed">
              樞智科技 (Pivot AI) 由一群對 AI 自由化充滿熱情的技術人組成。
              我們目睹了雲端 AI 服務的審查收緊、成本上漲與隱私問題，
              決心為創作者與企業打造真正屬於自己的 AI 基礎建設。
            </motion.p>
          </div>
        </section>

        <section className="py-20 px-6 border-t border-white/6">
          <div className="max-w-4xl mx-auto">
            <motion.h2 {...fade(0)} className="text-3xl font-black tracking-tighter text-white mb-10">我們的核心價值</motion.h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {values.map(({ title, desc }, i) => (
                <motion.div key={title} {...fade(i * 0.08)}
                  className="p-6 rounded-2xl border border-white/8 bg-white/[0.025]">
                  <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                  <p className="text-sm text-white/45 leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 border-t border-white/6 text-center">
          <motion.div {...fade(0)} className="max-w-xl mx-auto">
            <h2 className="text-3xl font-black tracking-tighter text-white mb-4">一起打造你的私有 AI</h2>
            <p className="text-white/45 mb-8">不論你是個人創作者還是企業決策者，我們都有對應的解決方案。</p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-9 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-white/90 transition-all hover:scale-[1.02]">
              立即聯絡我們
            </Link>
          </motion.div>
        </section>
      </main>
    </PageWrapper>
  );
}
