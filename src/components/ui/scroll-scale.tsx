"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/cn";

/** Scales/fades content in as it crosses the viewport centre, like Groww's review zoom. */
export function ScrollScale({
  children,
  className,
  from = 0.9,
}: {
  children: ReactNode;
  className?: string;
  from?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [from, 1, from]);
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.5, 1, 1, 0.5]);

  if (reduceMotion) {
    return (
      <div ref={ref} className={cn(className)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div ref={ref} className={cn(className)} style={{ scale, opacity }}>
      {children}
    </motion.div>
  );
}
