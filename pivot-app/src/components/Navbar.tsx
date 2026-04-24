"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

const services = [
  { href: "/services/local-ai", label: "本地生圖部署", desc: "SD / FLUX / LLM 無審核架設" },
  { href: "/services/enterprise", label: "企業 AI 方案", desc: "私有大腦 · API 串接 · EchoChat" },
];

const navLinks = [
  { href: "/about", label: "關於我們" },
  { href: "/contact", label: "預約諮詢" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
      className={`site-nav transition-all duration-300 ${
        scrolled ? "bg-black/88 backdrop-blur-2xl border-b border-white/8" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-[62px]">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm text-black group-hover:scale-105 transition-transform"
            style={{ background: "linear-gradient(135deg,#00D2FF,#818cf8)" }}
          >
            PA
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-white font-bold tracking-wide text-[15px]">Pivot AI</span>
            <span className="text-white/30 text-[10px] font-medium tracking-widest">樞智科技</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-[13px] text-white/55 hover:text-white transition-colors font-medium">
              服務方案
              <ChevronDown size={13} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 rounded-2xl border border-white/10 bg-black/95 backdrop-blur-2xl p-2 shadow-2xl"
                >
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-3 rounded-xl hover:bg-white/8 transition-colors group"
                    >
                      <div className="text-sm font-semibold text-white group-hover:text-[#00D2FF] transition-colors">
                        {s.label}
                      </div>
                      <div className="text-xs text-white/35 mt-0.5">{s.desc}</div>
                    </Link>
                  ))}
                  <div className="my-1 border-t border-white/6" />
                  <a
                    href="https://echochat.com.tw/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/8 transition-colors group"
                  >
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                        EchoChat SaaS
                      </div>
                      <div className="text-xs text-white/35 mt-0.5">企業 AI 對話平台</div>
                    </div>
                    <ExternalLink size={12} className="text-white/25 group-hover:text-purple-300 transition-colors" />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-[13px] text-white/55 hover:text-white transition-colors font-medium">
              {l.label}
            </Link>
          ))}

          <a
            href="https://echochat.com.tw/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[13px] font-semibold text-purple-300 hover:text-purple-200 transition-colors border border-purple-500/30 px-4 py-1.5 rounded-full hover:border-purple-400/50 hover:bg-purple-950/30"
          >
            EchoChat
            <ExternalLink size={11} />
          </a>

          <Link
            href="/contact"
            className="ml-1 px-5 py-2 rounded-full bg-white text-black text-[13px] font-bold hover:bg-white/88 transition-all"
          >
            立即開始
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white p-2 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
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
            className="md:hidden bg-black/96 border-b border-white/8 overflow-hidden"
          >
            <div className="px-5 py-5 flex flex-col gap-1">
              <p className="text-[10px] text-white/30 uppercase tracking-widest mb-2 px-2">服務方案</p>
              {services.map((s) => (
                <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/8 transition-all">
                  {s.label}
                </Link>
              ))}
              <a href="https://echochat.com.tw/" target="_blank" rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between px-3 py-3 rounded-xl text-sm text-purple-300 hover:bg-white/8 transition-all">
                EchoChat SaaS
                <ExternalLink size={13} />
              </a>
              <div className="my-2 border-t border-white/6" />
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 rounded-xl text-sm text-white/60 hover:text-white hover:bg-white/8 transition-all">
                  {l.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setMobileOpen(false)}
                className="mt-3 w-full py-3 rounded-full bg-white text-black text-sm font-bold text-center hover:bg-white/88 transition-all">
                立即開始
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
