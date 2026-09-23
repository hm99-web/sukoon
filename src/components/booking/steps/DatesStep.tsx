import { AnimatePresence, motion } from "framer-motion";
import { CalendarClock, CalendarDays, Info, Zap } from "lucide-react";

import { RangeCalendar } from "@/components/booking/RangeCalendar";
import { StepIntro } from "@/components/booking/ProgressHeader";
import { Badge } from "@/components/ui/badge";
import { shiftTiers } from "@/data/pricing";
import { formatPrice, formatRange, daysBetween } from "@/lib/formatters";
import { fadeUp, spring, stagger } from "@/lib/motion";
import { parseDate, toISODate, useBooking } from "@/hooks/useBooking";
import { cn } from "@/lib/utils";

function reassuranceFor(start: Date | null, end: Date | null) {
  if (!start || !end) return null;
  const days = daysBetween(start, end);
  const isToday = toISODate(start) === toISODate(new Date());
  if (isToday && days === 1)
    return {
      tone: "warm" as const,
      text: "We prioritise same-day requests — we'll call within about 15 minutes.",
    };
  if (days >= 7)
    return {
      tone: "primary" as const,
      text: "That's a longer stay — longer bookings get a small discount, and our team will confirm caregiver availability on the call.",
    };
  return null;
}

export function DatesStep({ error }: { error?: string }) {
  const { draft, patch } = useBooking();
  const start = parseDate(draft.startDate);
  const end = parseDate(draft.endDate);

  const setRange = (s: Date | null, e: Date | null) =>
    patch({
      startDate: s ? toISODate(s) : null,
      endDate: e ? toISODate(e) : null,
    });

  const quickPick = (kind: "today" | "tomorrow" | "weekend") => {
    const now = new Date();
    if (kind === "today") setRange(now, now);
    else if (kind === "tomorrow") {
      const t = new Date(now);
      t.setDate(t.getDate() + 1);
      setRange(t, t);
    } else {
      const sat = new Date(now);
      const delta = (6 - sat.getDay() + 7) % 7 || 7; // upcoming Saturday
      sat.setDate(sat.getDate() + delta);
      const sun = new Date(sat);
      sun.setDate(sat.getDate() + 1);
      setRange(sat, sun);
    }
  };

  const reassurance = reassuranceFor(start, end);
  const summary =
    start && end
      ? `${daysBetween(start, end)} ${daysBetween(start, end) === 1 ? "day" : "days"} · ${formatRange(start, end)}`
      : null;

  return (
    <div>
      <StepIntro
        title="When do you need care?"
        subtitle="Pick the days you'd like a caregiver at home."
        helper="Tap your start date, then your end date. Just one day? Tap the same date twice. Nothing is locked in yet."
      />

      {/* Urgency quick-picks — actions, so semantically buttons */}
      <div className="mb-4 flex flex-wrap gap-2" role="group" aria-label="Quick date options">
        {(
          [
            { key: "today", label: "Need someone today", icon: Zap, warm: true },
            { key: "tomorrow", label: "Tomorrow", icon: CalendarClock, warm: false },
            { key: "weekend", label: "This weekend", icon: CalendarDays, warm: false },
          ] as const
        ).map((q) => {
          const Icon = q.icon;
          return (
            <motion.button
              key={q.key}
              type="button"
              whileTap={{ scale: 0.95 }}
              transition={spring.chip}
              onClick={() => quickPick(q.key)}
              className={cn(
                "inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                q.warm
                  ? "border-primary/30 bg-primary-soft/50 text-primary-ink hover:bg-primary-soft"
                  : "border-line bg-surface text-ink-soft hover:border-line-strong hover:text-ink",
              )}
            >
              <Icon className="h-4 w-4" aria-hidden /> {q.label}
            </motion.button>
          );
        })}
      </div>

      {/* Calendar */}
      <div className={cn("card-hairline p-4 sm:p-5", error && "ring-2 ring-destructive/40")}>
        <RangeCalendar start={start} end={end} onSelect={setRange} />
      </div>

      {/* Duration summary */}
      <AnimatePresence>
        {summary && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={spring.gentle}
            className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-secondary-soft px-4 py-2.5 text-sm font-semibold text-secondary-ink"
          >
            <CalendarDays className="h-4 w-4" aria-hidden />
            <span className="tabular-nums">{summary}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {error && (
        <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-destructive" role="alert">
          <Info className="h-4 w-4" aria-hidden /> {error}
        </p>
      )}

      {reassurance && (
        <p
          className={cn(
            "mt-3 rounded-2xl px-4 py-3 text-sm leading-relaxed",
            reassurance.tone === "warm"
              ? "bg-primary-soft text-primary-ink"
              : "bg-primary-soft/60 text-primary-ink",
          )}
        >
          {reassurance.text}
        </p>
      )}

      {/* Daily shift */}
      <div className="mt-7">
        <h2 className="font-display text-lg font-semibold text-ink">How long each day?</h2>
        <p className="mt-1 text-sm text-ink-soft">
          Choose the daily shift. You can fine-tune this with us on the call.
        </p>
        <motion.div
          variants={stagger(0.05)}
          initial="hidden"
          animate="show"
          className="mt-3 grid gap-2.5"
        >
          {shiftTiers.map((tier) => {
            const Icon = tier.icon;
            const selected = draft.shift === tier.key;
            return (
              <motion.button
                key={tier.key}
                type="button"
                variants={fadeUp}
                onClick={() => patch({ shift: tier.key })}
                aria-pressed={selected}
                className={cn(
                  "flex items-center gap-3.5 rounded-2xl border p-4 text-left transition-colors",
                  selected
                    ? "border-primary/50 bg-primary-soft/60 shadow-soft"
                    : "border-line bg-surface hover:border-line-strong",
                )}
              >
                <span
                  className={cn(
                    "grid h-11 w-11 shrink-0 place-items-center rounded-xl",
                    selected ? "bg-primary text-primary-foreground" : "bg-muted text-primary",
                  )}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-ink">{tier.label}</span>
                    <span className="text-sm text-ink-faint">· {tier.hours}</span>
                    {tier.badge && <Badge variant="secondary" size="sm">{tier.badge}</Badge>}
                  </span>
                  <span className="mt-0.5 block text-sm leading-snug text-ink-soft">
                    {tier.note}
                  </span>
                </span>
                <span className="shrink-0 text-right">
                  <span className="block font-display text-lg font-semibold tabular-nums text-ink">
                    {formatPrice(tier.pricePaise)}
                  </span>
                  <span className="text-xs text-ink-faint">/ day</span>
                </span>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
