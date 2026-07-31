"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

const PHOTOS = [
  "/gallery/tengapromo/photo-02.jpg",
  "/gallery/tengapromo/photo-05.jpg",
  "/gallery/tengapromo/photo-08.jpg",
  "/gallery/tengapromo/photo-11.jpg",
  "/gallery/tengapromo/photo-14.jpg",
  "/gallery/tengapromo/photo-17.jpg",
  "/gallery/tengapromo/photo-20.jpg",
  "/gallery/tengapromo/photo-23.jpg",
];

const DURATIONS = [46, 52, 58, 44, 50, 56, 48, 54];

export function OrbitGallery({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
            className="absolute size-12 overflow-hidden rounded-full shadow-lg"
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
        const isActive = activeIndex === i;
        const isHovered = hoveredIndex === i;
        return (
          <div
            key={src}
            className="orbit-item pointer-events-auto absolute size-14 [--orbit-radius:150px] group-hover:[animation-play-state:paused] sm:[--orbit-radius:200px] lg:[--orbit-radius:250px]"
            style={{
              left: "50%",
              top: "50%",
              marginLeft: "-28px",
              marginTop: "-28px",
              ["--start-angle" as string]: `${angle}deg`,
              animationDuration: `${DURATIONS[i]}s`,
              animationPlayState: isActive ? "paused" : undefined,
              zIndex: isActive ? 30 : isHovered ? 20 : 1,
            }}
          >
            <motion.button
              type="button"
              aria-label="Expand photo"
              onPointerEnter={() => setHoveredIndex(i)}
              onPointerLeave={() => setHoveredIndex((v) => (v === i ? null : v))}
              onClick={() => setActiveIndex((v) => (v === i ? null : i))}
              animate={{ scale: isActive ? 2.6 : isHovered ? 1.3 : 1 }}
              transition={{ type: "spring", damping: 16, stiffness: 220 }}
              className={cn(
                "relative size-14 cursor-pointer overflow-hidden rounded-full border-2 shadow-[0_10px_24px_-8px_rgba(14,42,48,0.45)]",
                isActive ? "border-aqua" : "border-white/80"
              )}
            >
              <Image src={src} alt="" fill sizes="56px" className="object-cover" />
            </motion.button>
          </div>
        );
      })}
    </div>
  );
}
