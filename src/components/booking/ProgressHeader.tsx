import { motion } from "framer-motion";
import { ArrowLeft, Loader2 } from "lucide-react";

import { LogoMark } from "@/components/brand/Logo";
import { easing } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface ProgressHeaderProps {
  step: number; // 1-based
  total: number;
  onBack: () => void;
  backLabel?: string;
  /** True while leaving the flow — shows a spinner so the tap feels acknowledged. */
  backPending?: boolean;
}

export function ProgressHeader({
  step,
  total,
  onBack,
  backLabel = "Back",
  backPending,
}: ProgressHeaderProps) {
  const pct = (step / total) * 100;
  return (
    <div className="sticky top-0 z-30 -mx-5 mb-1 px-5 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
      <div className="glass -mx-5 mb-3 border-b border-line/70 px-5 pb-3 pt-3">
        <div className="flex items-center justify-between gap-3">
          <motion.button
            type="button"
            onClick={onBack}
            whileTap={{ scale: 0.94 }}
            aria-busy={backPending || undefined}
            className="inline-flex min-h-11 items-center gap-1.5 rounded-full px-2 py-1 text-sm font-semibold text-ink-soft transition-colors hover:text-ink active:bg-muted"
          >
            {backPending ? (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            ) : (
              <ArrowLeft className="h-4 w-4" aria-hidden />
            )}
            {backLabel}
          </motion.button>
          <LogoMark className="h-7 w-7" />
          <span className="min-h-11 content-center text-sm font-semibold tabular-nums text-ink-soft">
            Step {step} <span className="text-ink-faint">of {total}</span>
          </span>
        </div>
        <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-muted" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={total}>
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-secondary via-primary to-primary-deep"
            initial={false}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.45, ease: easing.calmOut }}
          />
        </div>
      </div>
    </div>
  );
}

/** The step title + subtitle block, consistent across every wizard screen. */
export function StepIntro({
  title,
  subtitle,
  helper,
}: {
  title: string;
  subtitle?: string;
  helper?: string;
}) {
  return (
    <div className="mb-6">
      <h1 className="text-balance font-display text-[1.65rem] font-semibold leading-tight text-ink sm:text-[1.9rem]">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-2 text-pretty text-[1.05rem] leading-relaxed text-ink-soft">
          {subtitle}
        </p>
      )}
      {helper && (
        <p className={cn("mt-3 rounded-2xl bg-primary-soft/50 px-4 py-3 text-sm leading-relaxed text-primary-ink")}>
          {helper}
        </p>
      )}
    </div>
  );
}
