import { CheckCircle2, Award, Target, ShieldCheck, Globe } from "lucide-react";
import { whyChooseUs } from "@/content/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

const pointIcons = [Award, Target, ShieldCheck, Globe];

export function WhyChooseUs() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-ambi">
        <h2 className="sr-only">{whyChooseUs.heading}</h2>
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl shadow-[0_30px_70px_-30px_rgba(14,42,48,0.25)] lg:grid-cols-2">
          <Reveal className="bg-surface-tint p-10 sm:p-12 lg:p-14">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              {whyChooseUs.proven.heading}
            </h3>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {whyChooseUs.proven.body}
            </p>

            <h4 className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-teal-mid">
              Industries We Serve
            </h4>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {whyChooseUs.proven.industries.map((industry) => (
                <li key={industry} className="flex items-center gap-2.5 text-sm text-ink/85">
                  <CheckCircle2 className="size-4 shrink-0 text-teal-deep" aria-hidden="true" />
                  {industry}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12} className="bg-teal-deep p-10 text-white sm:p-12 lg:p-14">
            <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              {whyChooseUs.why.heading}
            </h3>

            <RevealGroup className="mt-8 flex flex-col gap-7" stagger={0.1}>
              {whyChooseUs.why.points.map((point, i) => {
                const Icon = pointIcons[i];
                return (
                  <RevealItem key={point.title} className="flex gap-4">
                    <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-aqua">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h4 className="font-display text-base font-semibold">{point.title}</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/70">{point.body}</p>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
