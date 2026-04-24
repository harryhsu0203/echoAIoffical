"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay },
});

const values = [
  { num: "01", title: "隱私第一", desc: "我們相信每個人都有權在不被監控的環境下創作與工作。本地部署是最純粹的隱私保障。" },
  { num: "02", title: "技術自由", desc: "任何模型、任何內容、任何風格，都應由使用者決定，而非平台政策。" },
  { num: "03", title: "真實效能", desc: "我們只推薦真正有效的配置，不過度銷售，確保每一分投資都有對應回報。" },
  { num: "04", title: "長期陪跑", desc: "架設完成不是終點，我們持續提供技術支援，確保系統始終在最佳狀態。" },
];

export default function AboutClient() {
  return (
    <PageWrapper>
      <main style={{ background: "#0a0a0a", color: "#ffffff" }}>
        <section className="pt-32 pb-24 px-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeUp(0)}>
              <Link href="/" className="inline-flex items-center gap-2 text-sm mb-10 transition-colors" style={{ color: "rgba(255,255,255,0.35)" }}>← Back</Link>
            </motion.div>
            <motion.p {...fadeUp(0.05)} className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-6" style={{ color: "rgba(200,214,229,0.5)" }}>About</motion.p>
            <motion.h1 {...fadeUp(0.12)} className="font-black tracking-tighter leading-tight mb-6"
              style={{ fontSize: "clamp(40px, 6vw, 72px)", color: "#ffffff" }}>
              我們相信 AI 的未來
              <br /><span style={{ color: "rgba(255,255,255,0.25)" }}>屬於你自己</span>
            </motion.h1>
            <motion.p {...fadeUp(0.22)} className="max-w-2xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              樞智科技由一群對 AI 自由化充滿熱情的技術人組成。我們目睹了雲端 AI 服務的審查收緊、成本上漲與隱私問題，決心為創作者與企業打造真正屬於自己的 AI 基礎建設。
            </motion.p>
          </div>
        </section>

        <section style={{ background: "#111111", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="max-w-7xl mx-auto px-6 py-20">
            <motion.h2 {...fadeUp(0)} className="font-black tracking-tighter mb-10" style={{ fontSize: "clamp(28px, 3vw, 40px)", color: "#ffffff" }}>核心價值</motion.h2>
            {values.map(({ num, title, desc }, i) => (
              <motion.div key={num} {...fadeUp(i * 0.08)}
                className="flex flex-col sm:flex-row gap-6 py-7 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <span className="text-xs font-mono w-8 shrink-0" style={{ color: "rgba(255,255,255,0.2)" }}>{num}</span>
                <div className="sm:w-48 shrink-0 font-bold text-base" style={{ color: "rgba(255,255,255,0.85)" }}>{title}</div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20 px-6 text-center" style={{ background: "#0a0a0a" }}>
          <motion.div {...fadeUp(0)} className="max-w-lg mx-auto">
            <h2 className="font-black tracking-tighter mb-4" style={{ fontSize: "clamp(28px, 3vw, 40px)", color: "#ffffff" }}>一起打造你的私有 AI</h2>
            <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.4)" }}>不論個人創作者還是企業決策者，我們都有對應的解決方案。</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors">
              立即聯絡我們 <ArrowRight size={15} />
            </Link>
          </motion.div>
        </section>
      </main>
    </PageWrapper>
  );
}
