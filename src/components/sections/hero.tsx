import { ShieldCheck, TrendingUp } from "lucide-react";
import { hero } from "@/content/site";
import { Button } from "@/components/ui/button";
import { NetworkMap } from "@/components/hero/network-map";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { ParticleField } from "@/components/ui/particle-field";
import { Magnetic } from "@/components/ui/magnetic";
import { FloatingChip } from "@/components/ui/floating-chip";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(60%_50%_at_15%_10%,#f4f8f9_0%,#ffffff_65%)]"
      />
      <CursorGlow className="absolute inset-0" />
      <ParticleField className="opacity-70" density={0.00011} maxParticles={110} />

      <div className="container-ambi relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <RevealGroup stagger={0.12}>
          <RevealItem>
            <span className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-mid">
              <span className="h-px w-6 bg-teal-mid" aria-hidden="true" />
              Rwanda &middot; Fintech &middot; GovTech &middot; Cybersecurity
            </span>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance text-ink sm:text-5xl lg:text-6xl xl:text-7xl">
              {hero.headline}
            </h1>
          </RevealItem>

          <RevealItem>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              {hero.sub}
            </p>
          </RevealItem>

          <RevealItem>
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row">
              <Magnetic>
                <Button href={hero.ctaPrimary.href} variant="primary">
                  {hero.ctaPrimary.label}
                </Button>
              </Magnetic>
              <Button href={hero.ctaSecondary.href} variant="secondary">
                {hero.ctaSecondary.label}
              </Button>
            </div>
          </RevealItem>
        </RevealGroup>

        <Reveal delay={0.15} className="relative">
          <div className="mx-auto h-[340px] w-full max-w-lg sm:h-[420px] lg:h-[480px] lg:max-w-none">
            <NetworkMap className="h-full w-full" />
          </div>

          <FloatingChip
            icon={<TrendingUp className="size-4.5" aria-hidden="true" />}
            value="640,000+"
            label="VAT registrations driven"
            className="absolute -left-4 top-6 lg:left-0"
            delay={0}
            duration={5.5}
          />
          <FloatingChip
            icon={<ShieldCheck className="size-4.5" aria-hidden="true" />}
            value="Rwanda Revenue Authority"
            label="National-scale partner"
            className="absolute -right-2 bottom-8 lg:right-2"
            delay={1.2}
            duration={6.5}
          />
        </Reveal>
      </div>
    </section>
  );
}
