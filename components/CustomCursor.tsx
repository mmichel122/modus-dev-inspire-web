"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

const CURSOR_SIZE = 20;
const CURSOR_SIZE_HOVER = 44;

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const handleMove = useCallback(
    (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    },
    [visible]
  );

  const handleLeave = useCallback(() => setVisible(false), []);

  const handleOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.closest("a") ||
      target.closest("button") ||
      target.closest("[data-cursor-hover]")
    ) {
      setHover(true);
    }
  }, []);

  const handleOut = useCallback(() => setHover(false), []);

  useEffect(() => {
    if (reducedMotion) return;
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: coarse)");
    if (mq.matches) return;

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseleave", handleLeave);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
    };
  }, [reducedMotion, handleMove, handleLeave, handleOver, handleOut]);

  if (reducedMotion || isTouch) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 will-change-transform"
      style={{
        left: pos.x,
        top: pos.y,
      }}
      initial={{ width: CURSOR_SIZE, height: CURSOR_SIZE, opacity: 0 }}
      animate={{
        width: hover ? CURSOR_SIZE_HOVER : CURSOR_SIZE,
        height: hover ? CURSOR_SIZE_HOVER : CURSOR_SIZE,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", damping: 25, stiffness: 400 }}
      aria-hidden
    >
      <div className="h-full w-full rounded-full border-2 border-foreground bg-transparent" />
    </motion.div>
  );
}
