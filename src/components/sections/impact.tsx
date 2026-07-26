import { impact } from "@/content/site";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

export function Impact() {
  return (
    <section className="relative bg-surface-tint py-20 sm:py-28">
      <div className="container-ambi">
        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-3" stagger={0.12}>
          {impact.stats.map((stat) => (
            <RevealItem key={stat.label}>
              <GlassCard className="text-center">
                <div className="font-display text-4xl font-semibold tracking-tight text-teal-deep sm:text-5xl">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={"prefix" in stat ? stat.prefix : undefined}
                    suffix={stat.suffix}
                    isDecimal={"isDecimal" in stat ? stat.isDecimal : false}
                  />
                </div>
                <p className="mt-3 text-sm font-medium uppercase tracking-[0.1em] text-muted">
                  {stat.label}
                </p>
              </GlassCard>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-muted">
          {impact.caption}
        </p>
      </div>
    </section>
  );
}
