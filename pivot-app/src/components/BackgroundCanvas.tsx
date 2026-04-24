"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function BackgroundCanvas() {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const blobX1 = useSpring(rawX, { damping: 60, stiffness: 70 });
  const blobY1 = useSpring(rawY, { damping: 60, stiffness: 70 });
  const blobX2 = useSpring(rawX, { damping: 90, stiffness: 40 });
  const blobY2 = useSpring(rawY, { damping: 90, stiffness: 40 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set((e.clientX / window.innerWidth - 0.5) * 60);
      rawY.set((e.clientY / window.innerHeight - 0.5) * 60);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [rawX, rawY]);

  return (
    /* z-0: stays behind all content */
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Deep radial base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(15,23,60,0.9) 0%, #050507 65%)",
        }}
      />

      {/* Blob 1 — neon blue */}
      <motion.div
        style={{ x: blobX1, y: blobY1 }}
        className="absolute -top-32 -left-32"
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.85, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="w-[520px] h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(56,189,248,0.28) 0%, rgba(14,165,233,0.1) 50%, transparent 72%)",
            filter: "blur(50px)",
          }}
        />
      </motion.div>

      {/* Blob 2 — cold purple */}
      <motion.div
        style={{ x: blobX2, y: blobY2 }}
        className="absolute -bottom-32 -right-32"
        animate={{ scale: [1, 1.1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      >
        <div
          className="w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.25) 0%, rgba(99,102,241,0.1) 50%, transparent 72%)",
            filter: "blur(70px)",
          }}
        />
      </motion.div>

      {/* Subtle dot grid — very low opacity */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
