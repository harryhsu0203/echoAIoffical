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
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
      className={`site-nav transition-all duration-500 ${
        scrolled
          ? "border-b border-white/8"
          : ""
      }`}
      style={{
        background: scrolled ? "rgba(10,10,10,0.82)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(1.8)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.8)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[64px]">
        <PivotLogo size="md" />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Services dropdown */}
          <div className="relative" onMouseEnter={() => setDropOpen(true)} onMouseLeave={() => setDropOpen(false)}>
            <button className="flex items-center gap-1 text-[13px] text-white/55 hover:text-white transition-colors duration-200 font-medium tracking-wide">
              服務方案
              <ChevronDown size={12} className={`transition-transform duration-200 ${dropOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {dropOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 border border-white/10 p-1.5"
                  style={{ background: "rgba(15,15,15,0.97)", backdropFilter: "blur(20px)" }}
                >
                  {services.map((s) => (
                    <Link key={s.href} href={s.href}
                      className="block px-4 py-3 hover:bg-white/5 transition-colors group">
                      <div className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{s.label}</div>
                      <div className="text-xs text-white/35 mt-0.5">{s.desc}</div>
                    </Link>
                  ))}
                  <div className="my-1 border-t border-white/8" />
                  <a href="https://echochat.com.tw/" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 hover:bg-white/5 transition-colors group">
                    <div>
                      <div className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">EchoChat SaaS</div>
                      <div className="text-xs text-white/35 mt-0.5">企業 AI 對話平台</div>
                    </div>
                    <ExternalLink size={11} className="text-white/25" />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/about" className="text-[13px] text-white/55 hover:text-white transition-colors font-medium tracking-wide">關於我們</Link>
          <Link href="/contact" className="text-[13px] text-white/55 hover:text-white transition-colors font-medium tracking-wide">聯絡我們</Link>

          {/* Ghost border button */}
          <a href="https://echochat.com.tw/" target="_blank" rel="noopener noreferrer"
            className="group flex items-center gap-1.5 px-4 py-1.5 text-[13px] font-medium text-white/70 border border-white/25 hover:bg-white hover:text-black transition-all duration-200">
            EchoChat
            <ExternalLink size={11} />
          </a>

          <Link href="/contact"
            className="group px-5 py-2 text-[13px] font-semibold text-black bg-white hover:bg-white/90 transition-all duration-200 tracking-wide">
            立即開始
          </Link>
        </nav>

        {/* Mobile */}
        <button className="md:hidden text-white/60 hover:text-white p-1.5 transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/8 overflow-hidden"
            style={{ background: "rgba(10,10,10,0.98)" }}
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              <p className="text-[10px] text-white/25 uppercase tracking-[0.2em] mb-2">服務方案</p>
              {services.map((s) => (
                <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)}
                  className="py-3 text-sm text-white/60 hover:text-white border-b border-white/5 transition-colors">
                  {s.label}
                </Link>
              ))}
              <a href="https://echochat.com.tw/" target="_blank" rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between py-3 text-sm text-white/60 hover:text-white border-b border-white/5 transition-colors">
                EchoChat SaaS <ExternalLink size={13} />
              </a>
              <div className="my-2" />
              {[{ href: "/about", label: "關於我們" }, { href: "/contact", label: "聯絡我們" }].map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                  className="py-3 text-sm text-white/60 hover:text-white border-b border-white/5 transition-colors">
                  {l.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setMobileOpen(false)}
                className="mt-4 w-full py-3 bg-white text-black text-sm font-semibold text-center tracking-wide">
                立即開始
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
