import type { Metadata } from "next";
import Image from "next/image";
import { ShoppingBag, ReceiptText, Gift, PartyPopper, ArrowRight } from "lucide-react";
import { educationPage, siteMeta } from "@/content/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientHeader } from "@/components/ui/gradient-header";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { InteractiveReceipt } from "@/components/ui/interactive-receipt";

const flowIcons = [ShoppingBag, ReceiptText, Gift, PartyPopper];

export const metadata: Metadata = {
  title: `Education & Capacity Building: ${siteMeta.name}`,
  description: educationPage.sub,
};

export default function EducationPage() {
  return (
    <>
      <GradientHeader
        eyebrow={educationPage.eyebrow}
        heading={educationPage.heading}
        body={educationPage.sub}
      />

      <section className="py-20 sm:py-24">
        <div className="container-ambi">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-7">
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-teal-mid">
                The basics
              </span>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {educationPage.vat.heading}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {educationPage.vat.body}
              </p>
            </Reveal>
            <Reveal delay={0.1} className="relative lg:col-span-5">
              <InteractiveReceipt />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface-tint py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-1/2 h-[26rem] w-[18rem] -translate-y-1/2 opacity-[0.14]"
        >
          <Image src="/images/receipt-curl.png" alt="" fill sizes="288px" className="object-contain" />
        </div>
        <div className="container-ambi relative">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              {educationPage.whyReceiptMatters.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {educationPage.whyReceiptMatters.body}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-ambi">
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2" stagger={0.1}>
            <RevealItem>
              <GlassCard className="h-full">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {educationPage.rewards.heading}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{educationPage.rewards.body}</p>
              </GlassCard>
            </RevealItem>
            <RevealItem>
              <GlassCard className="h-full">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {educationPage.tengaPromo.heading}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{educationPage.tengaPromo.body}</p>
              </GlassCard>
            </RevealItem>
          </RevealGroup>

          <RevealGroup className="mt-6 grid grid-cols-3 gap-4 sm:gap-6" stagger={0.08}>
            {["/gallery/tengapromo/photo-04.jpg", "/gallery/tengapromo/photo-12.jpg", "/gallery/tengapromo/photo-18.jpg"].map(
              (src) => (
                <RevealItem key={src}>
                  <div className="relative aspect-square overflow-hidden rounded-2xl">
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 33vw, 33vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </RevealItem>
              )
            )}
          </RevealGroup>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(155deg,#0e2a30_0%,#166272_100%)] py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="animate-drift absolute -top-1/3 left-1/3 size-[28rem] rounded-full bg-aqua/20 blur-[120px]"
        />
        <div className="container-ambi relative">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {educationPage.scale.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              {educationPage.scale.lead}
            </p>
          </Reveal>

          <RevealGroup className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2" stagger={0.1}>
            {educationPage.scale.stats.map((stat) => (
              <RevealItem key={stat.label}>
                <div className="glass-dark rounded-2xl p-8 text-center">
                  <div className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      isDecimal={stat.isDecimal}
                    />
                  </div>
                  <p className="mt-3 text-sm font-medium uppercase tracking-[0.1em] text-white/70">
                    {stat.label}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.15} className="mx-auto mt-8 max-w-2xl text-center">
            <p className="text-base leading-relaxed text-white/80 sm:text-lg">
              {educationPage.scale.body}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-ambi">
          <Reveal className="mx-auto max-w-3xl text-center">
            <RevealGroup className="grid grid-cols-2 gap-4 sm:grid-cols-4" stagger={0.1}>
              {educationPage.flow.map((step, i) => {
                const Icon = flowIcons[i];
                return (
                  <RevealItem key={step} className="relative">
                    <GlassCard hover={false} className="flex h-full flex-col items-center gap-3 text-center">
                      <span className="inline-flex size-11 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <p className="text-sm font-semibold text-ink">{step}</p>
                    </GlassCard>
                    {i < educationPage.flow.length - 1 && (
                      <ArrowRight
                        className="absolute top-1/2 -right-3 hidden size-5 -translate-y-1/2 text-teal-mid/50 sm:-right-5 sm:block"
                        aria-hidden="true"
                      />
                    )}
                  </RevealItem>
                );
              })}
            </RevealGroup>
            <p className="mt-8 text-base leading-relaxed text-muted">{educationPage.flowNote}</p>

            <div className="mt-9 flex justify-center">
              <Magnetic>
                <Button href={educationPage.cta.href} variant="primary">
                  {educationPage.cta.label}
                </Button>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
