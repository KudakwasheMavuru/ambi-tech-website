"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { hero } from "@/content/site";

function arcPath(from: { x: number; y: number }, to: { x: number; y: number }) {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const bow = Math.min(dist * 0.22, 14);
  const nx = -dy / (dist || 1);
  const ny = dx / (dist || 1);
  const cx = mx + nx * bow;
  const cy = my + ny * bow;
  return `M ${from.x} ${from.y} Q ${cx} ${cy} ${to.x} ${to.y}`;
}

export function NetworkMap({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const origin = hero.map.origin;
  const nodes = hero.map.nodes;

  return (
    <div className={className} aria-hidden="true">
      <div className="relative h-full w-full">
        <Image
          src="/art/africa-map.png"
          alt=""
          fill
          sizes="(min-width: 1024px) 45vw, 90vw"
          className="object-contain"
          priority
        />

        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          fill="none"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#166272" />
              <stop offset="100%" stopColor="#8fd2d7" />
            </linearGradient>
            <radialGradient id="originGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8fd2d7" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#8fd2d7" stopOpacity="0" />
            </radialGradient>
          </defs>

          {nodes.map((node) => (
            <path
              key={node.id}
              d={arcPath(origin, node)}
              stroke="url(#lineGrad)"
              strokeWidth={node.primary ? 0.35 : 0.2}
              strokeLinecap="round"
              opacity={node.primary ? 0.85 : 0.35}
              vectorEffect="non-scaling-stroke"
              strokeDasharray="1 1.6"
              className={reduceMotion ? undefined : "animate-dash"}
            />
          ))}

          <circle cx={origin.x} cy={origin.y} r={9} fill="url(#originGlow)" />
          {!reduceMotion && (
            <motion.circle
              cx={origin.x}
              cy={origin.y}
              r={1.6}
              fill="none"
              stroke="#166272"
              strokeWidth={0.3}
              vectorEffect="non-scaling-stroke"
              initial={{ opacity: 0.6, scale: 1 }}
              animate={{ opacity: 0, scale: 3 }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
              style={{ transformOrigin: `${origin.x}px ${origin.y}px` }}
            />
          )}
          <circle cx={origin.x} cy={origin.y} r={1.1} fill="#166272" />
          <circle cx={origin.x} cy={origin.y} r={0.4} fill="#8fd2d7" />

          {nodes.map((node, i) => (
            <g key={node.id}>
              {!reduceMotion && (
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r={node.primary ? 1.1 : 0.7}
                  fill="none"
                  stroke={node.primary ? "#166272" : "#5e9199"}
                  strokeWidth={0.22}
                  vectorEffect="non-scaling-stroke"
                  initial={{ opacity: 0.5, scale: 1 }}
                  animate={{ opacity: 0, scale: 2.6 }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 0.3 + i * 0.3,
                  }}
                  style={{ transformOrigin: `${node.x}px ${node.y}px` }}
                />
              )}
              <circle
                cx={node.x}
                cy={node.y}
                r={node.primary ? 0.85 : 0.55}
                fill={node.primary ? "#166272" : "#5e9199"}
              />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
