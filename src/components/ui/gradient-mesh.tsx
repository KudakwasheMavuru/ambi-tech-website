import { cn } from "@/lib/cn";

/** Slow-drifting teal/aqua gradient blobs used behind glass panels. Purely decorative. */
export function GradientMesh({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="animate-drift absolute -top-1/4 left-[8%] size-[36rem] rounded-full bg-aqua/35 blur-[110px]" />
      <div
        className="animate-drift absolute top-1/3 right-[6%] size-[30rem] rounded-full bg-teal-mid/30 blur-[110px]"
        style={{ animationDelay: "-8s" }}
      />
      <div
        className="animate-drift absolute bottom-[-10%] left-1/3 size-[26rem] rounded-full bg-teal-deep/20 blur-[110px]"
        style={{ animationDelay: "-14s" }}
      />
    </div>
  );
}
