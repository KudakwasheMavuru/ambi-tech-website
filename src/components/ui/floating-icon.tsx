"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function FloatingIcon({
  icon,
  label,
  className,
  delay = 0,
  duration = 5,
}: {
  icon: ReactNode;
  label: string;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("absolute", className)}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 + delay }}
    >
      <motion.div
        className="glass group/icon flex size-11 items-center justify-center rounded-full text-teal-deep shadow-[0_12px_28px_-12px_rgba(14,42,48,0.4)] sm:size-12"
        animate={reduceMotion ? undefined : { y: [0, -12, 0], x: [0, 5, 0] }}
        transition={reduceMotion ? undefined : { duration, repeat: Infinity, ease: "easeInOut", delay }}
        title={label}
      >
        {icon}
      </motion.div>
    </motion.div>
  );
}
