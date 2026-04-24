"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, Clock } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay },
});

const contacts = [
  { icon: Mail, label: "服務信箱", value: "hello@pivotai.com.tw" },
  { icon: Phone, label: "服務電話", value: "+886 2 2345 6789" },
  { icon: Clock, label: "服務時間", value: "週一至週五 09:30–18:30" },
];

export default function ContactClient() {
  return (
    <PageWrapper>
      <main className="bg-black text-white">
        <section className="pt-24 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fade(0)}>
              <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors">
                ← 返回首頁
              </Link>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left */}
              <div>
                <motion.p {...fade(0.05)} className="text-xs tracking-[0.3em] uppercase text-white/35 font-medium mb-4">預約諮詢</motion.p>
                <motion.h1 {...fade(0.12)} className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-5">
                  開始你的
                  <br />
                  <span style={{ background: "linear-gradient(135deg,#00D2FF,#818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    AI 轉型旅程
                  </span>
                </motion.h1>
                <motion.p {...fade(0.2)} className="text-white/50 leading-relaxed max-w-sm mb-8">
                  告訴我們你的需求，我們將在一個工作天內回覆並安排 30 分鐘免費諮詢。
                </motion.p>
                <motion.div {...fade(0.28)} className="space-y-4">
                  {contacts.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 grid place-items-center shrink-0">
                        <Icon size={16} className="text-white/45" />
                      </div>
                      <div>
                        <div className="text-xs text-white/35">{label}</div>
                        <div className="text-sm text-white/75">{value}</div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right: Form */}
              <motion.div {...fade(0.18)}
                className="p-8 rounded-2xl border border-white/10 bg-white/[0.025]">
                <h2 className="text-lg font-bold text-white mb-6">填寫諮詢表單</h2>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/40 mb-2">公司 / 姓名</label>
                      <input type="text" placeholder="樞智科技" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 mb-2">聯絡人</label>
                      <input type="text" placeholder="王大明" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 mb-2">Email</label>
                    <input type="email" placeholder="hello@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 mb-2">感興趣的服務</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/60 focus:outline-none focus:border-white/30 transition-colors">
                      <option value="" className="bg-black">請選擇...</option>
                      <option value="local" className="bg-black">本地生圖 / LLM 部署</option>
                      <option value="enterprise" className="bg-black">企業 AI 串接方案</option>
                      <option value="echochat" className="bg-black">EchoChat SaaS</option>
                      <option value="training" className="bg-black">模型訓練代工</option>
                      <option value="hardware" className="bg-black">硬體性能調優</option>
                      <option value="other" className="bg-black">其他諮詢</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 mb-2">需求描述</label>
                    <textarea rows={4} placeholder="請簡單說明您目前的情況或想解決的問題..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors resize-none" />
                  </div>
                  <button type="submit" className="w-full py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-white/90 transition-all hover:scale-[1.01]">
                    送出諮詢
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}
