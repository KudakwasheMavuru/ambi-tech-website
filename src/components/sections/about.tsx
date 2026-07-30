import { Wallet, Landmark, ShieldCheck, Layers } from "lucide-react";
import { about } from "@/content/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { NetworkMap } from "@/components/hero/network-map";
import { FloatingIcon } from "@/components/ui/floating-icon";

const solutionIcons = [
  { icon: <Wallet className="size-4.5" aria-hidden="true" />, label: "Fintech & Digital Payments" },
  { icon: <Landmark className="size-4.5" aria-hidden="true" />, label: "GovTech & Revenue Technology" },
  { icon: <ShieldCheck className="size-4.5" aria-hidden="true" />, label: "Cybersecurity" },
  { icon: <Layers className="size-4.5" aria-hidden="true" />, label: "ICT Solutions & Systems Integration" },
];

const iconPositions = [
  "left-[8%] top-[14%]",
  "right-[12%] top-[22%]",
  "left-[16%] bottom-[16%]",
  "right-[8%] bottom-[24%]",
];

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

        <Reveal delay={0.15} className="relative mt-16 sm:mt-20">
          <div className="group relative h-[320px] overflow-hidden rounded-3xl border border-teal-mid/15 bg-surface-tint sm:h-[420px] lg:h-[480px]">
            <div className="absolute inset-4 transition-transform duration-700 ease-out group-hover:scale-[1.04] sm:inset-8">
              <NetworkMap className="h-full w-full" />
            </div>
            {solutionIcons.map((s, i) => (
              <FloatingIcon
                key={s.label}
                icon={s.icon}
                label={s.label}
                className={iconPositions[i]}
                delay={i * 0.6}
                duration={5 + i}
              />
            ))}
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
