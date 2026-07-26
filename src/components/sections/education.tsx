import { ShoppingBag, ReceiptText, Gift, PartyPopper, ArrowRight } from "lucide-react";
import { education } from "@/content/site";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientMesh } from "@/components/ui/gradient-mesh";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

const flowIcons = [ShoppingBag, ReceiptText, Gift, PartyPopper];

export function Education() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <GradientMesh className="opacity-40" />
      <div className="container-ambi relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-balance text-ink sm:text-4xl">
            {education.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {education.body}
          </p>
        </Reveal>

        <RevealGroup
          className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6"
          stagger={0.1}
        >
          {education.flow.map((step, i) => {
            const Icon = flowIcons[i];
            return (
              <RevealItem key={step} className="relative">
                <GlassCard hover={false} className="flex h-full flex-col items-center gap-3 text-center">
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-semibold text-ink">{step}</p>
                </GlassCard>
                {i < education.flow.length - 1 && (
                  <ArrowRight
                    className="absolute top-1/2 -right-3 hidden size-5 -translate-y-1/2 text-teal-mid/50 sm:-right-5 sm:block"
                    aria-hidden="true"
                  />
                )}
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal className="mt-10 text-center" delay={0.2}>
          <Button href={education.cta.href} variant="secondary">
            {education.cta.label}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
