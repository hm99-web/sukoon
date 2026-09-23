/**
 * Money is stored in integer **paise** (like the rest of the platform) and only
 * ever turned into a string here — never hand-format a price elsewhere.
 * 79900 paise -> "₹799".
 */
const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export function formatPrice(paise: number): string {
  return inr.format(Math.round(paise) / 100);
}

/** Plain grouped number, e.g. 2000 -> "2,000". */
export function formatCount(n: number): string {
  return new Intl.NumberFormat("en-IN").format(n);
}

const dayFmt = new Intl.DateTimeFormat("en-IN", {
  weekday: "short",
  day: "numeric",
  month: "short",
});

export function formatDay(date: Date): string {
  return dayFmt.format(date);
}

/** Inclusive whole-day count between two dates (same date twice = 1 day). */
export function daysBetween(start: Date, end: Date): number {
  const a = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate());
  const b = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate());
  return Math.floor((b - a) / 86_400_000) + 1;
}

/** "Mon 4 Aug – Thu 7 Aug" or a single "Mon 4 Aug". */
export function formatRange(start: Date, end: Date): string {
  const sameDay = daysBetween(start, end) === 1;
  return sameDay ? formatDay(start) : `${formatDay(start)} – ${formatDay(end)}`;
}
