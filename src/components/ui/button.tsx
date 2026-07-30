import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost-light" | "inverse";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-teal-deep text-white shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset,0_10px_24px_-10px_rgba(22,98,114,0.55)] bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0))] bg-teal-deep hover:bg-[#12525f] hover:shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset,0_14px_28px_-8px_rgba(22,98,114,0.65)]",
  secondary:
    "border border-teal-deep/30 text-teal-deep bg-white/40 hover:bg-teal-deep/5 hover:border-teal-deep/60",
  "ghost-light":
    "border border-white/30 text-white bg-white/5 hover:bg-white/15 hover:border-white/50",
  inverse:
    "bg-white text-teal-deep shadow-[0_10px_24px_-10px_rgba(0,0,0,0.25)] hover:bg-white/90 hover:shadow-[0_14px_28px_-10px_rgba(255,255,255,0.4)]",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  const content = (
    <>
      <span>{children}</span>
      <span className="inline-grid w-0 shrink-0 overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover/btn:w-4 group-hover/btn:opacity-100">
        <ArrowRight className="size-4 -translate-x-1 transition-transform duration-300 ease-out group-hover/btn:translate-x-0" aria-hidden="true" />
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
