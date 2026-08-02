import type { Metadata } from "next";
import { careersPage, siteMeta } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `Careers: ${siteMeta.name}`,
  description: careersPage.body,
};

export default function CareersPage() {
  return (
    <section className="relative py-36 sm:py-44">
      <div className="container-ambi">
        <Reveal className="mx-auto max-w-xl">
          <GlassCard hover={false} className="text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-teal-mid">
              {careersPage.eyebrow}
            </span>
            <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {careersPage.heading}
            </h1>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted">
              {careersPage.body}
            </p>
            <div className="mt-8 flex justify-center">
              <Button href={careersPage.cta.href} variant="primary">
                {careersPage.cta.label}
              </Button>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
