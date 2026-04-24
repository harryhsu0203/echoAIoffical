"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/* ─── Fiber line definitions ─────────────────────────── */
const FIBERS = [
  { d: "M-200 300 Q 200 100 600 350 T 1400 200", delay: 0, dur: 14 },
  { d: "M-100 500 Q 300 250 700 480 T 1500 300", delay: 3, dur: 18 },
  { d: "M 0 700 Q 400 450 800 600 T 1600 400", delay: 6, dur: 22 },
  { d: "M 100 200 Q 500 50 900 280 T 1700 150", delay: 1.5, dur: 16 },
  { d: "M-300 800 Q 200 600 700 750 T 1500 550", delay: 8, dur: 20 },
  { d: "M 200 900 Q 600 700 1000 820 T 1800 600", delay: 4, dur: 24 },
];

function FiberLine({
  d,
  delay,
  dur,
}: {
  d: string;
  delay: number;
  dur: number;
}) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke="url(#fiberGrad)"
      strokeWidth="0.8"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{
        pathLength: [0, 1, 0],
        opacity: [0, 0.6, 0],
        translateX: [0, 80, 0],
      }}
      transition={{
        duration: dur,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function TechFlowBackground() {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const bx1 = useSpring(rawX, { damping: 55, stiffness: 65 });
  const by1 = useSpring(rawY, { damping: 55, stiffness: 65 });
  const bx2 = useSpring(rawX, { damping: 80, stiffness: 40 });
  const by2 = useSpring(rawY, { damping: 80, stiffness: 40 });

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      rawX.set((e.clientX / window.innerWidth - 0.5) * 55);
      rawY.set((e.clientY / window.innerHeight - 0.5) * 55);
    };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, [rawX, rawY]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">

      {/* Pure black base */}
      <div className="absolute inset-0 bg-black" />

      {/* Radial depth gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 70% at 50% 30%, rgba(0,30,60,0.85) 0%, transparent 70%)",
        }}
      />

      {/* ── SVG fiber lines ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1400 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="fiberGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D2FF" stopOpacity="0" />
            <stop offset="30%" stopColor="#00D2FF" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#818cf8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="fiberGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0" />
            <stop offset="40%" stopColor="#00D2FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00D2FF" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#glow)">
          {FIBERS.map((f, i) => (
            <FiberLine key={i} {...f} />
          ))}
        </g>

        {/* Extra faint secondary fibers */}
        {FIBERS.map((f, i) => (
          <motion.path
            key={`s${i}`}
            d={f.d.replace(/\d{3,4}/g, (n) => String(parseInt(n) + 60))}
            fill="none"
            stroke="url(#fiberGrad2)"
            strokeWidth="0.4"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 0.7, 0],
              opacity: [0, 0.25, 0],
            }}
            transition={{
              duration: f.dur + 4,
              delay: f.delay + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* ── Glow blob 1: neon blue ── */}
      <motion.div
        style={{ x: bx1, y: by1 }}
        className="absolute -top-40 -left-40 pointer-events-none"
        animate={{ scale: [1, 1.18, 1], opacity: [0.55, 0.8, 0.55] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="w-[560px] h-[560px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,210,255,0.22) 0%, rgba(0,180,230,0.08) 50%, transparent 72%)",
            filter: "blur(55px)",
          }}
        />
      </motion.div>

      {/* ── Glow blob 2: cold purple ── */}
      <motion.div
        style={{ x: bx2, y: by2 }}
        className="absolute -bottom-40 -right-40 pointer-events-none"
        animate={{ scale: [1, 1.1, 1.2, 1], opacity: [0.45, 0.65, 0.45] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      >
        <div
          className="w-[640px] h-[640px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(99,102,241,0.08) 50%, transparent 72%)",
            filter: "blur(75px)",
          }}
        />
      </motion.div>

      {/* ── Glow blob 3: center accent ── */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        animate={{ opacity: [0.08, 0.16, 0.08], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div
          className="w-[900px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(0,210,255,0.12) 0%, transparent 65%)",
            filter: "blur(40px)",
          }}
        />
      </motion.div>

      {/* Fine dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
    </div>
  );
}
