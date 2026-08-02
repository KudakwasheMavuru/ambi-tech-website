import Image from "next/image";
import { partners } from "@/content/site";
import { Marquee } from "@/components/ui/marquee";
import { Reveal } from "@/components/ui/reveal";

export function LogoMarquee() {
  return (
    <section className="border-y border-teal-mid/10 bg-surface-tint py-10 sm:py-12">
      <div className="container-ambi">
        <Reveal>
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.16em] text-teal-mid">
            {partners.eyebrow}
          </p>
          <Marquee>
            {partners.logos.map((logo) => (
              <div
                key={logo.name}
                className="flex h-12 w-28 shrink-0 items-center justify-center px-2 sm:h-14 sm:w-32"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={160}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </Marquee>
        </Reveal>
      </div>
    </section>
  );
}
