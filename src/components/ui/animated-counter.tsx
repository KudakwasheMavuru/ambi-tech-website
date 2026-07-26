"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  isDecimal = false,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  isDecimal?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px -60px 0px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  const format = (n: number) =>
    isDecimal ? n.toFixed(1) : Math.round(n).toLocaleString("en-US");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: reduceMotion ? 0 : 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, reduceMotion, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {format(display)}
      {suffix}
    </span>
  );
}
