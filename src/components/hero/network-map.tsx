"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { hero } from "@/content/site";

const VIEW_W = 1000;
const VIEW_H = 520;

// Deterministic seeded PRNG so the dot texture is identical on server and client (no hydration mismatch).
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function toXY(pt: { x: number; y: number }) {
  return { x: (pt.x / 100) * VIEW_W, y: (pt.y / 100) * VIEW_H };
}

function arcPath(from: { x: number; y: number }, to: { x: number; y: number }) {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const bow = Math.min(dist * 0.28, 90);
  const nx = -dy / (dist || 1);
  const ny = dx / (dist || 1);
  const cx = mx + nx * bow;
  const cy = my + ny * bow;
  return `M ${from.x} ${from.y} Q ${cx} ${cy} ${to.x} ${to.y}`;
}

export function NetworkMap({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const origin = toXY(hero.map.origin);
  const nodes = hero.map.nodes.map((n) => ({ ...n, pos: toXY(n) }));

  const dots = useMemo(() => {
    const rand = mulberry32(42);
    return Array.from({ length: 190 }, () => ({
      x: rand() * VIEW_W,
      y: rand() * VIEW_H,
      r: 1 + rand() * 1.4,
      o: 0.12 + rand() * 0.22,
    }));
  }, []);

  return (
    <div className={className} aria-hidden="true">
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="h-full w-full"
        fill="none"
        role="presentation"
      >
        <defs>
          <radialGradient id="mapFade" cx="50%" cy="48%" r="60%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="70%" stopColor="white" stopOpacity="0.7" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="dotMask">
            <rect width={VIEW_W} height={VIEW_H} fill="url(#mapFade)" />
          </mask>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#166272" />
            <stop offset="100%" stopColor="#8fd2d7" />
          </linearGradient>
          <radialGradient id="originGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8fd2d7" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#8fd2d7" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g mask="url(#dotMask)">
          {dots.map((d, i) => (
            <circle key={i} cx={d.x} cy={d.y} r={d.r} fill="#5e9199" opacity={d.o} />
          ))}
        </g>

        {nodes.map((node) => {
          const path = arcPath(origin, node.pos);
          return (
            <g key={node.id}>
              <path
                d={path}
                stroke="url(#lineGrad)"
                strokeWidth={node.primary ? 1.6 : 1}
                strokeLinecap="round"
                opacity={node.primary ? 0.85 : 0.4}
                strokeDasharray="4 7"
                className={reduceMotion ? undefined : "animate-dash"}
              />
            </g>
          );
        })}

        <circle cx={origin.x} cy={origin.y} r={54} fill="url(#originGlow)" />
        {!reduceMotion && (
          <motion.circle
            cx={origin.x}
            cy={origin.y}
            r={9}
            fill="none"
            stroke="#166272"
            strokeWidth={1.5}
            initial={{ opacity: 0.6, scale: 1 }}
            animate={{ opacity: 0, scale: 2.4 }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
            style={{ transformOrigin: `${origin.x}px ${origin.y}px` }}
          />
        )}
        <circle cx={origin.x} cy={origin.y} r={6} fill="#166272" />
        <circle cx={origin.x} cy={origin.y} r={2.2} fill="#8fd2d7" />

        {nodes.map((node, i) => (
          <g key={node.id}>
            {!reduceMotion && (
              <motion.circle
                cx={node.pos.x}
                cy={node.pos.y}
                r={node.primary ? 6 : 4}
                fill="none"
                stroke={node.primary ? "#166272" : "#5e9199"}
                strokeWidth={1.2}
                initial={{ opacity: 0.5, scale: 1 }}
                animate={{ opacity: 0, scale: 2.2 }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.4 + i * 0.4,
                }}
                style={{ transformOrigin: `${node.pos.x}px ${node.pos.y}px` }}
              />
            )}
            <circle
              cx={node.pos.x}
              cy={node.pos.y}
              r={node.primary ? 4.5 : 3}
              fill={node.primary ? "#166272" : "#5e9199"}
            />
          </g>
        ))}

        {/* Origin label */}
        <g transform={`translate(${origin.x}, ${origin.y - 18})`}>
          <text
            textAnchor="middle"
            className="font-display"
            fontSize="13"
            fontWeight={600}
            fill="#0e2a30"
          >
            Kigali
          </text>
        </g>

        {/* Primary destination label */}
        {nodes
          .filter((n) => n.primary)
          .map((n) => (
            <g key={n.id} transform={`translate(${n.pos.x}, ${n.pos.y - 14})`}>
              <text
                textAnchor="middle"
                className="font-display"
                fontSize="12"
                fontWeight={600}
                fill="#166272"
              >
                {n.label}
              </text>
            </g>
          ))}
      </svg>
    </div>
  );
}
