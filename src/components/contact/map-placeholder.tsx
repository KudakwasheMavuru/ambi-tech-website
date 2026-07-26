import { MapPin, ArrowUpRight } from "lucide-react";

// TODO(client): swap for a real Google Maps embed (iframe with the office's place ID) once the exact address is confirmed.
export function MapPlaceholder() {
  return (
    <a
      href="https://www.google.com/maps/search/?api=1&query=Kigali%2C+Rwanda"
      target="_blank"
      rel="noopener noreferrer"
      className="group/map relative flex aspect-[16/10] w-full items-end overflow-hidden rounded-2xl border border-teal-mid/15"
      style={{
        backgroundImage:
          "radial-gradient(circle at 30% 30%, rgba(143,210,215,0.35), transparent 55%), linear-gradient(160deg, #f4f8f9 0%, #dcebec 100%)",
      }}
    >
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 400 250"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={`h${i}`}
            x1="0"
            y1={i * 22}
            x2="400"
            y2={i * 22}
            stroke="#5e9199"
            strokeWidth="0.5"
          />
        ))}
        {Array.from({ length: 18 }).map((_, i) => (
          <line
            key={`v${i}`}
            x1={i * 24}
            y1="0"
            x2={i * 24}
            y2="250"
            stroke="#5e9199"
            strokeWidth="0.5"
          />
        ))}
      </svg>

      <div className="relative flex w-full items-center justify-between gap-3 bg-gradient-to-t from-white/90 to-white/0 p-5">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-teal-deep">
          <MapPin className="size-4" aria-hidden="true" />
          Kigali, Rwanda
        </span>
        <span className="inline-flex items-center gap-1 text-xs font-medium text-teal-mid transition-transform group-hover/map:translate-x-0.5">
          Open in Maps
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </span>
      </div>
    </a>
  );
}
