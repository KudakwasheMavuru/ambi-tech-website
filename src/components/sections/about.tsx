import { about } from "@/content/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

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

        <RevealGroup
          className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-x-10 gap-y-10 border-t border-teal-mid/15 pt-14 text-center sm:mt-20 sm:grid-cols-2 sm:pt-16"
          stagger={0.1}
        >
          <RevealItem className="flex flex-col items-center">
            <h3 className="font-display text-xl font-semibold text-ink">{about.vision.label}</h3>
            <p className="mt-3 max-w-sm text-base leading-relaxed text-muted">{about.vision.body}</p>
          </RevealItem>
          <RevealItem className="flex flex-col items-center">
            <h3 className="font-display text-xl font-semibold text-ink">{about.mission.label}</h3>
            <p className="mt-3 max-w-sm text-base leading-relaxed text-muted">{about.mission.body}</p>
          </RevealItem>
        </RevealGroup>

        <div className="mt-16 border-t border-teal-mid/15 pt-10 sm:mt-20 sm:pt-12">
          <RevealGroup
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:gap-x-5"
            stagger={0.06}
          >
            {about.values.map((value, i) => (
              <RevealItem key={value} className="flex items-center">
                <span className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                  {value}
                </span>
                {i < about.values.length - 1 && (
                  <span
                    className="ml-4 inline-block size-2 rounded-full bg-aqua sm:ml-5 sm:size-2.5"
                    aria-hidden="true"
                  />
                )}
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
