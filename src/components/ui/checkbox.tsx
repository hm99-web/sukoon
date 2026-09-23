import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: React.ReactNode;
  id?: string;
  className?: string;
}

export function Checkbox({ checked, onChange, label, id, className }: CheckboxProps) {
  return (
    <label
      htmlFor={id}
      className={cn(
        "flex cursor-pointer items-center gap-3 rounded-2xl py-1.5 text-sm text-ink",
        className,
      )}
    >
      <span className="relative inline-flex">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="peer sr-only"
        />
        <span
          className={cn(
            "grid h-6 w-6 place-items-center rounded-lg border-2 transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-primary/60 peer-focus-visible:ring-offset-2",
            checked ? "border-primary bg-primary text-primary-foreground" : "border-line-strong bg-surface",
          )}
          aria-hidden
        >
          {checked && <Check className="h-4 w-4" strokeWidth={3} />}
        </span>
      </span>
      <span className="font-medium">{label}</span>
    </label>
  );
}
