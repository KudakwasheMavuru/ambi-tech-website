import type { Metadata } from "next";
import Image from "next/image";
import { Newspaper, ExternalLink, CalendarDays, X as XIcon } from "lucide-react";
import { newsPage, siteMeta } from "@/content/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollScale } from "@/components/ui/scroll-scale";
import { GradientHeader } from "@/components/ui/gradient-header";
import { InstagramIcon } from "@/components/ui/icons";
import type { ComponentType, SVGProps } from "react";

export const metadata: Metadata = {
  title: `News: ${siteMeta.name}`,
  description: newsPage.sub,
};

function formatDate(date: string | null) {
  if (!date) return null;
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

const socialIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  Instagram: InstagramIcon,
  X: XIcon,
};

export default function NewsPage() {
  return (
    <>
      <GradientHeader eyebrow={newsPage.eyebrow} heading={newsPage.heading} body={newsPage.sub} />
      <section className="relative py-24 sm:py-32">
        <div className="container-ambi">
          <RevealGroup
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.08}
          >
            {newsPage.items.map((item) => {
              const date = formatDate(item.date);
              return (
                <RevealItem key={item.href} className="h-full">
                  <ScrollScale from={0.95} className="h-full">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block h-full"
                    >
                      <GlassCard className="flex h-full flex-col overflow-hidden !p-0">
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <Image
                            src={item.image}
                            alt=""
                            fill
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div
                            aria-hidden="true"
                            className="absolute inset-0"
                            style={{
                              background:
                                "linear-gradient(180deg, rgba(22,98,114,0) 55%, rgba(14,42,48,0.55) 100%)",
                            }}
                          />
                        </div>

                        <div className="flex flex-1 flex-col p-6">
                          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.1em] text-teal-mid">
                            <span className="inline-flex items-center gap-1.5">
                              <Newspaper className="size-3.5" aria-hidden="true" />
                              {item.source}
                            </span>
                            {date && (
                              <span className="inline-flex items-center gap-1.5 text-muted">
                                <CalendarDays className="size-3.5" aria-hidden="true" />
                                {date}
                              </span>
                            )}
                          </div>

                          <h2 className="mt-4 font-display text-base font-semibold leading-snug text-ink">
                            {item.title}
                          </h2>
                          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{item.summary}</p>

                          <div className="mt-5 flex items-center justify-between border-t border-teal-mid/15 pt-4">
                            {item.featuredIn ? (
                              <span className="text-xs text-muted">
                                Also featured in{" "}
                                {item.featuredIn.map((f) => f.label).join(", ")}
                              </span>
                            ) : (
                              <span />
                            )}
                            <ExternalLink
                              className="size-4 shrink-0 text-teal-mid transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                      </GlassCard>
                    </a>
                  </ScrollScale>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      <section className="border-t border-teal-mid/15 bg-surface-tint py-16 sm:py-20">
        <div className="container-ambi text-center">
          <Reveal>
            <h2 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              {newsPage.socials.heading}
            </h2>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              {newsPage.socials.links.map((link) => {
                const label = link.label.split(" ")[0];
                const Icon = socialIcons[label] ?? InstagramIcon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-teal-mid/25 bg-white px-4 py-2.5 text-sm font-medium text-teal-deep transition-colors hover:border-teal-deep/50 hover:bg-teal-deep/5"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
