# AMBI Tech — Marketing Website

The public marketing site for AMBI Tech Ltd, built with Next.js (App Router),
TypeScript, Tailwind CSS and Framer Motion.

## Stack

- **Next.js 16** (App Router, static export via SSG)
- **TypeScript**
- **Tailwind CSS v4** (CSS-based theme — colour tokens live in `src/app/globals.css`)
- **Framer Motion** for scroll reveals, the counters, and the testimonial carousel
- **lucide-react** for icons
- **next/font** (Space Grotesk + Inter), **next/image**

## Project structure

```
src/
  app/
    layout.tsx        Root layout: fonts, Nav, Footer
    page.tsx           Homepage — assembles all sections
    contact/page.tsx    /contact
    team/page.tsx        /team
    globals.css         Tailwind import, colour tokens, glass utilities, keyframes
  content/
    site.ts             ALL page copy lives here — edit this file, not the components
  components/
    nav.tsx, footer.tsx
    hero/network-map.tsx     Signature animated network map (pure SVG + Framer Motion)
    sections/*                One component per homepage section
    contact/*, team/*
    ui/*                       Button, GlassCard, SectionHeading, Reveal, AnimatedCounter, etc.
```

### Editing copy

All homepage, contact and team copy is centralised in
[`src/content/site.ts`](src/content/site.ts) as typed exports (`hero`, `about`,
`services`, `projects`, `contactPage`, `teamPage`, …). Update the strings there
— no component files need to change for a copy edit.

### Colour tokens

Defined in `src/app/globals.css` under `@theme inline` and available as Tailwind
utilities (`bg-teal-deep`, `text-aqua`, etc.):

| Token | Hex | Use |
|---|---|---|
| `teal-deep` | `#166272` | Primary buttons, headings accents, footer/dark bg |
| `teal-mid` | `#5e9199` | Secondary text accents, borders |
| `aqua` | `#8fd2d7` | Glows, gradients, large text/accents only (low contrast on white) |
| `surface` | `#ffffff` | Base background |
| `surface-tint` | `#f4f8f9` | Alternating section background |
| `ink` | `#0e2a30` | Body text |
| `muted` | `#5b7076` | Secondary body text |

## Known TODOs before launch

- **Logo**: the real AMBI Tech logo (extracted from the brand brief) is in
  `public/logo/ambitech-logo.jpg`. Swap for a vector/transparent version if the
  client supplies one.
- **Photography**: project imagery, the About section visual, and team photos
  are all tasteful placeholders (gradient panels / icon tiles) with `TODO`
  comments in the source — swap in real photography when available.
- **Team bios**: `src/content/site.ts` → `teamPage.leadership` has placeholder
  names/bios for CTO and CFO, and a bio placeholder for Patrick Ndahiro.
- **Contact form**: `src/components/contact/contact-form.tsx` has a `TODO`
  where the submit handler currently just simulates a delay. Wire it to a real
  endpoint (API route, or a form service).
- **General enquiries email**: `contactPage.details.generalEmail` in
  `site.ts` is a placeholder (`info@ambi-tech.rw`) — confirm the real inbox.
- **Google Maps embed**: `src/components/contact/map-placeholder.tsx` links out
  to a Google Maps search for "Kigali, Rwanda". Replace with a real `<iframe>`
  embed once the exact office address/place ID is confirmed.
- **Favicon**: currently the default Next.js placeholder at
  `src/app/favicon.ico` — replace with the AMBI Tech mark.

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Build

```bash
npm run build
npm run start   # serve the production build locally
```

`npm run build` type-checks, lints via Next's build step, and statically
prerenders every route (confirmed: `/`, `/contact`, `/team` are all `○
(Static)`).

## Deploying to Vercel

The project needs no special configuration — Vercel auto-detects Next.js.

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import the repo in the Vercel dashboard (or run `vercel` from the CLI).
3. No environment variables are required for the current feature set.
4. Once the contact form is wired to a real backend, add any required env vars
   (API keys, form-service tokens) in the Vercel project settings.

## Accessibility & motion

- All animations respect `prefers-reduced-motion` (global CSS override in
  `globals.css`, plus per-component checks via Framer Motion's
  `useReducedMotion`).
- Focus states are visible globally (`:focus-visible` in `globals.css`).
- Icon-only interactive controls have `aria-label`s and meet a 44×44px minimum
  touch target.
- The `#8fd2d7` aqua accent is intentionally never used for small text or body
  copy on light backgrounds (fails contrast) — only for large headings, glows,
  gradients, and text on dark backgrounds.
