"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import PivotLogo from "./PivotLogo";

const services = [
  { href: "/services/local-ai", label: "本地生圖部署", desc: "SD / FLUX / LLM 無審核架設" },
  { href: "/services/enterprise", label: "企業 AI 方案", desc: "私有大腦 · API 串接 · 自動化" },
  { href: "/services/others", label: "硬體調優 & 模型代工", desc: "RTX 50 優化 · LoRA 訓練" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
      className={`site-nav transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-[#E8E8E8] shadow-sm"
          : "bg-white border-b border-[#F0F0F0]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-[64px]">
        <PivotLogo size="md" />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropOpen(true)}
            onMouseLeave={() => setDropOpen(false)}
          >
            <button className="flex items-center gap-1 text-[13px] text-[#555] hover:text-black transition-colors font-medium">
              服務方案
              <ChevronDown size={13} className={`transition-transform ${dropOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {dropOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.16 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-68 rounded-2xl border border-[#E8E8E8] bg-white/98 backdrop-blur-xl p-2 shadow-xl"
                >
                  {services.map((s) => (
                    <Link key={s.href} href={s.href}
                      className="block px-4 py-3 rounded-xl hover:bg-[#FDFBF2] transition-colors group">
                      <div className="text-sm font-semibold text-black group-hover:text-[#D4AF37] transition-colors">{s.label}</div>
                      <div className="text-xs text-[#999] mt-0.5">{s.desc}</div>
                    </Link>
                  ))}
                  <div className="my-1 border-t border-[#F0F0F0]" />
                  <a href="https://echochat.com.tw/" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-[#FDFBF2] transition-colors group">
                    <div>
                      <div className="text-sm font-semibold text-black group-hover:text-[#D4AF37] transition-colors">EchoChat SaaS</div>
                      <div className="text-xs text-[#999] mt-0.5">企業 AI 對話平台</div>
                    </div>
                    <ExternalLink size={12} className="text-[#CCC] group-hover:text-[#D4AF37] transition-colors" />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/about" className="text-[13px] text-[#555] hover:text-black transition-colors font-medium">關於我們</Link>
          <Link href="/contact" className="text-[13px] text-[#555] hover:text-black transition-colors font-medium">聯絡我們</Link>

          <a href="https://echochat.com.tw/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[13px] font-semibold px-4 py-1.5 rounded-full border transition-all"
            style={{ color: "#D4AF37", borderColor: "#D4AF37", background: "#FDFBF2" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#D4AF37"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#FDFBF2"; (e.currentTarget as HTMLElement).style.color = "#D4AF37"; }}
          >
            EchoChat
            <ExternalLink size={11} />
          </a>

          <Link href="/contact"
            className="ml-1 px-5 py-2 rounded-full text-[13px] font-bold text-white transition-all hover:opacity-90"
            style={{ background: "#000" }}>
            立即開始
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden text-black/60 hover:text-black p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden bg-white border-b border-[#E8E8E8] overflow-hidden"
          >
            <div className="px-5 py-5 flex flex-col gap-1">
              <p className="text-[10px] text-[#AAA] uppercase tracking-widest mb-2 px-3">服務方案</p>
              {services.map((s) => (
                <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 rounded-xl text-sm text-[#444] hover:text-black hover:bg-[#FAFAFA] transition-all">
                  {s.label}
                </Link>
              ))}
              <a href="https://echochat.com.tw/" target="_blank" rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between px-3 py-3 rounded-xl text-sm font-semibold transition-all"
                style={{ color: "#D4AF37" }}>
                EchoChat SaaS
                <ExternalLink size={13} />
              </a>
              <div className="my-2 border-t border-[#F0F0F0]" />
              <Link href="/about" onClick={() => setMobileOpen(false)} className="px-3 py-3 rounded-xl text-sm text-[#444] hover:text-black hover:bg-[#FAFAFA] transition-all">關於我們</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="px-3 py-3 rounded-xl text-sm text-[#444] hover:text-black hover:bg-[#FAFAFA] transition-all">聯絡我們</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)}
                className="mt-3 w-full py-3 rounded-full text-sm font-bold text-white text-center transition-all"
                style={{ background: "#000" }}>
                立即開始
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
