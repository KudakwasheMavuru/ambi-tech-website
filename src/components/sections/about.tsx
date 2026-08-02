"use client";

import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { about } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { GradientMesh } from "@/components/ui/gradient-mesh";
import { AboutVisual, type AboutVisualKind } from "@/components/sections/about-visual";
import { cn } from "@/lib/cn";

const panels: {
  kind: AboutVisualKind;
  label: string;
  body?: string;
}[] = [
  { kind: "vision", label: about.vision.label, body: about.vision.body },
  { kind: "mission", label: about.mission.label, body: about.mission.body },
  { kind: "values", label: "Our Values" },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const unlockTimer = useRef<number | undefined>(undefined);
  const [active, setActive] = useState(0);
  const [locked, setLocked] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.3"] });
  const indexValue = useTransform(scrollYProgress, [0, 1], [0, panels.length - 1]);

  useMotionValueEvent(indexValue, "change", (v) => {
    if (locked) return;
    setActive(Math.min(panels.length - 1, Math.max(0, Math.round(v))));
  });

  const goTo = (i: number) => {
    setActive(i);
    setLocked(true);
    window.clearTimeout(unlockTimer.current);
    unlockTimer.current = window.setTimeout(() => setLocked(false), 2000);
  };

  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <GradientMesh className="opacity-25" />
      <div className="container-ambi relative">
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
            <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">{about.body}</p>
          </Reveal>
        </div>

        <div
          ref={ref}
          className="mt-16 grid grid-cols-1 gap-10 border-t border-teal-mid/15 pt-16 sm:mt-20 sm:pt-20 lg:grid-cols-[minmax(0,1fr)_23rem] lg:gap-16"
        >
          <div className="order-2 flex flex-col gap-20 lg:order-1 lg:justify-center lg:gap-28">
            {panels.map((panel, i) => (
              <button
                key={panel.kind}
                type="button"
                onClick={() => goTo(i)}
                className={cn(
                  "max-w-lg rounded-lg text-left transition-opacity duration-300",
                  active === i ? "opacity-100" : "opacity-40 hover:opacity-70"
                )}
              >
                <span className="font-display text-xs font-semibold tracking-[0.1em] text-teal-mid">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
                  {panel.label}
                </h3>
                {panel.body ? (
                  <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">{panel.body}</p>
                ) : (
                  <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">
                    The principles that guide every partnership, every product, and every line of code.
                  </p>
                )}
              </button>
            ))}
          </div>

          <div className="order-1 flex flex-col items-center gap-5 lg:sticky lg:top-32 lg:order-2 lg:self-start">
            <AboutVisual kind={panels[active].kind} />
            <div className="flex items-center gap-2">
              {panels.map((panel, i) => (
                <button
                  key={panel.kind}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show ${panel.label}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    active === i ? "w-6 bg-teal-deep" : "w-1.5 bg-teal-deep/25 hover:bg-teal-deep/50"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
