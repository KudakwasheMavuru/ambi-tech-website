"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/cn";

const TOTAL_PHOTOS = 24;
const photos = Array.from({ length: TOTAL_PHOTOS }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `/gallery/tengapromo/photo-${n}.jpg`;
});

const rowA = photos.slice(0, 12);
const rowB = photos.slice(12, 24);

function Row({
  images,
  reverse,
  durationSeconds,
  reduceMotion,
}: {
  images: string[];
  reverse?: boolean;
  durationSeconds: number;
  reduceMotion: boolean | null;
}) {
  if (reduceMotion) {
    return (
      <div className="flex flex-wrap justify-center gap-4">
        {images.slice(0, 6).map((src) => (
          <div key={src} className="relative h-40 w-56 shrink-0 overflow-hidden rounded-2xl sm:h-48 sm:w-64">
            <Image src={src} alt="" fill sizes="256px" className="object-cover" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="group overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
      <div
        className={cn(
          "flex w-max items-center gap-4 group-hover:[animation-play-state:paused]",
          reverse ? "[animation-direction:reverse]" : ""
        )}
        style={{ animation: `marquee ${durationSeconds}s linear infinite` }}
      >
        {[images, images].map((set, si) => (
          <div key={si} className="flex items-center gap-4" aria-hidden={si === 1}>
            {set.map((src, i) => (
              <div
                key={`${src}-${si}-${i}`}
                className="relative h-40 w-56 shrink-0 overflow-hidden rounded-2xl transition-transform duration-300 hover:z-10 hover:scale-105 sm:h-48 sm:w-64"
              >
                <Image src={src} alt="" fill sizes="256px" className="object-cover" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function TengapromoGallery() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-surface-tint py-20 sm:py-24">
      <div className="container-ambi">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-teal-mid">
            On the ground
          </span>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            TengaPromo, out in the community
          </h2>
        </Reveal>
      </div>

      <div className="mt-12 flex flex-col gap-4">
        <Row images={rowA} durationSeconds={38} reduceMotion={reduceMotion} />
        <Row images={rowB} reverse durationSeconds={34} reduceMotion={reduceMotion} />
      </div>
    </section>
  );
}
