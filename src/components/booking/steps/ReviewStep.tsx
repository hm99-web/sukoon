import { motion } from "framer-motion";
import {
  CalendarDays,
  ClipboardList,
  MapPin,
  Pencil,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import { StepIntro } from "@/components/booking/ProgressHeader";
import { careTasks } from "@/data/tasks";
import { genderOptions, recipientOptions } from "@/data/preferences";
import { longStayDiscount } from "@/data/pricing";
import { formatPrice, formatRange, daysBetween } from "@/lib/formatters";
import { computePrice } from "@/lib/pricing";
import { fadeUp, stagger } from "@/lib/motion";
import { parseDate, useBooking } from "@/hooks/useBooking";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";

function SummaryCard({
  icon: Icon,
  title,
  onEdit,
  children,
}: {
  icon: typeof CalendarDays;
  title: string;
  onEdit: () => void;
  children: React.ReactNode;
}) {
  return (
    <motion.div variants={fadeUp} className="card-hairline p-4">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2 text-ink">
          <Icon className="h-4 w-4 text-primary" aria-hidden />
          <h3 className="font-semibold">{title}</h3>
        </div>
        <button
          type="button"
          onClick={onEdit}
          className="inline-flex min-h-9 items-center gap-1 rounded-full px-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary-soft"
        >
          <Pencil className="h-3.5 w-3.5" aria-hidden /> Edit
        </button>
      </div>
      <div className="space-y-1 text-sm leading-relaxed text-ink-soft">{children}</div>
    </motion.div>
  );
}

export function ReviewStep({ onEdit }: { onEdit: (stepIndex: number) => void }) {
  const { draft } = useBooking();
  const start = parseDate(draft.startDate);
  const end = parseDate(draft.endDate);
  const price = computePrice(draft.shift, start, end);
  const animated = useCountUp(price?.totalPaise ?? 0);

  const selectedTasks = careTasks.filter((t) => draft.tasks.includes(t.id));
  const genderLabel = genderOptions.find((g) => g.value === draft.gender)?.label;
  const recipientLabel = recipientOptions.find((r) => r.value === draft.recipient)?.label;

  return (
    <div>
      <StepIntro
        title="Let's check everything together"
        subtitle="Here's your request and the price. Nothing is charged now."
      />

      <motion.div variants={stagger(0.05)} initial="hidden" animate="show" className="space-y-3">
        {/* Dates */}
        <SummaryCard icon={CalendarDays} title="Dates & shift" onEdit={() => onEdit(0)}>
          {start && end ? (
            <>
              <p className="font-semibold text-ink tabular-nums">
                {daysBetween(start, end)} {daysBetween(start, end) === 1 ? "day" : "days"} · {formatRange(start, end)}
              </p>
              {price && (
                <p>
                  {price.shift.label} · {price.shift.hours} each day
                </p>
              )}
            </>
          ) : (
            <p>No dates chosen yet</p>
          )}
        </SummaryCard>

        {/* Care needs */}
        <SummaryCard icon={ClipboardList} title="Care needs" onEdit={() => onEdit(1)}>
          {selectedTasks.length > 0 ? (
            <p className="text-ink">{selectedTasks.map((t) => t.label).join(" · ")}</p>
          ) : (
            <p>We'll ask about specifics on the call.</p>
          )}
          {draft.notes.trim() && (
            <p className="mt-1 italic text-ink-soft">"{draft.notes.trim()}"</p>
          )}
        </SummaryCard>

        {/* Preferences */}
        <SummaryCard icon={UserRound} title="Preferences" onEdit={() => onEdit(2)}>
          <p>
            <span className="text-ink-faint">Caregiver:</span>{" "}
            <span className="text-ink">{genderLabel}</span>
          </p>
          <p>
            <span className="text-ink-faint">Language:</span>{" "}
            <span className="text-ink">
              {draft.languages.length ? draft.languages.join(", ") : "Any language is fine"}
            </span>
          </p>
          {recipientLabel && (
            <p>
              <span className="text-ink-faint">For:</span>{" "}
              <span className="text-ink">
                {recipientLabel}
                {draft.recipient === "other" && draft.relationship
                  ? ` (${draft.relationship})`
                  : ""}
                {draft.ageBand ? ` · ${draft.ageBand}` : ""}
              </span>
            </p>
          )}
        </SummaryCard>

        {/* Contact */}
        <SummaryCard icon={MapPin} title="Contact & address" onEdit={() => onEdit(3)}>
          <p className="text-ink">{draft.name || "—"}</p>
          <p className="tabular-nums">
            +91 {draft.phone}
            {draft.whatsappSame && <span className="text-secondary-ink"> · on WhatsApp</span>}
          </p>
          <p>
            {[draft.addressLine, draft.area, draft.pincode].filter(Boolean).join(", ")}
          </p>
        </SummaryCard>
      </motion.div>

      {/* Price estimate */}
      {price && (
        <div className="mt-5 overflow-hidden rounded-3xl border border-primary/20 bg-surface shadow-card">
          <div className="p-5">
            <div className="flex items-center justify-between text-sm text-ink-soft">
              <span>
                {formatPrice(price.shift.pricePaise)} × {price.days}{" "}
                {price.days === 1 ? "day" : "days"}
              </span>
              <span className="tabular-nums">{formatPrice(price.subtotalPaise)}</span>
            </div>
            {price.hasDiscount && (
              <div className="mt-1.5 flex items-center justify-between text-sm font-medium text-secondary-ink">
                <span>Long-stay discount ({Math.round(longStayDiscount.rate * 100)}%)</span>
                <span className="tabular-nums">− {formatPrice(price.discountPaise)}</span>
              </div>
            )}
            <div className="mt-3 flex items-end justify-between border-t border-line pt-3">
              <div>
                <p className="text-sm font-medium text-ink-soft">Estimated total</p>
                <p className="text-xs text-ink-faint">Final amount confirmed on the call</p>
              </div>
              <p className="font-display text-[2rem] font-semibold leading-none tabular-nums text-ink">
                {formatPrice(animated)}
              </p>
            </div>
          </div>
          <p className="border-t border-line bg-muted/50 px-5 py-3 text-xs leading-relaxed text-ink-soft">
            Overnight support, post-surgery care, or extra tasks may adjust this — we'll always confirm on the call. No hidden charges.
          </p>
        </div>
      )}

      {/* Pay-after banner */}
      <div className={cn("mt-4 flex items-start gap-3 rounded-3xl bg-secondary-soft p-4")}>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-secondary text-secondary-foreground">
          <ShieldCheck className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <p className="font-semibold text-secondary-ink">You pay nothing now.</p>
          <p className="text-sm leading-relaxed text-secondary-ink/80">
            Payment is collected only after we assign a caregiver and you approve them. Cancel anytime before care begins, free.
          </p>
        </div>
      </div>

      <p className="mt-4 text-center text-xs leading-relaxed text-ink-faint">
        By confirming, you agree we may call or WhatsApp you to arrange care.
      </p>
    </div>
  );
}
