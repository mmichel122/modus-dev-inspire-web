"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function HeroParallaxBg() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        aria-hidden
      >
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-foreground" />
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
      aria-hidden
    >
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-foreground" />
    </motion.div>
  );
}
