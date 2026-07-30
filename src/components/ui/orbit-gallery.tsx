"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

const PHOTOS = [
  "/gallery/tengapromo/photo-02.jpg",
  "/gallery/tengapromo/photo-06.jpg",
  "/gallery/tengapromo/photo-10.jpg",
  "/gallery/tengapromo/photo-14.jpg",
  "/gallery/tengapromo/photo-18.jpg",
  "/gallery/tengapromo/photo-22.jpg",
];

const DURATIONS = [46, 52, 58, 46, 52, 58];

export function OrbitGallery({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div
        className={cn(
          "pointer-events-none absolute inset-0 hidden items-center justify-center sm:flex",
          className
        )}
        aria-hidden="true"
      >
        {PHOTOS.slice(0, 4).map((src, i) => (
          <div
            key={src}
            className="absolute size-12 overflow-hidden rounded-full border-2 border-white/70 shadow-lg"
            style={{
              left: `${25 + i * 18}%`,
              top: i % 2 === 0 ? "12%" : "80%",
            }}
          >
            <Image src={src} alt="" fill sizes="48px" className="object-cover" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn("group pointer-events-none absolute inset-0 flex items-center justify-center", className)}
      aria-hidden="true"
    >
      {PHOTOS.map((src, i) => {
        const angle = (360 / PHOTOS.length) * i;
        return (
          <div
            key={src}
            className="orbit-item pointer-events-auto absolute size-14 rounded-full [--orbit-radius:150px] sm:[--orbit-radius:200px] lg:[--orbit-radius:250px] group-hover:[animation-play-state:paused]"
            style={{
              left: "50%",
              top: "50%",
              marginLeft: "-28px",
              marginTop: "-28px",
              ["--start-angle" as string]: `${angle}deg`,
              animationDuration: `${DURATIONS[i]}s`,
            }}
          >
            <div className="relative size-14 overflow-hidden rounded-full border-2 border-white/80 shadow-[0_10px_24px_-8px_rgba(14,42,48,0.45)] transition-transform duration-300 hover:scale-125 hover:border-aqua">
              <Image src={src} alt="" fill sizes="56px" className="object-cover" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
