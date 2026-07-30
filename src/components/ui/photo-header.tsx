import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export function PhotoHeader({
  image,
  eyebrow,
  heading,
  body,
}: {
  image: string;
  eyebrow: string;
  heading: string;
  body?: string;
}) {
  return (
    <div className="relative flex h-[60vh] min-h-[26rem] items-end overflow-hidden pt-32 sm:h-[65vh]">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(14,42,48,0.35) 0%, rgba(14,42,48,0.45) 40%, rgba(14,42,48,0.92) 100%)",
        }}
      />
      <div className="container-ambi relative pb-14 sm:pb-16">
        <Reveal className="max-w-2xl">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-aqua">
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
