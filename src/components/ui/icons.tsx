import type { SVGProps } from "react";

// lucide-react no longer ships brand marks — inline the official glyphs instead.
export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export function AppleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.365 1.43c.108 1.07-.318 2.11-1.02 2.87-.712.77-1.85 1.36-2.87 1.28-.13-1.03.36-2.11 1.02-2.83.73-.79 1.98-1.37 2.87-1.32zM20.4 17.24c-.51 1.16-.75 1.68-1.4 2.71-.91 1.44-2.19 3.24-3.78 3.25-1.41.02-1.77-.92-3.69-.91-1.92.01-2.32.93-3.73.91-1.59-.02-2.8-1.63-3.71-3.07-2.54-4.02-2.81-8.73-1.24-11.24 1.11-1.78 2.87-2.82 4.52-2.82 1.68 0 2.74.93 4.13.93 1.35 0 2.17-.93 4.13-.93 1.48 0 3.04.8 4.15 2.19-3.65 2-3.06 7.21.62 8.98z" />
    </svg>
  );
}

export function GooglePlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M3.6 2.3c-.4.2-.6.6-.6 1.1v17.2c0 .5.2.9.6 1.1l9.6-9.7-9.6-9.7z" fill="#00D9FF" />
      <path d="M16.9 9.4l-3.1-1.8-3.3 3.3 3.3 3.3 3.1-1.8c.9-.5.9-1.7 0-2.2z" fill="#FFD500" />
      <path d="M13.8 7.6L4.2 2.1c-.2-.1-.4-.1-.6-.1l9.9 10 .3-.3v-9.9z" fill="#FF3A44" />
      <path d="M4.2 21.9c.2.1.4.1.6-.1l9.6-9.6-.3-.3-9.9 10z" fill="#00D763" />
    </svg>
  );
}
