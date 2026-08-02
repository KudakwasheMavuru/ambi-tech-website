import {
  Home,
  Wallet,
  BarChart3,
  User,
  ChevronRight,
  Check,
  RefreshCw,
  Tv,
  Smartphone,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/cn";

const billers = [
  { icon: Smartphone, label: "MTN Airtime", tint: "bg-[#ffcc08] text-[#1a1a1a]" },
  { icon: Zap, label: "Cash Power", tint: "bg-[#1f6fb2] text-white" },
  { icon: RefreshCw, label: "RRA", tint: "bg-[#0e2a30] text-white" },
  { icon: Smartphone, label: "Airtel Airtime", tint: "bg-[#e30613] text-white" },
];

function StatusChrome({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between px-4 pt-9 pb-3">
      <span className="font-display text-[13px] font-semibold text-white">{title}</span>
      <span className="flex size-5 items-center justify-center rounded-full bg-white/15 text-[9px] font-bold text-white">
        e
      </span>
    </div>
  );
}

function BottomNav({ active }: { active: "home" | "payments" | "insights" }) {
  const items = [
    { key: "home", label: "Home", icon: Home },
    { key: "payments", label: "Payments", icon: Wallet },
    { key: "accounts", label: "Accounts", icon: BarChart3 },
    { key: "insights", label: "Insights", icon: BarChart3 },
    { key: "profile", label: "Profile", icon: User },
  ] as const;

  return (
    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-black/5 bg-white px-3 pb-2 pt-2">
      {items.map((item) => {
        const isActive = item.key === active;
        const Icon = item.icon;
        return (
          <div key={item.key} className="flex flex-1 flex-col items-center gap-0.5">
            <Icon
              className={cn("size-3.5", isActive ? "text-teal-deep" : "text-ink/30")}
              strokeWidth={isActive ? 2.4 : 2}
            />
            <span
              className={cn(
                "text-[7px] font-medium",
                isActive ? "text-teal-deep" : "text-ink/30"
              )}
            >
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function PaymentsScreen() {
  return (
    <div className="absolute inset-0 flex flex-col bg-white">
      <div className="bg-teal-deep pb-4">
        <StatusChrome title="Payments" />
      </div>

      <div className="px-4 pt-4">
        <p className="text-[9px] font-semibold uppercase tracking-[0.1em] text-ink/40">
          Favourite billers
        </p>
        <div className="mt-2.5 flex gap-3">
          {billers.map((b) => (
            <div key={b.label} className="flex flex-col items-center gap-1">
              <span className={cn("flex size-8 items-center justify-center rounded-full", b.tint)}>
                <b.icon className="size-3.5" strokeWidth={2.2} />
              </span>
              <span className="text-[6.5px] font-medium text-ink/60">{b.label.split(" ")[0]}</span>
            </div>
          ))}
          <div className="flex flex-col items-center gap-1">
            <span className="flex size-8 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep">
              <RefreshCw className="size-3.5" strokeWidth={2.2} />
            </span>
            <span className="text-[6.5px] font-medium text-ink/60">Manage</span>
          </div>
        </div>
      </div>

      <div className="mt-5 flex-1 px-4">
        <p className="text-[9px] font-semibold uppercase tracking-[0.1em] text-ink/40">All billers</p>
        <div className="mt-2 space-y-1.5">
          {[
            { icon: Tv, label: "Pay TV Canal+", sub: "Utility payments" },
            { icon: Smartphone, label: "Airtime", sub: "MTN, Airtel" },
            { icon: Smartphone, label: "MTN Airtime", sub: "Airtime top-up" },
            { icon: Smartphone, label: "Airtel Airtime", sub: "Airtime top-up" },
          ].map((row) => (
            <div
              key={row.label}
              className="flex items-center gap-2.5 rounded-xl border border-ink/5 bg-surface-tint px-2.5 py-2"
            >
              <span className="flex size-6 items-center justify-center rounded-lg bg-white text-teal-deep shadow-sm">
                <row.icon className="size-3" strokeWidth={2.2} />
              </span>
              <div className="flex-1">
                <p className="text-[8.5px] font-semibold text-ink">{row.label}</p>
                <p className="text-[7px] text-ink/45">{row.sub}</p>
              </div>
              <ChevronRight className="size-3 text-ink/25" />
            </div>
          ))}
        </div>
      </div>

      <BottomNav active="payments" />
    </div>
  );
}

function TransferScreen() {
  return (
    <div className="absolute inset-0 flex flex-col bg-white">
      <div className="bg-teal-deep pb-5">
        <StatusChrome title="Transfer" />
        <div className="mx-4 mt-1 rounded-xl bg-white/10 px-3 py-2">
          <p className="text-[7px] font-medium uppercase tracking-[0.08em] text-white/60">
            eNoti eKash account
          </p>
          <p className="mt-0.5 text-[10px] font-semibold text-white">0709 430 943</p>
        </div>
      </div>

      <div className="flex-1 px-4 pt-4">
        <div className="flex items-center gap-2 rounded-xl bg-surface-tint px-2.5 py-2">
          <span className="flex size-6 items-center justify-center rounded-lg bg-[#ffcc08] text-[9px] font-bold text-[#1a1a1a]">
            M
          </span>
          <div>
            <p className="text-[8.5px] font-semibold text-ink">MTN Airtime</p>
            <p className="text-[7px] text-ink/45">Airtime</p>
          </div>
        </div>

        <div className="mt-3 flex rounded-full bg-surface-tint p-0.5 text-[7.5px] font-semibold">
          <span className="flex-1 rounded-full py-1 text-center text-ink/45">Self</span>
          <span className="flex-1 rounded-full bg-teal-deep py-1 text-center text-white">Other</span>
        </div>

        <div className="mt-3 space-y-2">
          <div className="flex items-center justify-between rounded-xl border border-ink/8 px-2.5 py-2">
            <div>
              <p className="text-[7px] text-ink/45">Select a beneficiary</p>
              <p className="text-[7.5px] font-medium text-ink/70">0 beneficiaries saved</p>
            </div>
            <ChevronRight className="size-3 text-ink/25" />
          </div>
          <div className="flex items-center justify-between rounded-xl border border-ink/8 px-2.5 py-2">
            <span className="text-[8.5px] font-medium text-ink">0784 902 322</span>
            <Check className="size-3 rounded-full bg-emerald-500 p-0.5 text-white" />
          </div>
          <div className="rounded-xl border border-ink/8 px-2.5 py-2">
            <p className="text-[7px] text-ink/45">Account holder</p>
            <p className="text-[8.5px] font-medium text-ink">Loby Leister</p>
          </div>
          <div className="rounded-xl border border-dashed border-ink/15 px-2.5 py-2">
            <p className="text-[7px] text-ink/35">Description (optional)</p>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4">
        <div className="rounded-full bg-teal-deep py-2 text-center text-[8.5px] font-semibold text-white">
          Enter Amount
        </div>
      </div>
    </div>
  );
}

function LimitsScreen() {
  const rows = [
    { label: "Daily limit", value: "RWF 2,000,000" },
    { label: "Amount transferred", value: "RWF 0.0" },
    { label: "Amount remaining", value: "RWF 2,000,000" },
    { label: "Limit per transaction", value: "RWF 2,000,000", badge: true },
  ];

  return (
    <div className="absolute inset-0 flex flex-col bg-white">
      <div className="bg-teal-deep pb-6">
        <StatusChrome title="Transfer limits" />
        <p className="px-4 text-[8px] text-white/60">An overview of your transfer limits</p>
      </div>

      <div className="flex-1 px-4 pt-5">
        <div className="space-y-3">
          {rows.map((row) => (
            <div key={row.label} className="border-b border-ink/8 pb-3">
              <p className="text-[7.5px] font-medium uppercase tracking-[0.06em] text-ink/40">
                {row.label}
              </p>
              {row.badge ? (
                <span className="mt-1 inline-block rounded-full bg-teal-deep/10 px-2 py-0.5 text-[8.5px] font-semibold text-teal-deep">
                  {row.value}
                </span>
              ) : (
                <p className="mt-1 text-[10px] font-semibold text-ink">{row.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-xl bg-surface-tint p-3">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-teal-deep/10">
            <div className="h-full w-0 rounded-full bg-teal-deep" />
          </div>
          <p className="mt-2 text-[7px] leading-relaxed text-ink/45">
            You have used 0% of your daily transfer limit.
          </p>
        </div>
      </div>
    </div>
  );
}

function ScheduleScreen() {
  const periods = ["Daily", "Weekly", "Monthly", "Yearly"];

  return (
    <div className="absolute inset-0 flex flex-col bg-white">
      <div className="bg-teal-deep pb-5">
        <StatusChrome title="Schedule transfer" />
        <div className="mx-4 mt-1 flex rounded-full bg-white/10 p-0.5 text-[7.5px] font-semibold">
          <span className="flex-1 rounded-full py-1 text-center text-white/60">Once</span>
          <span className="flex-1 rounded-full bg-white py-1 text-center text-teal-deep">
            Recurring
          </span>
        </div>
      </div>

      <div className="flex-1 px-4 pt-4">
        <p className="text-[9px] font-semibold uppercase tracking-[0.1em] text-ink/40">
          Select recurring
        </p>
        <div className="mt-2 space-y-1.5">
          {periods.map((period, i) => (
            <div
              key={period}
              className={cn(
                "flex items-center justify-between rounded-xl border px-2.5 py-2.5",
                i === 1 ? "border-teal-deep/30 bg-teal-deep/5" : "border-ink/8"
              )}
            >
              <span className="text-[8.5px] font-medium text-ink">{period}</span>
              <ChevronRight className="size-3 text-ink/25" />
            </div>
          ))}
        </div>

        <div className="mt-4 space-y-2">
          <div className="rounded-xl border border-ink/8 px-2.5 py-2">
            <p className="text-[7px] text-ink/45">Select start date</p>
            <p className="text-[8.5px] font-medium text-ink">12 Aug 2026</p>
          </div>
          <div className="rounded-xl border border-ink/8 px-2.5 py-2">
            <p className="text-[7px] text-ink/45">Select end date</p>
            <p className="text-[8.5px] font-medium text-ink/40">Optional</p>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4">
        <div className="rounded-full bg-teal-deep py-2 text-center text-[8.5px] font-semibold text-white">
          Schedule transfer
        </div>
      </div>
    </div>
  );
}

const screens = {
  payments: PaymentsScreen,
  transfer: TransferScreen,
  limits: LimitsScreen,
  schedule: ScheduleScreen,
} as const;

export type EnotiScreenKind = keyof typeof screens;

export function EnotiScreenMock({ kind }: { kind: EnotiScreenKind }) {
  const Screen = screens[kind];
  return <Screen />;
}
