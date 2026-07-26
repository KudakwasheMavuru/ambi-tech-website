import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

export function GlassCard({
  className,
  hover = true,
  dark = false,
  ...props
}: HTMLAttributes<HTMLDivElement> & { hover?: boolean; dark?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-2xl p-8",
        dark ? "glass-dark" : "glass",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-aqua/60 hover:shadow-[0_16px_40px_-12px_rgba(143,210,215,0.45)]",
        className
      )}
      {...props}
    />
  );
}
