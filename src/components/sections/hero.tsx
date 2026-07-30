import Image from "next/image";
import { hero } from "@/content/site";
import { Button } from "@/components/ui/button";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { Magnetic } from "@/components/ui/magnetic";
import { ScrollCue } from "@/components/ui/scroll-cue";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <Image
        src="/images/hero-aerial.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-[#0e2a30]/92 via-[#123a42]/68 to-[#0a2127]/95"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_38%,rgba(143,210,215,0.16)_0%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%27120%27 height=%27120%27><filter id=%27n%27><feTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%272%27 stitchTiles=%27stitch%27/></filter><rect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/></svg>')]"
      />
      <CursorGlow className="absolute inset-0" />

      <div className="container-ambi relative flex flex-col items-center pt-24 pb-16 text-center sm:pt-28">
        <RevealGroup stagger={0.12} className="flex flex-col items-center">
          <RevealItem>
            <h1 className="font-display max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-balance text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              {hero.headline}
            </h1>
          </RevealItem>

          <RevealItem>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              {hero.sub}
            </p>
          </RevealItem>

          <RevealItem>
            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
              <Magnetic>
                <Button href={hero.ctaPrimary.href} variant="primary">
                  {hero.ctaPrimary.label}
                </Button>
              </Magnetic>
              <Button href={hero.ctaSecondary.href} variant="ghost-light">
                {hero.ctaSecondary.label}
              </Button>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>

      <ScrollCue />
    </section>
  );
}
