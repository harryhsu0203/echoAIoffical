"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function BackgroundCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const blobX1 = useSpring(rawX, { damping: 60, stiffness: 80 });
  const blobY1 = useSpring(rawY, { damping: 60, stiffness: 80 });
  const blobX2 = useSpring(rawX, { damping: 90, stiffness: 50 });
  const blobY2 = useSpring(rawY, { damping: 90, stiffness: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 80;
      const y = (e.clientY / innerHeight - 0.5) * 80;
      rawX.set(x);
      rawY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rawX, rawY]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Noise grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* Blob 1 — Neon Blue */}
      <motion.div
        style={{ x: blobX1, y: blobY1 }}
        className="absolute"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.55, 0.75, 0.55],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, rgba(56,189,248,0.35) 0%, rgba(14,165,233,0.18) 40%, transparent 70%)",
            filter: "blur(60px)",
            transform: "translate(-30%, -40%)",
          }}
        />
      </motion.div>

      {/* Blob 2 — Cold Purple */}
      <motion.div
        style={{ x: blobX2, y: blobY2 }}
        className="absolute right-0 bottom-0"
        animate={{
          scale: [1, 1.08, 1.15, 1],
          opacity: [0.45, 0.65, 0.45],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <div
          className="w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, rgba(139,92,246,0.3) 0%, rgba(99,102,241,0.15) 40%, transparent 70%)",
            filter: "blur(80px)",
            transform: "translate(30%, 40%)",
          }}
        />
      </motion.div>

      {/* Subtle center glow */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ pointerEvents: "none" }}
      >
        <div
          className="w-[800px] h-[400px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(148,163,184,0.4) 0%, transparent 60%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Frosted glass overlay */}
      <div
        className="absolute inset-0 z-20"
        style={{
          backdropFilter: "blur(1px) brightness(0.92)",
          WebkitBackdropFilter: "blur(1px) brightness(0.92)",
          background: "rgba(0,0,0,0.35)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 z-30 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
    </div>
  );
}
