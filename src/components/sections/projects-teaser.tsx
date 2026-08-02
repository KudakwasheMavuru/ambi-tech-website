import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ScrollScale } from "@/components/ui/scroll-scale";

export function ProjectsTeaser() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container-ambi">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow={projects.eyebrow} heading={projects.heading} />
          <Button href="/projects" variant="secondary" className="shrink-0">
            View all projects
          </Button>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {projects.items.map((project) => (
            <RevealItem key={project.id} className="h-full">
              <ScrollScale from={0.95} className="h-full">
                <Link
                  href={`/projects/${project.id}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_18px_45px_-24px_rgba(14,42,48,0.3)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(22,98,114,0.05) 0%, rgba(22,98,114,0.5) 100%)",
                      }}
                    />
                    <span
                      className="absolute left-4 top-4 rounded-full px-3 py-1.5 font-display text-xs font-bold uppercase tracking-[0.08em] text-white shadow-[0_8px_20px_-6px_rgba(14,42,48,0.5)] backdrop-blur-sm"
                      style={{
                        background:
                          project.tint === "teal"
                            ? "linear-gradient(135deg, #166272 0%, #5e9199 100%)"
                            : "linear-gradient(135deg, #5e9199 0%, #8fd2d7 100%)",
                      }}
                    >
                      {project.name}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg font-semibold text-ink">{project.name}</h3>
                      <ArrowUpRight
                        className="size-4 shrink-0 text-teal-mid transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mt-1 text-sm font-medium text-teal-mid">{project.subtitle}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
                  </div>
                </Link>
              </ScrollScale>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
