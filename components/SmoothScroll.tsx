"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (reducedMotion) return;

    let lenis: import("lenis").default | null = null;

    const init = async () => {
      const Lenis = (await import("lenis")).default;
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function onFrame(time: number) {
        lenis?.raf(time);
        rafRef.current = requestAnimationFrame(onFrame);
      }
      rafRef.current = requestAnimationFrame(onFrame);
    };

    init();
    return () => {
      cancelAnimationFrame(rafRef.current);
      lenis?.destroy();
    };
  }, [reducedMotion]);

  return <>{children}</>;
}
