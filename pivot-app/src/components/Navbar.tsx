"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#local", label: "本地架設" },
  { href: "#saas", label: "SaaS 串接" },
  { href: "#integration", label: "全案整合" },
  { href: "#contact", label: "聯絡我們" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
      className={`site-nav transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-3 group">
          <span className="w-9 h-9 rounded-xl bg-white text-black font-black text-sm grid place-items-center group-hover:scale-105 transition-transform">
            PA
          </span>
          <span className="font-semibold text-white tracking-wide text-sm hidden sm:block">
            Pivot AI <span className="text-white/40 font-normal">樞智科技</span>
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2 text-sm font-semibold rounded-full bg-white text-black hover:bg-white/90 transition-colors"
          >
            立即開始
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span
              className={`h-px bg-white transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`h-px bg-white transition-all ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-px bg-white transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-black/95 border-b border-white/10 px-6 pb-6 pt-2 flex flex-col gap-4"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition-colors py-2 text-sm"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="px-5 py-2.5 text-sm font-semibold rounded-full bg-white text-black hover:bg-white/90 transition-colors text-center"
          >
            立即開始
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
