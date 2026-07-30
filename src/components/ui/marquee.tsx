"use client";

import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function Marquee({
  children,
  className,
  durationSeconds = 28,
}: {
  children: ReactNode;
  className?: string;
  durationSeconds?: number;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={cn("flex flex-wrap items-center justify-center gap-x-12 gap-y-6", className)}>
        {children}
      </div>
    );
  }

  return (
    <div className={cn("group overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]", className)}>
      <div
        className="flex w-max items-center gap-16 group-hover:[animation-play-state:paused]"
        style={{ animation: `marquee ${durationSeconds}s linear infinite` }}
      >
        <div className="flex items-center gap-16">{children}</div>
        <div className="flex items-center gap-16" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
