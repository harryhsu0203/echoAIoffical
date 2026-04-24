"use client";

import { motion } from "framer-motion";
import { Layers, GitMerge, Settings2, BarChart3, BookOpen, GraduationCap } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const, delay },
});

const steps = [
  { n: "01", title: "需求盤點與架構規劃", desc: "梳理業務痛點、資料現況與資安需求，輸出可行架構方案。" },
  { n: "02", title: "PoC 快速驗證", desc: "在 2–4 週內交付原型，以真實業務資料驗證準確度與 ROI。" },
  { n: "03", title: "正式部署與系統整合", desc: "完成硬體建置或雲端配置，串接 ERP / CRM / 現有系統。" },
  { n: "04", title: "持續維運與優化", desc: "模型版本管理、效能監控、回饋循環，保持最佳狀態。" },
];

const solutions = [
  { icon: Layers, title: "企業知識管理", desc: "語意搜尋 + 文件結構化，讓資料成為可用資產。" },
  { icon: GitMerge, title: "工作流程自動化", desc: "AI Agent 串接內部系統，自動化審批、摘要與分類。" },
  { icon: Settings2, title: "模型微調", desc: "SFT / LoRA 技術，訓練貼合企業語境的專屬模型。" },
  { icon: BarChart3, title: "AI 指標儀表板", desc: "視覺化追蹤 AI 使用率、節省工時與成本效益。" },
  { icon: BookOpen, title: "內訓與顧問", desc: "AI 轉型工作坊，協助團隊建立 AI 使用文化。" },
  { icon: GraduationCap, title: "合規與治理", desc: "制訂 AI 使用政策、稽核機制，符合法規與企業標準。" },
];

export default function IntegrationSection() {
  return (
    <section
      id="integration"
      className="snap-section relative flex flex-col justify-center bg-[#080808] overflow-hidden"
    >
      {/* Ambient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-slate-800/30 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 py-20">
        <motion.div {...fadeUp(0)}>
          <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-medium">
            全案整合
          </span>
        </motion.div>

        <motion.h2
          {...fadeUp(0.08)}
          className="mt-4 text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight"
        >
          從諮詢到上線
          <br />
          <span className="text-white/30">一站搞定</span>
        </motion.h2>

        <div className="mt-12 grid lg:grid-cols-2 gap-12">
          {/* Steps */}
          <motion.div {...fadeUp(0.16)}>
            <p className="text-white/50 text-sm font-medium mb-6 uppercase tracking-widest">
              導入流程
            </p>
            <div className="space-y-3">
              {steps.map(({ n, title, desc }, i) => (
                <motion.div
                  key={n}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
                  className="flex gap-4 p-4 rounded-xl border border-white/6 bg-white/[0.025] hover:border-white/15 transition-colors group"
                >
                  <span className="text-xs font-mono text-white/25 pt-0.5 w-7 shrink-0">
                    {n}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-sky-400 transition-colors">
                      {title}
                    </div>
                    <div className="text-sm text-white/40 mt-1 leading-relaxed">{desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions grid */}
          <motion.div {...fadeUp(0.2)}>
            <p className="text-white/50 text-sm font-medium mb-6 uppercase tracking-widest">
              服務項目
            </p>
            <div className="grid grid-cols-2 gap-3">
              {solutions.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.24 + i * 0.06, duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const }}
                  className="p-4 rounded-xl border border-white/6 bg-white/[0.025] hover:border-white/15 hover:bg-white/[0.05] transition-all group"
                >
                  <Icon size={16} className="text-sky-400 mb-2" />
                  <div className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors leading-tight">
                    {title}
                  </div>
                  <div className="text-xs text-white/35 mt-1 leading-relaxed">{desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
