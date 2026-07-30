import { finalCta } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/ui/magnetic";
import { ParticleField } from "@/components/ui/particle-field";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-teal-deep py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="animate-drift absolute -top-1/3 left-1/2 size-[44rem] -translate-x-1/2 rounded-full bg-aqua/25 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="animate-drift absolute -bottom-1/3 right-0 size-[30rem] rounded-full bg-teal-mid/30 blur-[120px]"
        style={{ animationDelay: "-10s" }}
      />
      <ParticleField theme="light" density={0.00009} maxParticles={80} lineOpacity={0.14} dotOpacity={0.45} />

      <div className="container-ambi relative text-center">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-balance text-white sm:text-4xl lg:text-5xl">
            {finalCta.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            {finalCta.body}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Magnetic>
              <Button
                href={finalCta.ctaPrimary.href}
                variant="primary"
                className="bg-white text-teal-deep hover:bg-white/90 hover:shadow-[0_14px_28px_-10px_rgba(255,255,255,0.4)]"
              >
                {finalCta.ctaPrimary.label}
              </Button>
            </Magnetic>
            <Button href={finalCta.ctaSecondary.href} variant="ghost-light">
              {finalCta.ctaSecondary.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
