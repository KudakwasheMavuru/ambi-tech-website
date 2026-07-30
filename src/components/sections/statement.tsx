import { statement } from "@/content/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ScrollScale } from "@/components/ui/scroll-scale";
import { ParticleField } from "@/components/ui/particle-field";

export function Statement() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 sm:py-36">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(55%_60%_at_85%_20%,rgba(143,210,215,0.14)_0%,transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%27120%27 height=%27120%27><filter id=%27n%27><feTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%272%27 stitchTiles=%27stitch%27/></filter><rect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/></svg>')]"
      />
      <ParticleField theme="light" className="opacity-40" density={0.00006} maxParticles={60} />

      <div className="container-ambi relative">
        <Reveal>
          <span className="mb-8 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-aqua">
            {statement.kicker}
          </span>
        </Reveal>

        <ScrollScale from={0.92}>
          <RevealGroup stagger={0.1}>
            <div className="font-display max-w-4xl text-3xl font-semibold leading-[1.18] tracking-tight text-balance text-white sm:text-4xl lg:text-5xl">
              {statement.lines.map((line, i) => (
                <RevealItem key={line} className="block">
                  <span className={i === statement.lines.length - 1 ? "text-aqua" : undefined}>
                    {line}
                  </span>
                </RevealItem>
              ))}
            </div>
          </RevealGroup>
        </ScrollScale>
      </div>
    </section>
  );
}
