"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, Clock } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay },
});

const inputCls = "w-full px-4 py-3 text-sm bg-transparent border-b outline-none transition-colors focus:border-white/40";
const inputStyle = { borderColor: "rgba(255,255,255,0.1)", color: "#ffffff" };

export default function ContactClient() {
  return (
    <PageWrapper>
      <main style={{ background: "#0a0a0a", color: "#ffffff" }}>
        <section className="pt-32 pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeUp(0)}>
              <Link href="/" className="inline-flex items-center gap-2 text-sm mb-10 transition-colors" style={{ color: "rgba(255,255,255,0.35)" }}>← Back</Link>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-20">
              {/* Left */}
              <div>
                <motion.p {...fadeUp(0.05)} className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-6" style={{ color: "rgba(200,214,229,0.5)" }}>Contact</motion.p>
                <motion.h1 {...fadeUp(0.12)} className="font-black tracking-tighter leading-tight mb-6"
                  style={{ fontSize: "clamp(40px, 5vw, 60px)", color: "#ffffff" }}>
                  開始你的
                  <br /><span style={{ color: "rgba(255,255,255,0.3)" }}>AI 轉型旅程</span>
                </motion.h1>
                <motion.p {...fadeUp(0.2)} className="text-sm leading-relaxed max-w-sm mb-12" style={{ color: "rgba(255,255,255,0.45)" }}>
                  告訴我們你的需求，我們將在一個工作天內回覆並安排 30 分鐘免費諮詢。
                </motion.p>

                <motion.div {...fadeUp(0.28)} className="space-y-6">
                  {[
                    { icon: Mail, label: "Email", value: "hello@pivotai.com.tw" },
                    { icon: Phone, label: "Phone", value: "+886 2 2345 6789" },
                    { icon: Clock, label: "Hours", value: "Mon–Fri  09:30–18:30" },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center gap-4">
                      <div className="w-10 h-10 border flex items-center justify-center shrink-0"
                        style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                        <Icon size={15} style={{ color: "rgba(255,255,255,0.5)" }} />
                      </div>
                      <div>
                        <div className="text-[10px] tracking-[0.15em] uppercase mb-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>{label}</div>
                        <div className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>{value}</div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Form */}
              <motion.div {...fadeUp(0.16)}>
                <p className="text-[11px] tracking-[0.2em] uppercase font-semibold mb-8" style={{ color: "rgba(255,255,255,0.3)" }}>Send Message</p>
                <form className="space-y-0" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-0">
                    {["公司 / 姓名", "聯絡人"].map((label) => (
                      <div key={label}>
                        <label className="block text-[10px] tracking-[0.15em] uppercase mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>{label}</label>
                        <input type="text" className={inputCls} style={inputStyle} />
                        <div className="h-8" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.15em] uppercase mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>Email</label>
                    <input type="email" placeholder="hello@company.com" className={inputCls} style={inputStyle} />
                    <div className="h-8" />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.15em] uppercase mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>感興趣的服務</label>
                    <select className={inputCls} style={{ ...inputStyle, background: "transparent" }}>
                      <option value="" style={{ background: "#0a0a0a" }}>請選擇...</option>
                      {["本地生圖 / LLM 部署", "企業 AI 串接方案", "EchoChat SaaS", "模型訓練代工", "硬體性能調優", "其他諮詢"].map((o) => (
                        <option key={o} value={o} style={{ background: "#0a0a0a" }}>{o}</option>
                      ))}
                    </select>
                    <div className="h-8" />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.15em] uppercase mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>需求描述</label>
                    <textarea rows={4} placeholder="請簡單說明您目前的情況或想解決的問題..." className={`${inputCls} resize-none`} style={{ borderColor: "rgba(255,255,255,0.1)", color: "#ffffff", borderBottom: "1px solid rgba(255,255,255,0.1)" }} />
                    <div className="h-8" />
                  </div>
                  <button type="submit"
                    className="w-full py-4 bg-white text-black text-sm font-semibold tracking-wide hover:bg-white/90 transition-colors">
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
