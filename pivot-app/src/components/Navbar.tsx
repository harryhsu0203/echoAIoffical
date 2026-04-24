"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Menu, X } from "lucide-react";

const links = [
  { href: "#local", label: "本地生圖部署" },
  { href: "#saas", label: "EchoChat SaaS", external: "https://echochat.com.tw/" },
  { href: "#integration", label: "模型訓練代工" },
  { href: "#local", label: "硬體調優" },
  { href: "#contact", label: "聯絡我們" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
      className={`site-nav transition-all duration-300 ${
        scrolled
          ? "bg-black/85 backdrop-blur-2xl border-b border-white/8"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-[60px]">

        {/* Brand */}
        <a href="#hero" className="flex items-center gap-3 group shrink-0">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs text-black group-hover:scale-105 transition-transform"
            style={{ background: "linear-gradient(135deg, #00D2FF, #818cf8)" }}
          >
            PA
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-bold text-sm tracking-wide">Pivot AI</span>
            <span className="text-[#E1E1E1]/35 text-[10px] font-medium tracking-widest">樞智科技</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) =>
            l.external ? (
              <a
                key={l.label}
                href={l.external}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[13px] text-[#E1E1E1]/55 hover:text-[#00D2FF] transition-colors font-medium"
              >
                {l.label}
                <ExternalLink size={11} />
              </a>
            ) : (
              <a
                key={l.label}
                href={l.href}
                className="text-[13px] text-[#E1E1E1]/55 hover:text-white transition-colors font-medium"
              >
                {l.label}
              </a>
            )
          )}
          <a
            href="#contact"
            className="ml-2 px-5 py-2 rounded-full bg-white text-black text-[13px] font-bold hover:bg-white/90 transition-all"
          >
            立即開始
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white p-1.5 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black/95 border-b border-white/8 overflow-hidden"
          >
            <div className="px-5 py-4 flex flex-col gap-3">
              {links.map((l) =>
                l.external ? (
                  <a
                    key={l.label}
                    href={l.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-2.5 text-sm text-[#E1E1E1]/60 hover:text-[#00D2FF] transition-colors border-b border-white/5"
                  >
                    {l.label}
                    <ExternalLink size={13} />
                  </a>
                ) : (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="py-2.5 text-sm text-[#E1E1E1]/60 hover:text-white transition-colors border-b border-white/5"
                  >
                    {l.label}
                  </a>
                )
              )}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 w-full py-3 rounded-full bg-white text-black text-sm font-bold text-center hover:bg-white/90 transition-all"
              >
                立即開始
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
