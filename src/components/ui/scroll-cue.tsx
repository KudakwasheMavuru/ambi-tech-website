"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ScrollCue() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-0 bottom-7 hidden justify-center sm:flex"
    >
      <motion.div
        className="flex flex-col items-center gap-1.5 text-white/60"
        animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={reduceMotion ? undefined : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="size-4" />
      </motion.div>
    </div>
  );
}
