"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/cn";

const AUTO_ADVANCE_MS = 6500;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduceMotion = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number, dir: number) => {
    setDirection(dir);
    const len = testimonials.items.length;
    setIndex((next + len) % len);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    timerRef.current = setInterval(() => {
      go(index + 1, 1);
    }, AUTO_ADVANCE_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [index, reduceMotion, go]);

  const item = testimonials.items[index];

  return (
    <section className="relative bg-surface-tint py-24 sm:py-32">
      <div className="container-ambi">
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          heading={testimonials.heading}
          align="center"
          className="mx-auto"
        />

        <Reveal className="relative mx-auto mt-14 max-w-2xl" delay={0.1}>
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={index}
                custom={direction}
                initial={reduceMotion ? undefined : { opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                drag={reduceMotion ? false : "x"}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) go(index + 1, 1);
                  else if (info.offset.x > 60) go(index - 1, -1);
                }}
              >
                <GlassCard hover={false} className="cursor-grab text-center active:cursor-grabbing">
                  <Quote className="mx-auto size-8 text-aqua" aria-hidden="true" />
                  <p className="mt-5 text-lg leading-relaxed text-ink sm:text-xl">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-ink">{item.name}</p>
                    <p className="text-sm text-muted">{item.role}</p>
                    {item.isPlaceholder && (
                      <p className="mt-2 text-xs uppercase tracking-[0.1em] text-teal-mid/70">
                        Placeholder quote
                      </p>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => go(index - 1, -1)}
              aria-label="Previous testimonial"
              className="inline-flex size-11 items-center justify-center rounded-full border border-teal-mid/25 text-teal-deep transition-colors hover:bg-teal-deep/5"
            >
              <ChevronLeft className="size-4" aria-hidden="true" />
            </button>

            <div className="flex gap-2">
              {testimonials.items.map((t, i) => (
                <button
                  key={t.name + i}
                  type="button"
                  onClick={() => go(i, i > index ? 1 : -1)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === index}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === index ? "w-6 bg-teal-deep" : "w-2 bg-teal-deep/25"
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(index + 1, 1)}
              aria-label="Next testimonial"
              className="inline-flex size-11 items-center justify-center rounded-full border border-teal-mid/25 text-teal-deep transition-colors hover:bg-teal-deep/5"
            >
              <ChevronRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
