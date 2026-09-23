import { HeartPulse, Moon, Sunrise } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Attendant (non-clinical) pricing, calibrated for a mid-tier Indian city.
 * Prices are integer **paise**. Founder-tunable; final amount is always
 * confirmed on the human call, so these are honest estimates, not invoices.
 */
export interface ShiftTier {
  key: "visit" | "full_day" | "live_in_24h";
  label: string;
  hours: string;
  pricePaise: number;
  note: string;
  badge?: string;
  icon: LucideIcon;
}

export const shiftTiers: ShiftTier[] = [
  {
    key: "visit",
    label: "Care Visit",
    hours: "4 hours",
    pricePaise: 120000,
    note: "A single short visit — ideal for a one-off bad day or a check-in. Meals, hygiene help, meds reminder, company.",
    icon: Sunrise,
  },
  {
    key: "full_day",
    label: "Full Day",
    hours: "12 hours",
    pricePaise: 185900,
    note: "Full day-shift (or night-shift) cover for recovery, elderly care, or a family that needs to step away.",
    badge: "Most popular",
    icon: HeartPulse,
  },
  {
    key: "live_in_24h",
    label: "24-Hour Live-in",
    hours: "24 hours",
    pricePaise: 229900,
    note: "Round-the-clock presence with rest breaks. Best for post-surgery recovery or when someone can't be left alone.",
    icon: Moon,
  },
];

export const DEFAULT_SHIFT: ShiftTier["key"] = "full_day";

export const longStayDiscount = {
  thresholdDays: 7,
  rate: 0.07, // 7% — founder-tunable placeholder
  copy: "Longer bookings get a small discount — we'll confirm it on the call.",
};

export const payAfterPromise =
  "No payment now — you pay only after we assign you a nurse you approve.";
