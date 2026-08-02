"use client";

import { useRef, useState, type PointerEvent } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { enotiScreens } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { EnotiScreenMock } from "@/components/enoti/screen-mocks";
import { cn } from "@/lib/cn";

export function PhoneShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const unlockTimer = useRef<number | undefined>(undefined);
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [locked, setLocked] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.25"] });
  const indexValue = useTransform(scrollYProgress, [0, 1], [0, enotiScreens.length - 1]);

  useMotionValueEvent(indexValue, "change", (v) => {
    if (locked) return;
    setActive(Math.min(enotiScreens.length - 1, Math.max(0, Math.round(v))));
  });

  const goTo = (i: number) => {
    setActive(i);
    setLocked(true);
    window.clearTimeout(unlockTimer.current);
    unlockTimer.current = window.setTimeout(() => setLocked(false), 2500);
  };

  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const springX = useSpring(rotX, { damping: 20, stiffness: 150 });
  const springY = useSpring(rotY, { damping: 20, stiffness: 150 });

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotY.set(px * 14);
    rotX.set(-py * 14);
  };

  const handlePointerLeave = () => {
    rotX.set(0);
    rotY.set(0);
  };

  return (
    <section className="bg-surface-tint py-20 sm:py-28">
      <div className="container-ambi">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            The eNoti app
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Real screens from the eNoti wallet, live on the App Store and Google Play. Tap the phone to
            move through them.
          </p>
        </Reveal>

        <div ref={ref} className="mt-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div className="order-2 flex flex-col gap-16 lg:order-1 lg:justify-center">
            {enotiScreens.map((screen, i) => (
              <button
                key={screen.kind}
                type="button"
                onClick={() => goTo(i)}
                className={cn(
                  "max-w-md rounded-lg text-left transition-opacity duration-300",
                  reduceMotion || active === i ? "opacity-100" : "opacity-40 hover:opacity-70"
                )}
              >
                <span className="font-display text-xs font-semibold tracking-[0.1em] text-teal-mid">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">{screen.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{screen.body}</p>
              </button>
            ))}
          </div>

          <div className="order-1 flex flex-col items-center gap-5 lg:sticky lg:top-32 lg:order-2 lg:self-start">
            <div style={{ perspective: 900 }}>
              <motion.div
                ref={frameRef}
                onPointerMove={handlePointerMove}
                onPointerLeave={handlePointerLeave}
                onClick={() => goTo((active + 1) % enotiScreens.length)}
                role="button"
                tabIndex={0}
                aria-label="Show next screen"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") goTo((active + 1) % enotiScreens.length);
                }}
                style={{ rotateX: reduceMotion ? 0 : springX, rotateY: reduceMotion ? 0 : springY }}
                className="relative h-[579px] w-[260px] cursor-pointer overflow-hidden rounded-[2.2rem] border-[6px] border-ink bg-ink shadow-[0_30px_60px_-20px_rgba(14,42,48,0.45)] transition-shadow duration-300 hover:shadow-[0_40px_80px_-16px_rgba(14,42,48,0.55)]"
              >
                <div className="absolute inset-x-0 top-0 z-10 flex justify-center pt-1.5">
                  <div className="h-4 w-24 rounded-full bg-ink" />
                </div>
                {reduceMotion ? (
                  <EnotiScreenMock kind={enotiScreens[0].kind} />
                ) : (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, y: 18, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -18, scale: 0.98 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0"
                    >
                      <EnotiScreenMock kind={enotiScreens[active].kind} />
                    </motion.div>
                  </AnimatePresence>
                )}
              </motion.div>
            </div>

            <div className="flex items-center gap-2">
              {enotiScreens.map((screen, i) => (
                <button
                  key={screen.kind}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show screen ${i + 1}`}
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
