import type { Metadata } from "next";
import { teamPage, siteMeta } from "@/content/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { TeamCard } from "@/components/team/team-card";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";

export const metadata: Metadata = {
  title: `Team: ${siteMeta.name}`,
  description: teamPage.sub,
};

export default function TeamPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-24">
        <div className="container-ambi">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-teal-mid">
              {teamPage.eyebrow}
            </span>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance text-ink sm:text-5xl">
              {teamPage.heading}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {teamPage.sub}
            </p>
          </Reveal>

          <RevealGroup
            className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.1}
          >
            {teamPage.leadership.map((member) => (
              <RevealItem key={member.role} className="h-full">
                <TeamCard member={member} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="relative bg-surface-tint py-20 sm:py-28">
        <div className="container-ambi">
          <Reveal className="mx-auto max-w-2xl">
            <GlassCard hover={false} className="text-center">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {teamPage.join.heading}
              </h2>
              <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted">
                {teamPage.join.body}
              </p>
              <div className="mt-7 flex justify-center">
                <Button href={teamPage.join.cta.href} variant="primary">
                  {teamPage.join.cta.label}
                </Button>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </>
  );
}
