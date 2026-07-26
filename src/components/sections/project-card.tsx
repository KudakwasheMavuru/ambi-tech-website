"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ReceiptText, Gift, Wallet, Building2, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import type { projects } from "@/content/site";

const projectIcons: Record<string, LucideIcon> = {
  tengamara: ReceiptText,
  tengapromo: Gift,
  enoti: Wallet,
  sora: Building2,
};

type Project = (typeof projects)["items"][number];

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;
  const Icon = projectIcons[project.id] ?? Building2;
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-24, 24]);

  const tintClass =
    project.tint === "teal"
      ? "from-teal-deep to-teal-mid"
      : "from-teal-mid to-aqua";

  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16",
        reversed && "lg:[&>*:first-child]:order-2"
      )}
    >
      <Reveal>
        <div className="glass overflow-hidden rounded-2xl p-2">
          <motion.div
            style={{ y }}
            className={cn(
              "flex aspect-[4/3] items-center justify-center rounded-xl bg-gradient-to-br",
              tintClass
            )}
          >
            <Icon className="size-16 text-white/85" strokeWidth={1.4} aria-hidden="true" />
          </motion.div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        {project.partner && (
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.14em] text-teal-mid">
            Partner: {project.partner}
          </span>
        )}
        <h3 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          {project.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-muted">{project.subtitle}</p>
        <p className="mt-5 text-base leading-relaxed text-muted">{project.body}</p>

        {"tags" in project && project.tags && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-teal-mid/25 bg-surface-tint px-3 py-1 text-xs font-medium text-teal-deep"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-7">
          <Button href={project.cta.href} variant="secondary">
            {project.cta.label}
          </Button>
        </div>
      </Reveal>
    </div>
  );
}
