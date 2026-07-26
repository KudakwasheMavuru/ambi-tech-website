import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  heading,
  body,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  heading: string;
  body?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em]",
            light ? "text-aqua" : "text-teal-mid"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-4xl",
          light ? "text-white" : "text-ink"
        )}
      >
        {heading}
      </h2>
      {body && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-white/75" : "text-muted"
          )}
        >
          {body}
        </p>
      )}
    </div>
  );
}
