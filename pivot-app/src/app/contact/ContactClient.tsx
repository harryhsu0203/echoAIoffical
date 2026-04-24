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
      <main className="bg-white text-[#333]">
        <section className="pt-24 pb-24 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fade(0)}>
              <Link href="/" className="inline-flex items-center gap-2 text-[#999] hover:text-black text-sm mb-8 transition-colors">← 返回首頁</Link>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left */}
              <div>
                <motion.p {...fade(0.05)} className="text-xs tracking-[0.3em] uppercase font-bold mb-4" style={{ color: "#D4AF37" }}>預約諮詢</motion.p>
                <motion.h1 {...fade(0.12)} className="text-4xl sm:text-5xl font-black tracking-tighter text-black mb-5 leading-tight">
                  開始你的
                  <br /><span style={{ color: "#D4AF37" }}>AI 轉型旅程</span>
                </motion.h1>
                <motion.p {...fade(0.2)} className="text-[#666] leading-relaxed max-w-sm mb-8">
                  告訴我們你的需求，我們將在一個工作天內回覆並安排 30 分鐘免費諮詢。
                </motion.p>
                <motion.div {...fade(0.28)} className="space-y-4">
                  {contacts.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full border flex items-center justify-center shrink-0" style={{ borderColor: "#E8E8E8" }}>
                        <Icon size={16} style={{ color: "#D4AF37" }} />
                      </div>
                      <div>
                        <div className="text-xs text-[#AAA]">{label}</div>
                        <div className="text-sm text-[#333] font-medium">{value}</div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Form */}
              <motion.div {...fade(0.18)}
                className="p-8 rounded-3xl border" style={{ borderColor: "#E8E8E8", background: "#FBFBFB" }}>
                <h2 className="text-lg font-bold text-black mb-6">填寫諮詢表單</h2>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {["公司 / 姓名", "聯絡人"].map((label) => (
                      <div key={label}>
                        <label className="block text-xs text-[#AAA] mb-2">{label}</label>
                        <input type="text" className="w-full bg-white border rounded-xl px-4 py-3 text-sm text-black placeholder-[#CCC] focus:outline-none focus:border-[#D4AF37] transition-colors" style={{ borderColor: "#E8E8E8" }} />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-xs text-[#AAA] mb-2">Email</label>
                    <input type="email" placeholder="hello@company.com" className="w-full bg-white border rounded-xl px-4 py-3 text-sm text-black placeholder-[#CCC] focus:outline-none focus:border-[#D4AF37] transition-colors" style={{ borderColor: "#E8E8E8" }} />
                  </div>
                  <div>
                    <label className="block text-xs text-[#AAA] mb-2">感興趣的服務</label>
                    <select className="w-full bg-white border rounded-xl px-4 py-3 text-sm text-[#555] focus:outline-none focus:border-[#D4AF37] transition-colors" style={{ borderColor: "#E8E8E8" }}>
                      <option value="">請選擇...</option>
                      <option>本地生圖 / LLM 部署</option>
                      <option>企業 AI 串接方案</option>
                      <option>EchoChat SaaS</option>
                      <option>模型訓練代工</option>
                      <option>硬體性能調優</option>
                      <option>其他諮詢</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-[#AAA] mb-2">需求描述</label>
                    <textarea rows={4} placeholder="請簡單說明您目前的情況或想解決的問題..." className="w-full bg-white border rounded-xl px-4 py-3 text-sm text-black placeholder-[#CCC] focus:outline-none focus:border-[#D4AF37] transition-colors resize-none" style={{ borderColor: "#E8E8E8" }} />
                  </div>
                  <button type="submit"
                    className="w-full py-3.5 rounded-full font-bold text-sm text-white transition-all hover:opacity-88"
                    style={{ background: "#000" }}>
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
