import { about } from "@/content/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { NetworkMap } from "@/components/hero/network-map";
import { OrbitGallery } from "@/components/ui/orbit-gallery";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-ambi">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-teal-mid">
              {about.eyebrow}
            </span>
            <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-tight text-balance text-ink sm:text-5xl lg:text-[3.25rem]">
              {about.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7 lg:pt-14">
            <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {about.body}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative mt-16 flex h-[420px] items-center justify-center sm:mt-20 sm:h-[560px] lg:h-[660px]">
          <OrbitGallery />
          <div className="group relative h-[260px] overflow-hidden rounded-3xl bg-surface-tint sm:h-[340px] lg:h-[400px]" style={{ aspectRatio: "1479 / 1726" }}>
            <div className="absolute inset-3 transition-transform duration-700 ease-out group-hover:scale-[1.04] sm:inset-5">
              <NetworkMap className="h-full w-full" />
            </div>
          </div>
        </Reveal>

        <RevealGroup
          className="mt-16 grid grid-cols-1 gap-x-10 gap-y-10 border-t border-teal-mid/15 pt-14 sm:mt-20 sm:grid-cols-2 sm:pt-16"
          stagger={0.1}
        >
          <RevealItem>
            <h3 className="font-display text-xl font-semibold text-ink">{about.vision.label}</h3>
            <p className="mt-3 max-w-sm text-base leading-relaxed text-muted">{about.vision.body}</p>
          </RevealItem>
          <RevealItem>
            <h3 className="font-display text-xl font-semibold text-ink">{about.mission.label}</h3>
            <p className="mt-3 max-w-sm text-base leading-relaxed text-muted">{about.mission.body}</p>
          </RevealItem>
        </RevealGroup>

        <div className="mt-16 border-t border-teal-mid/15 pt-10 sm:mt-20 sm:pt-12">
          <RevealGroup
            className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-2 text-center sm:gap-x-4"
            stagger={0.06}
          >
            {about.values.map((value, i) => (
              <RevealItem key={value} className="flex items-baseline">
                <span className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                  {value}
                </span>
                {i < about.values.length - 1 && (
                  <span className="ml-3 text-aqua sm:ml-4" aria-hidden="true">
                    &middot;
                  </span>
                )}
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
