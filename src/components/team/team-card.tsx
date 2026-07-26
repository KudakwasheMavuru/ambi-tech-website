import { Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/icons";
import { GlassCard } from "@/components/ui/glass-card";
import type { teamPage } from "@/content/site";

type Member = (typeof teamPage)["leadership"][number];

function initials(name: string) {
  const clean = name.replace(/[[\]]/g, "");
  return clean
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function TeamCard({ member }: { member: Member }) {
  const isPlaceholder = member.name.startsWith("[");

  return (
    <GlassCard className="flex flex-col items-center text-center">
      <div
        className="flex size-20 items-center justify-center rounded-full font-display text-xl font-semibold text-white"
        style={{
          background: "linear-gradient(160deg, #166272 0%, #5e9199 100%)",
        }}
        aria-hidden="true"
      >
        {isPlaceholder ? "?" : initials(member.name)}
      </div>

      <h3 className="mt-5 font-display text-lg font-semibold text-ink">{member.name}</h3>
      <p className="mt-1 text-sm font-medium text-teal-mid">{member.role}</p>

      <p className="mt-4 text-sm leading-relaxed text-muted">{member.bio}</p>

      <div className="mt-5 flex items-center gap-3">
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            aria-label={`Email ${member.name}`}
            className="inline-flex size-11 items-center justify-center rounded-full border border-teal-mid/25 text-teal-deep transition-colors hover:bg-teal-deep/5"
          >
            <Mail className="size-4" aria-hidden="true" />
          </a>
        )}
        <a
          href={member.linkedin}
          aria-label={`${member.name} on LinkedIn`}
          className="inline-flex size-11 items-center justify-center rounded-full border border-teal-mid/25 text-teal-deep transition-colors hover:bg-teal-deep/5"
        >
          <LinkedInIcon className="size-4" />
        </a>
      </div>
    </GlassCard>
  );
}
