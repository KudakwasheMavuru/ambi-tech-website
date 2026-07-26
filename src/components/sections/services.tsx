import { Wallet, Landmark, ShieldCheck, Layers } from "lucide-react";
import { services } from "@/content/site";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

const icons = [Wallet, Landmark, ShieldCheck, Layers];

export function Services() {
  return (
    <section id="solutions" className="relative bg-surface-tint py-24 sm:py-32">
      <div className="container-ambi">
        <SectionHeading
          eyebrow={services.eyebrow}
          heading={services.heading}
          align="center"
          className="mx-auto"
        />

        <RevealGroup
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.1}
        >
          {services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <RevealItem key={item.number}>
                <GlassCard className="flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xs font-semibold tracking-[0.1em] text-teal-mid">
                      {item.number}
                    </span>
                    <Icon className="size-6 text-teal-deep" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                </GlassCard>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
