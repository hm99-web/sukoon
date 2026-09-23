import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

interface ChipProps {
  selected: boolean;
  onToggle: () => void;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

/** A tappable pill for multi-select needs (task chips, languages). */
export function Chip({ selected, onToggle, icon, children, className }: ChipProps) {
  return (
    <motion.button
      type="button"
      role="checkbox"
      aria-checked={selected}
      onClick={onToggle}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className={cn(
        "inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 ease-gentle",
        selected
          ? "border-primary/40 bg-primary-soft text-primary-ink shadow-soft"
          : "border-line bg-surface text-ink-soft hover:border-line-strong hover:text-ink",
        className,
      )}
    >
      <span
        className={cn(
          "grid h-5 w-5 place-items-center rounded-full transition-colors",
          selected ? "bg-primary text-primary-foreground" : "bg-muted text-ink-faint",
        )}
        aria-hidden
      >
        {selected ? <Check className="h-3.5 w-3.5" /> : icon}
      </span>
      {children}
    </motion.button>
  );
}

interface OptionCardProps {
  selected: boolean;
  onSelect: () => void;
  icon?: React.ReactNode;
  title: string;
  description?: string;
  trailing?: React.ReactNode;
  className?: string;
}

/** A larger radio-style card for single-choice selections (gender, shift, who-for). */
export function OptionCard({
  selected,
  onSelect,
  icon,
  title,
  description,
  trailing,
  className,
}: OptionCardProps) {
  return (
    <motion.button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 460, damping: 30 }}
      className={cn(
        "group relative flex w-full items-center gap-3.5 rounded-2xl border p-4 text-left transition-colors duration-200 ease-gentle",
        selected
          ? "border-primary/50 bg-primary-soft/60 shadow-soft"
          : "border-line bg-surface hover:border-line-strong hover:bg-canvas",
        className,
      )}
    >
      {icon && (
        <span
          className={cn(
            "grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-colors",
            selected ? "bg-primary text-primary-foreground" : "bg-muted text-primary",
          )}
          aria-hidden
        >
          {icon}
        </span>
      )}
      <span className="min-w-0 flex-1">
        <span className="block font-semibold text-ink">{title}</span>
        {description && (
          <span className="mt-0.5 block text-sm text-ink-soft">{description}</span>
        )}
      </span>
      {trailing ?? (
        <span
          className={cn(
            "grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 transition-colors",
            selected ? "border-primary bg-primary text-primary-foreground" : "border-line-strong bg-surface",
          )}
          aria-hidden
        >
          {selected && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
        </span>
      )}
    </motion.button>
  );
}
