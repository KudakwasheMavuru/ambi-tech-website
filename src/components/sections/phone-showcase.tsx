"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { enotiScreens } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";

export function PhoneShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.25"] });
  const indexValue = useTransform(scrollYProgress, [0, 1], [0, enotiScreens.length - 1]);

  useMotionValueEvent(indexValue, "change", (v) => {
    setActive(Math.min(enotiScreens.length - 1, Math.max(0, Math.round(v))));
  });

  return (
    <section className="bg-surface-tint py-20 sm:py-28">
      <div className="container-ambi">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            The eNoti app
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Real screens from the eNoti wallet, live on the App Store and Google Play.
          </p>
        </Reveal>

        <div ref={ref} className="mt-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div className="order-2 flex flex-col gap-16 lg:order-1 lg:justify-center">
            {enotiScreens.map((screen, i) => (
              <div
                key={screen.src}
                className={
                  "max-w-md transition-opacity duration-300 " +
                  (reduceMotion || active === i ? "opacity-100" : "opacity-40")
                }
              >
                <span className="font-display text-xs font-semibold tracking-[0.1em] text-teal-mid">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">{screen.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{screen.body}</p>
              </div>
            ))}
          </div>

          <div className="order-1 flex justify-center lg:sticky lg:top-32 lg:order-2 lg:self-start">
            <div className="relative h-[520px] w-[260px] overflow-hidden rounded-[2.2rem] border-[6px] border-ink bg-ink shadow-[0_30px_60px_-20px_rgba(14,42,48,0.45)]">
              <div className="absolute inset-x-0 top-0 z-10 flex justify-center pt-1.5">
                <div className="h-4 w-24 rounded-full bg-ink" />
              </div>
              {reduceMotion ? (
                <Image
                  src={enotiScreens[0].src}
                  alt="eNoti app screen"
                  fill
                  sizes="260px"
                  className="object-cover"
                />
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={enotiScreens[active].src}
                      alt="eNoti app screen"
                      fill
                      sizes="260px"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
