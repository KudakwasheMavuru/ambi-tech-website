"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Telescope, Target, Sparkles } from "lucide-react";
import { about } from "@/content/site";
import { ParticleField } from "@/components/ui/particle-field";
import { cn } from "@/lib/cn";

const icons = { vision: Telescope, mission: Target, values: Sparkles } as const;

const gradients = {
  vision: "from-teal-deep via-teal-deep to-[#0e4552]",
  mission: "from-[#0e4552] via-teal-mid/70 to-teal-deep",
  values: "from-ink via-[#0e4552] to-teal-deep",
} as const;

export type AboutVisualKind = keyof typeof icons;

export function AboutVisual({ kind }: { kind: AboutVisualKind }) {
  const reduceMotion = useReducedMotion();
  const Icon = icons[kind];

  return (
    <div
      className={cn(
        "relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br shadow-[0_40px_80px_-32px_rgba(14,42,48,0.55)] sm:aspect-square lg:aspect-[4/5]",
        gradients[kind]
      )}
    >
      <ParticleField theme="light" density={0.00012} maxParticles={60} lineOpacity={0.18} dotOpacity={0.5} />

      <AnimatePresence mode="wait">
        {kind === "values" ? (
          <motion.div
            key="values"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative flex h-full w-full flex-wrap items-center justify-center gap-3 p-10"
          >
            {about.values.map((value, i) => (
              <motion.span
                key={value}
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: reduceMotion ? 0 : [0, -8, 0],
                }}
                transition={{
                  opacity: { duration: 0.4, delay: i * 0.06 },
                  scale: { duration: 0.4, delay: i * 0.06 },
                  y: reduceMotion
                    ? undefined
                    : { duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
                }}
                className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm sm:text-base"
              >
                {value}
              </motion.span>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key={kind}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            <motion.span
              aria-hidden="true"
              className="absolute rounded-full border border-white/20"
              style={{ width: 200, height: 200 }}
              animate={reduceMotion ? undefined : { scale: [1, 1.15, 1], opacity: [0.5, 0.15, 0.5] }}
              transition={reduceMotion ? undefined : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              aria-hidden="true"
              className="absolute rounded-full border border-white/15"
              style={{ width: 260, height: 260 }}
              animate={reduceMotion ? undefined : { scale: [1, 1.1, 1], opacity: [0.35, 0.1, 0.35] }}
              transition={
                reduceMotion ? undefined : { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
              }
            />
            <span className="relative flex size-24 items-center justify-center rounded-full bg-white/12 text-white backdrop-blur-sm sm:size-28">
              <Icon className="size-10 sm:size-12" strokeWidth={1.5} />
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
