import { about } from "@/content/site";
import { GlassCard } from "@/components/ui/glass-card";
import { SkylinePlaceholder } from "@/components/ui/skyline-placeholder";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-ambi">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-teal-mid">
              {about.eyebrow}
            </span>
            <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-4xl">
              {about.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              {about.body}
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="border-l-2 border-aqua pl-4">
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.08em] text-teal-deep">
                  {about.vision.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{about.vision.body}</p>
              </div>
              <div className="border-l-2 border-aqua pl-4">
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.08em] text-teal-deep">
                  {about.mission.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{about.mission.body}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <SkylinePlaceholder className="aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-[0_20px_50px_-20px_rgba(14,42,48,0.35)] lg:aspect-auto lg:h-full" />
          </Reveal>
        </div>

        <RevealGroup
          className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {about.values.map((value) => (
            <RevealItem key={value.name}>
              <GlassCard className="h-full">
                <h3 className="font-display text-lg font-semibold text-ink">{value.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{value.rationale}</p>
              </GlassCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
