import { ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

interface StickyCtaBarProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  /** Shown (muted) when the CTA is disabled, to explain what's needed. */
  disabledHelper?: string;
  /** Small reassurance line above the button (e.g. "No payment needed to book"). */
  note?: string;
  variant?: "primary" | "sunny";
}

/**
 * The persistent bottom action bar. Glass, safe-area aware, never hides content
 * (the scroll region reserves matching bottom padding). Always restates the
 * pay-after promise so trust is present at every decision point.
 */
export function StickyCtaBar({
  label,
  onClick,
  disabled,
  loading,
  disabledHelper,
  note = "No payment now — you pay only after we assign a nurse you approve.",
  variant = "primary",
}: StickyCtaBarProps) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40">
      <div className="glass pointer-events-auto mx-auto max-w-lg border-t border-line/70 px-5 pb-safe pt-3">
        <p className="mb-2 flex items-center justify-center gap-1.5 text-center text-xs font-medium text-ink-soft">
          <ShieldCheck className="h-3.5 w-3.5 text-primary" aria-hidden />
          {disabled && disabledHelper ? disabledHelper : note}
        </p>
        <Button
          variant={variant}
          size="lg"
          block
          onClick={onClick}
          disabled={disabled}
          loading={loading}
          aria-disabled={disabled || undefined}
        >
          {label}
        </Button>
      </div>
    </div>
  );
}
