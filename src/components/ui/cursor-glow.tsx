"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { cn } from "@/lib/cn";

/** A soft aqua glow that follows the pointer within its container. Desktop, fine-pointer only. */
export function CursorGlow({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { damping: 30, stiffness: 90, mass: 0.6 });
  const springY = useSpring(y, { damping: 30, stiffness: 90, mass: 0.6 });

  useEffect(() => {
    if (reduceMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const el = ref.current;
    if (!el) return;

    const handleMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
    };

    el.addEventListener("pointermove", handleMove);
    return () => el.removeEventListener("pointermove", handleMove);
  }, [reduceMotion, x, y]);

  if (reduceMotion) return null;

  return (
    <div ref={ref} aria-hidden="true" className={cn("pointer-events-none overflow-hidden", className)}>
      <motion.div
        className="absolute size-[36rem] rounded-full opacity-[0.35] blur-[90px]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, #8fd2d7 0%, #5e9199 45%, transparent 75%)",
        }}
      />
    </div>
  );
}
