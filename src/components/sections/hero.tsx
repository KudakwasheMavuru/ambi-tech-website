import { hero } from "@/content/site";
import { Button } from "@/components/ui/button";
import { NetworkMap } from "@/components/hero/network-map";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { fadeIn } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-8 sm:pt-40 lg:pb-0">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,#f4f8f9_0%,#ffffff_65%)]"
      />

      <div className="container-ambi relative">
        <RevealGroup className="mx-auto max-w-3xl text-center" stagger={0.14}>
          <RevealItem variants={fadeIn}>
            <span className="mb-6 inline-flex items-center rounded-full border border-teal-mid/25 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-teal-deep backdrop-blur">
              {hero.eyebrow}
            </span>
          </RevealItem>

          <RevealItem>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance text-ink sm:text-5xl lg:text-6xl">
              {hero.headline}
            </h1>
          </RevealItem>

          <RevealItem>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {hero.sub}
            </p>
          </RevealItem>

          <RevealItem>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={hero.ctaPrimary.href} variant="primary">
                {hero.ctaPrimary.label}
              </Button>
              <Button href={hero.ctaSecondary.href} variant="secondary">
                {hero.ctaSecondary.label}
              </Button>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>

      <Reveal className="relative mt-8 sm:mt-6" delay={0.25}>
        <div className="mx-auto h-[320px] w-full max-w-6xl sm:h-[400px] lg:h-[460px]">
          <NetworkMap className="h-full w-full" />
        </div>
      </Reveal>
    </section>
  );
}
