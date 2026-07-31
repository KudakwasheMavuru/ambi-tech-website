"use client";

import { useRef, useState, type PointerEvent } from "react";
import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

const LINE_WIDTHS = [92, 70, 84, 60, 76];

export function InteractiveReceipt() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const open = reduceMotion ? true : hovered || clicked;

  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const springX = useSpring(rotX, { damping: 18, stiffness: 140 });
  const springY = useSpring(rotY, { damping: 18, stiffness: 140 });

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotY.set(px * 16);
    rotX.set(-py * 16);
  };

  const handlePointerLeave = () => {
    rotX.set(0);
    rotY.set(0);
    setHovered(false);
  };

  return (
    <div
      className="group relative mx-auto flex w-full max-w-xs flex-col items-center"
      style={{ perspective: 1000 }}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={handlePointerLeave}
    >
      <motion.div
        ref={ref}
        onPointerMove={handlePointerMove}
        onClick={() => setClicked((v) => !v)}
        style={{ rotateX: reduceMotion ? 0 : springX, rotateY: reduceMotion ? 0 : springY }}
        className="relative z-10 aspect-square w-full cursor-pointer select-none"
        animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
        transition={reduceMotion ? undefined : { duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="h-full w-full"
          animate={open ? { rotate: 2, scale: 1.04 } : { rotate: -3, scale: 1 }}
          transition={{ type: "spring", damping: 14, stiffness: 160 }}
        >
          <Image
            src="/images/receipt-curl.png"
            alt="A curled printed receipt"
            fill
            sizes="320px"
            className="object-contain drop-shadow-[0_20px_30px_rgba(14,42,48,0.25)] pointer-events-none"
          />
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="relative -mt-4 w-[58%] origin-top overflow-hidden rounded-b-lg border border-t-0 border-teal-mid/15 bg-white shadow-[0_18px_30px_-16px_rgba(14,42,48,0.35)]"
        initial={false}
        animate={open ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex flex-col gap-1.5 px-3 py-4">
          {LINE_WIDTHS.map((w, i) => (
            <span key={i} className="block h-1 rounded-full bg-teal-deep/10" style={{ width: `${w}%` }} />
          ))}
          <span className="mt-2 block text-center font-display text-[10px] font-semibold uppercase tracking-[0.1em] text-teal-deep">
            Everybody wins
          </span>
        </div>
      </motion.div>

      <p className="mt-5 text-center text-xs text-muted transition-opacity duration-300 sm:mt-3" style={{ opacity: open ? 0 : 1 }}>
        Hover or tap to unfold
      </p>
    </div>
  );
}
