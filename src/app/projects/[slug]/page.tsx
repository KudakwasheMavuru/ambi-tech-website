import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ShoppingBag, ReceiptText, Gift, PartyPopper, ArrowRight } from "lucide-react";
import { projects, siteMeta } from "@/content/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { PhoneShowcase } from "@/components/sections/phone-showcase";

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
      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44">
        <div className="container-ambi relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            {project.partner && (
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-teal-mid">
                Partner: {project.partner}
              </span>
            )}
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance text-ink sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-3 text-base font-medium text-muted">{project.subtitle}</p>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {project.intro}
            </p>

            {project.tags && (
              <ul className="mt-6 flex flex-wrap justify-center gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-teal-mid/25 bg-surface-tint px-3 py-1 text-xs font-medium text-teal-deep"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        </div>
      </section>

      <Reveal delay={0.1} className="container-ambi">
        <div
          className="relative aspect-[16/7] w-full overflow-hidden rounded-3xl"
          style={{
            background:
              project.tint === "teal"
                ? "linear-gradient(160deg, #166272 0%, #5e9199 100%)"
                : "linear-gradient(160deg, #5e9199 0%, #8fd2d7 100%)",
          }}
        >
          <Image src={project.image} alt="" fill sizes="100vw" className="object-cover opacity-60" />
        </div>
      </Reveal>

      {project.id === "enoti" && <PhoneShowcase />}

      {project.stats && (
        <section className="py-16 sm:py-20">
          <div className="container-ambi">
            <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-3" stagger={0.1}>
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
          </div>
        </section>
      )}

      {project.sections?.map((section, i) => (
        <section key={section.heading} className={i % 2 === 1 ? "bg-surface-tint py-20 sm:py-24" : "py-20 sm:py-24"}>
          <div className="container-ambi">
            <Reveal className="mx-auto max-w-2xl">
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

              {section.flow && (
                <RevealGroup
                  className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
                  stagger={0.1}
                >
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

      <section className="py-20 sm:py-24">
        <div className="container-ambi text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Want to know more?
            </h2>
            <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" variant="primary">
                Talk to Us
              </Button>
              <Button href="/projects" variant="secondary">
                View all projects
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
