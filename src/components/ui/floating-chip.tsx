"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function FloatingChip({
  icon,
  label,
  value,
  className,
  delay = 0,
  duration = 5,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("hidden sm:block", className)}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 + delay }}
    >
      <motion.div
        className="glass flex items-center gap-3 rounded-2xl px-4 py-3 shadow-[0_16px_40px_-16px_rgba(14,42,48,0.35)]"
        animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
        transition={reduceMotion ? undefined : { duration, repeat: Infinity, ease: "easeInOut", delay }}
      >
        <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep">
          {icon}
        </span>
        <span>
          <span className="block font-display text-sm font-bold text-ink">{value}</span>
          <span className="block text-xs text-muted">{label}</span>
        </span>
      </motion.div>
    </motion.div>
  );
}
