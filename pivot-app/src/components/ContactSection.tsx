"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Clock } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const, delay },
});

const contacts = [
  { icon: Mail, label: "服務信箱", value: "hello@pivotai.com.tw" },
  { icon: Phone, label: "服務電話", value: "+886 2 2345 6789" },
  { icon: Clock, label: "服務時間", value: "週一至週五 09:30–18:30" },
];

const footerLinks = [
  {
    title: "服務",
    items: ["本地 AI 建置", "AI 伺服器規劃", "SaaS 串接", "全案整合"],
  },
  {
    title: "產品",
    items: [{ label: "EchoChat", href: "https://echochat.com.tw/" }, "AI 知識管理", "自動化工作流"],
  },
  {
    title: "公司",
    items: ["關於我們", "工作機會", "隱私政策", "服務條款"],
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="snap-section relative flex flex-col justify-between bg-black overflow-hidden"
    >
      {/* Ambient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-slate-900/50 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 flex-1 flex flex-col justify-center py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.div {...fadeUp(0)}>
              <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-medium">
                聯絡我們
              </span>
            </motion.div>

            <motion.h2
              {...fadeUp(0.08)}
              className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight"
            >
              開始你的
              <br />
              AI 轉型旅程
            </motion.h2>

            <motion.p
              {...fadeUp(0.14)}
              className="mt-5 text-white/50 text-base max-w-sm"
            >
              告訴我們你的需求，我們將在一個工作天內回覆並安排初步諮詢。
            </motion.p>

            <motion.div {...fadeUp(0.2)} className="mt-8 space-y-4">
              {contacts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 text-sm">
                  <div className="w-9 h-9 rounded-full border border-white/10 bg-white/5 grid place-items-center shrink-0">
                    <Icon size={15} className="text-white/50" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs">{label}</div>
                    <div className="text-white/80">{value}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div {...fadeUp(0.16)}>
            <form
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-white/40 mb-1.5">
                    公司名稱
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/40 mb-1.5">
                    聯絡人
                  </label>
                  <input
                    type="text"
                    placeholder="王大明"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-white/40 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="hello@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-white/40 mb-1.5">
                  服務興趣
                </label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/70 focus:outline-none focus:border-white/30 transition-colors">
                  <option value="" className="bg-black">請選擇...</option>
                  <option value="local" className="bg-black">本地 AI 建置</option>
                  <option value="saas" className="bg-black">SaaS 串接（EchoChat）</option>
                  <option value="integration" className="bg-black">全案整合</option>
                  <option value="other" className="bg-black">其他諮詢</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-white/40 mb-1.5">
                  需求描述
                </label>
                <textarea
                  rows={4}
                  placeholder="請簡單描述您的 AI 需求或目前遇到的挑戰..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all hover:scale-[1.02]"
              >
                送出諮詢
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-10 border-t border-white/8 px-6 py-8"
      >
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-xl bg-white text-black font-black text-xs grid place-items-center">
                PA
              </span>
              <span className="font-bold text-white text-sm">Pivot AI</span>
            </div>
            <p className="text-xs text-white/35 leading-relaxed">
              全方位企業 AI 服務商
              <br />
              本地部署 × SaaS 串接 × 全案整合
            </p>
          </div>

          {footerLinks.map(({ title, items }) => (
            <div key={title}>
              <p className="text-xs font-semibold text-white/50 mb-3 uppercase tracking-widest">
                {title}
              </p>
              <ul className="space-y-2">
                {items.map((item) => {
                  const label = typeof item === "string" ? item : item.label;
                  const href =
                    typeof item === "string" ? "#" : item.href;
                  return (
                    <li key={label}>
                      <a
                        href={href}
                        target={typeof item !== "string" ? "_blank" : undefined}
                        rel={typeof item !== "string" ? "noopener noreferrer" : undefined}
                        className="text-xs text-white/35 hover:text-white/70 transition-colors"
                      >
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/25">
            © 2026 Pivot AI 樞智科技. All rights reserved.
          </p>
          <p className="text-xs text-white/20">Built with Next.js</p>
        </div>
      </motion.footer>
    </section>
  );
}
