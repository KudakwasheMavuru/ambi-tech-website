import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ScrollScale } from "@/components/ui/scroll-scale";

const PHOTOS = [
  "/gallery/tengapromo/photo-01.jpg",
  "/gallery/tengapromo/photo-03.jpg",
  "/gallery/tengapromo/photo-04.jpg",
  "/gallery/tengapromo/photo-06.jpg",
  "/gallery/tengapromo/photo-07.jpg",
  "/gallery/tengapromo/photo-09.jpg",
];

export function TengamaraGallery() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-ambi">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-teal-mid">
            On the ground
          </span>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            TENGAMARA na TVA, in the community
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5" stagger={0.08}>
          {PHOTOS.map((src) => (
            <RevealItem key={src}>
              <ScrollScale from={0.95}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </ScrollScale>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
