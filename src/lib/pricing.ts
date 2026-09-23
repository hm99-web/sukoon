import { DEFAULT_SHIFT, longStayDiscount, shiftTiers, type ShiftTier } from "@/data/pricing";
import { daysBetween } from "./formatters";

export function getShift(key: ShiftTier["key"]): ShiftTier {
  return (
    shiftTiers.find((s) => s.key === key) ??
    shiftTiers.find((s) => s.key === DEFAULT_SHIFT) ??
    shiftTiers[0]
  );
}

export interface PriceBreakdown {
  shift: ShiftTier;
  days: number;
  subtotalPaise: number;
  discountPaise: number;
  totalPaise: number;
  hasDiscount: boolean;
}

/** Honest estimate: shift/day × days, minus a small long-stay discount. */
export function computePrice(
  shiftKey: ShiftTier["key"],
  start: Date | null,
  end: Date | null,
): PriceBreakdown | null {
  if (!start || !end) return null;
  const shift = getShift(shiftKey);
  const days = daysBetween(start, end);
  const subtotalPaise = shift.pricePaise * days;
  const discountPaise =
    days >= longStayDiscount.thresholdDays
      ? Math.round(subtotalPaise * longStayDiscount.rate)
      : 0;
  return {
    shift,
    days,
    subtotalPaise,
    discountPaise,
    totalPaise: subtotalPaise - discountPaise,
    hasDiscount: discountPaise > 0,
  };
}
