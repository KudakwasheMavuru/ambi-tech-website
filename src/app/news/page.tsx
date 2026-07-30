import type { Metadata } from "next";
import { Newspaper, ExternalLink, CalendarDays } from "lucide-react";
import { newsPage, siteMeta } from "@/content/site";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollScale } from "@/components/ui/scroll-scale";
import { PhotoHeader } from "@/components/ui/photo-header";

export const metadata: Metadata = {
  title: `News — ${siteMeta.name}`,
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

export default function NewsPage() {
  return (
    <>
      <PhotoHeader
        image="/images/kigali-daylight.jpg"
        eyebrow={newsPage.eyebrow}
        heading={newsPage.heading}
        body={newsPage.sub}
      />
      <section className="relative py-24 sm:py-32">
      <div className="container-ambi">
        <RevealGroup
          className="mt-16 grid grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3"
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
                    <GlassCard className="flex h-full flex-col">
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
                    </GlassCard>
                  </a>
                </ScrollScale>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
      </section>
    </>
  );
}
