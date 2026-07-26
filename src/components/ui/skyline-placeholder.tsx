// TODO(client): replace with real Kigali photography once supplied.
export function SkylinePlaceholder({ className }: { className?: string }) {
  const buildings = [
    { x: 0, w: 26, h: 90 },
    { x: 28, w: 18, h: 140 },
    { x: 48, w: 30, h: 110 },
    { x: 80, w: 20, h: 170 },
    { x: 102, w: 24, h: 100 },
    { x: 128, w: 16, h: 130 },
    { x: 146, w: 28, h: 80 },
    { x: 176, w: 20, h: 150 },
    { x: 198, w: 22, h: 95 },
  ];

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        background:
          "linear-gradient(160deg, #166272 0%, #1c7286 45%, #5e9199 100%)",
      }}
    >
      <svg viewBox="0 0 220 180" className="h-full w-full" preserveAspectRatio="xMidYMax slice">
        <defs>
          <linearGradient id="skylineFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8fd2d7" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#8fd2d7" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="220" height="180" fill="url(#skylineFade)" />
        {buildings.map((b, i) => (
          <rect
            key={i}
            x={b.x}
            y={180 - b.h}
            width={b.w}
            height={b.h}
            fill="rgba(255,255,255,0.14)"
          />
        ))}
      </svg>
    </div>
  );
}
