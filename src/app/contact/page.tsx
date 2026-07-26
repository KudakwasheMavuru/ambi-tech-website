import type { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";
import { contactPage, siteMeta } from "@/content/site";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientMesh } from "@/components/ui/gradient-mesh";
import { ContactForm } from "@/components/contact/contact-form";
import { MapPlaceholder } from "@/components/contact/map-placeholder";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: `Contact — ${siteMeta.name}`,
  description: contactPage.body,
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <GradientMesh className="opacity-30" />
      <div className="container-ambi relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-teal-mid">
            {contactPage.eyebrow}
          </span>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance text-ink sm:text-5xl">
            {contactPage.heading}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {contactPage.body}
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">
          <Reveal className="lg:col-span-2" delay={0.05}>
            <div className="flex h-full flex-col gap-6">
              <GlassCard hover={false} className="flex flex-col gap-5">
                <ContactDetail
                  icon={MapPin}
                  label="Office"
                  value={contactPage.details.location}
                />
                <ContactDetail
                  icon={Phone}
                  label="Phone"
                  value={contactPage.details.phone}
                  href={`tel:${contactPage.details.phone.replace(/\s+/g, "")}`}
                />
                <ContactDetail
                  icon={Mail}
                  label="General enquiries"
                  value={contactPage.details.generalEmail}
                  href={`mailto:${contactPage.details.generalEmail}`}
                />
                <ContactDetail
                  icon={Mail}
                  label="Patrick Ndahiro, Executive Chairman"
                  value={contactPage.details.contactEmail}
                  href={`mailto:${contactPage.details.contactEmail}`}
                />
              </GlassCard>

              <MapPlaceholder />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.12}>
            <GlassCard hover={false}>
              <ContactForm />
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactDetail({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep">
        <Icon className="size-4.5" aria-hidden="true" />
      </span>
      <span>
        <span className="block text-xs font-medium uppercase tracking-[0.08em] text-teal-mid">
          {label}
        </span>
        <span className="mt-0.5 block text-sm font-medium text-ink">{value}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className="flex items-start gap-3.5 hover:opacity-80">
        {content}
      </a>
    );
  }

  return <div className="flex items-start gap-3.5">{content}</div>;
}
