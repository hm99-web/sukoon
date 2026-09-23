import { careTasks } from "@/data/tasks";
import { genderOptions, recipientOptions } from "@/data/preferences";
import { brand } from "@/lib/brand";
import { formatPrice, formatRange, daysBetween } from "@/lib/formatters";
import { computePrice, getShift } from "@/lib/pricing";
import { parseDate, type BookingDraft } from "@/hooks/useBooking";

/**
 * A human-readable booking summary for the WhatsApp handoff / webhook. This is
 * exactly what lands in the founder's WhatsApp so they can call the customer,
 * coordinate a caregiver with their agent, and later collect payment here.
 */
export function buildBookingSummary(draft: BookingDraft, ref: string): string {
  const shift = getShift(draft.shift);
  const start = parseDate(draft.startDate);
  const end = parseDate(draft.endDate);
  const price = computePrice(draft.shift, start, end);

  const taskLabels = careTasks
    .filter((t) => draft.tasks.includes(t.id))
    .map((t) => t.label);
  const genderLabel = genderOptions.find((g) => g.value === draft.gender)?.label;
  const recipientLabel = recipientOptions.find((r) => r.value === draft.recipient)?.label;
  const forWhom = recipientLabel
    ? `${recipientLabel}${
        draft.recipient === "other" && draft.relationship ? ` (${draft.relationship})` : ""
      }${draft.ageBand ? `, ${draft.ageBand}` : ""}`
    : undefined;

  const dates =
    start && end
      ? `${daysBetween(start, end)} day(s) · ${formatRange(start, end)}`
      : "Dates to confirm";

  const lines: (string | undefined)[] = [
    `*New ${brand.name} booking* — ${ref}`,
    "",
    `👤 Name: ${draft.name || "—"}`,
    `📞 Phone: +91 ${draft.phone || "—"}${draft.whatsappSame ? " (on WhatsApp)" : ""}`,
    forWhom ? `🧡 For: ${forWhom}` : undefined,
    `🗓️ ${dates}`,
    `⏱️ ${shift.label} — ${shift.hours}/day`,
    price ? `💰 Est. ${formatPrice(price.totalPaise)} (final confirmed on call)` : undefined,
    taskLabels.length ? `✅ Help with: ${taskLabels.join(", ")}` : undefined,
    `🗣️ Caregiver: ${genderLabel ?? "No preference"} · ${
      draft.languages.length ? draft.languages.join(", ") : "Any language"
    }`,
    `📍 ${[draft.addressLine, draft.area, draft.pincode].filter(Boolean).join(", ") || "—"}`,
    draft.notes.trim() ? `📝 Notes: "${draft.notes.trim()}"` : undefined,
  ];

  return lines.filter((l) => l !== undefined).join("\n");
}

/** wa.me deep link that opens the founder's WhatsApp pre-filled with the booking. */
export function bookingWhatsappHref(draft: BookingDraft, ref: string): string {
  const text = encodeURIComponent(buildBookingSummary(draft, ref));
  return `https://wa.me/${brand.whatsappNumber}?text=${text}`;
}

/**
 * Fire-and-forget delivery to an optional webhook so a booking is never lost
 * even if the customer never opens WhatsApp. Non-fatal on any failure.
 */
export function deliverBooking(draft: BookingDraft, ref: string): void {
  const url = import.meta.env.VITE_BOOKING_WEBHOOK_URL;
  if (!url) return;
  try {
    void fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref, summary: buildBookingSummary(draft, ref), draft }),
      keepalive: true,
    }).catch(() => {
      /* non-fatal — WhatsApp handoff is the primary channel */
    });
  } catch {
    /* non-fatal */
  }
}
