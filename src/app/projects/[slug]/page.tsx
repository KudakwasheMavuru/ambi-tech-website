import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ShoppingBag, ReceiptText, Gift, PartyPopper, ArrowRight } from "lucide-react";
import { projects, siteMeta } from "@/content/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { ScrollScale } from "@/components/ui/scroll-scale";
import { Magnetic } from "@/components/ui/magnetic";
import { ParticleField } from "@/components/ui/particle-field";
import { PhoneShowcase } from "@/components/sections/phone-showcase";
import { TengapromoGallery } from "@/components/sections/tengapromo-gallery";

const flowIcons = [ShoppingBag, ReceiptText, Gift, PartyPopper];

export function generateStaticParams() {
  return projects.items.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.items.find((p) => p.id === slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${siteMeta.name}`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.items.find((p) => p.id === slug);
  if (!project) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(155deg,#0e2a30_0%,#166272_55%,#0a2127_100%)] pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div
          aria-hidden="true"
          className="animate-drift absolute -top-1/4 left-[8%] size-[26rem] rounded-full bg-aqua/20 blur-[110px]"
        />
        <div
          aria-hidden="true"
          className="animate-drift absolute -bottom-1/3 right-[6%] size-[22rem] rounded-full bg-teal-mid/25 blur-[100px]"
          style={{ animationDelay: "-8s" }}
        />
        <ParticleField theme="light" density={0.00007} maxParticles={55} lineOpacity={0.14} dotOpacity={0.4} />

        <div className="container-ambi relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            {project.partner && (
              <span className="glass-dark mb-4 inline-block rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-aqua">
                Partner: {project.partner}
              </span>
            )}
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance text-white sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-3 text-base font-medium text-aqua">{project.subtitle}</p>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              {project.intro}
            </p>

            {project.tags && (
              <ul className="mt-6 flex flex-wrap justify-center gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="glass-dark rounded-full px-3 py-1 text-xs font-medium text-white/90"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        </div>
      </section>

      <div className="container-ambi relative -mt-10 sm:-mt-14">
        <ScrollScale from={0.96}>
          <div
            className="relative aspect-[16/8] w-full overflow-hidden rounded-3xl shadow-[0_30px_70px_-30px_rgba(14,42,48,0.45)] sm:aspect-[16/6.5]"
            style={{
              background:
                project.tint === "teal"
                  ? "linear-gradient(160deg, #166272 0%, #5e9199 100%)"
                  : "linear-gradient(160deg, #5e9199 0%, #8fd2d7 100%)",
            }}
          >
            <Image src={project.image} alt="" fill sizes="100vw" className="object-cover" priority />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, transparent 55%, rgba(10,33,39,0.55) 100%)",
              }}
            />
          </div>
        </ScrollScale>

        {project.stats && (
          <RevealGroup
            className="relative z-10 mt-[-2.5rem] grid grid-cols-1 gap-4 px-4 sm:mt-[-3rem] sm:grid-cols-3 sm:px-8"
            stagger={0.1}
          >
            {project.stats.map((stat) => (
              <RevealItem key={stat.label}>
                <GlassCard className="text-center">
                  <div className="font-display text-4xl font-bold tracking-tight text-teal-deep sm:text-5xl">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      isDecimal={stat.isDecimal}
                    />
                  </div>
                  <p className="mt-3 text-sm font-medium uppercase tracking-[0.1em] text-muted">
                    {stat.label}
                  </p>
                </GlassCard>
              </RevealItem>
            ))}
          </RevealGroup>
        )}
      </div>

      {project.id === "enoti" && <PhoneShowcase />}

      {project.sections?.map((section, i) => (
        <section
          key={section.heading}
          className={i % 2 === 1 ? "bg-surface-tint py-20 sm:py-24" : "py-20 sm:py-24"}
        >
          <div className="container-ambi">
            <Reveal className="mx-auto max-w-2xl">
              <GlassCard hover={false} className="text-center sm:text-left">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-4">
                  {section.body.split("\n\n").map((para, pi) => (
                    <p key={pi} className="text-base leading-relaxed text-muted">
                      {para}
                    </p>
                  ))}
                </div>
              </GlassCard>

              {section.flow && (
                <RevealGroup className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4" stagger={0.1}>
                  {section.flow.map((step, si) => {
                    const Icon = flowIcons[si];
                    return (
                      <RevealItem key={step} className="relative">
                        <GlassCard hover={false} className="flex h-full flex-col items-center gap-3 text-center">
                          <span className="inline-flex size-11 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep">
                            <Icon className="size-5" aria-hidden="true" />
                          </span>
                          <p className="text-sm font-semibold text-ink">{step}</p>
                        </GlassCard>
                        {si < section.flow!.length - 1 && (
                          <ArrowRight
                            className="absolute top-1/2 -right-3 hidden size-5 -translate-y-1/2 text-teal-mid/50 sm:-right-5 sm:block"
                            aria-hidden="true"
                          />
                        )}
                      </RevealItem>
                    );
                  })}
                </RevealGroup>
              )}
            </Reveal>
          </div>
        </section>
      ))}

      {project.id === "tengapromo" && <TengapromoGallery />}

      <section className="py-20 sm:py-24">
        <div className="container-ambi">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(155deg,#0e2a30_0%,#166272_100%)] px-8 py-14 text-center sm:px-16">
              <div
                aria-hidden="true"
                className="animate-drift absolute -top-1/2 left-1/2 size-[30rem] -translate-x-1/2 rounded-full bg-aqua/20 blur-[110px]"
              />
              <div className="relative">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Want to know more?
                </h2>
                <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Magnetic>
                    <Button href="/contact" variant="inverse">
                      Talk to Us
                    </Button>
                  </Magnetic>
                  <Button href="/projects" variant="ghost-light">
                    View all projects
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
