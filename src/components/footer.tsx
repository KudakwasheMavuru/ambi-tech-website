import Link from "next/link";
import { MapPin, Phone, Mail, X as XIcon } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/icons";
import { footer } from "@/content/site";
import type { ComponentType, SVGProps } from "react";

const socialIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  LinkedIn: LinkedInIcon,
  X: XIcon,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-teal-deep text-white">
      <div className="container-ambi grid grid-cols-1 gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" className="font-display text-2xl font-semibold tracking-tight">
            AMBI<span className="text-aqua">tech</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            {footer.tagline}
          </p>
          <div className="mt-6 flex gap-3">
            {footer.socials.map((s) => {
              const Icon = socialIcons[s.label] ?? LinkedInIcon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-aqua/60 hover:text-aqua"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        {footer.columns.map((col) => (
          <div key={col.heading}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-aqua/90">
              {col.heading}
            </h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-aqua/90">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-aqua" aria-hidden="true" />
              {footer.contact.location}
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0 text-aqua" aria-hidden="true" />
              <a href={`tel:${footer.contact.phone.replace(/\s+/g, "")}`} className="hover:text-white">
                {footer.contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-aqua" aria-hidden="true" />
              <a href={`mailto:${footer.contact.email}`} className="hover:text-white">
                {footer.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-ambi flex flex-col gap-2 py-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.subsidiaryLine}</p>
          <p>{footer.copyright(year)}</p>
        </div>
      </div>
    </footer>
  );
}
