import { Reveal } from "@/components/ui/reveal";
import { ParticleField } from "@/components/ui/particle-field";

export function GradientHeader({
  eyebrow,
  heading,
  body,
}: {
  eyebrow: string;
  heading: string;
  body?: string;
}) {
  return (
    <div className="relative flex min-h-[24rem] items-center overflow-hidden bg-[linear-gradient(155deg,#0e2a30_0%,#166272_55%,#0a2127_100%)] pt-32 pb-16 sm:min-h-[26rem]">
      <div
        aria-hidden="true"
        className="animate-drift absolute -top-1/4 left-[10%] size-[26rem] rounded-full bg-aqua/20 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="animate-drift absolute -bottom-1/3 right-[5%] size-[22rem] rounded-full bg-teal-mid/25 blur-[100px]"
        style={{ animationDelay: "-8s" }}
      />
      <ParticleField theme="light" density={0.00007} maxParticles={55} lineOpacity={0.14} dotOpacity={0.4} />

      <div className="container-ambi relative">
        <Reveal className="max-w-2xl">
          <span className="glass-dark mb-4 inline-block rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-aqua">
            {eyebrow}
          </span>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance text-white sm:text-5xl">
            {heading}
          </h1>
          {body && (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              {body}
            </p>
          )}
        </Reveal>
      </div>
    </div>
  );
}
