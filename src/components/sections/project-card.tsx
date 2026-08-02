"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import type { Project } from "@/content/site";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-24, 24]);

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
          <motion.div style={{ y }} className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src={project.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="scale-110 object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  project.tint === "teal"
                    ? "linear-gradient(160deg, rgba(22,98,114,0.55) 0%, rgba(94,145,153,0.2) 100%)"
                    : "linear-gradient(160deg, rgba(94,145,153,0.5) 0%, rgba(143,210,215,0.2) 100%)",
              }}
            />
            <span
              className="absolute left-4 top-4 rounded-full px-3.5 py-1.5 font-display text-xs font-bold uppercase tracking-[0.08em] text-white shadow-[0_8px_20px_-6px_rgba(14,42,48,0.5)]"
              style={{
                background:
                  project.tint === "teal"
                    ? "linear-gradient(135deg, #166272 0%, #5e9199 100%)"
                    : "linear-gradient(135deg, #5e9199 0%, #8fd2d7 100%)",
              }}
            >
              {project.name}
            </span>
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
        <p className="mt-5 text-base leading-relaxed text-muted">{project.intro}</p>

        {project.tags && (
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
          <Button href={`/projects/${project.id}`} variant="secondary">
            Explore {project.name}
          </Button>
        </div>
      </Reveal>
    </div>
  );
}
