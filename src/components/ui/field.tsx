import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { forwardRef, useId } from "react";

import { cn } from "@/lib/utils";

export function Label({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "block text-sm font-semibold text-ink",
        className,
      )}
      {...props}
    />
  );
}

interface FieldProps {
  label?: string;
  htmlFor?: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  className?: string;
  children: React.ReactNode;
}

/** Label + control + inline hint/error, following the "error near field" rule. */
export function Field({
  label,
  htmlFor,
  hint,
  error,
  optional,
  className,
  children,
}: FieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <div className="flex items-baseline justify-between gap-3">
          <Label htmlFor={htmlFor}>{label}</Label>
          {optional && (
            <span className="text-xs font-medium text-ink-faint">Optional</span>
          )}
        </div>
      )}
      {children}
      <AnimatePresence mode="wait" initial={false}>
        {error ? (
          <motion.p
            key="error"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
            className="flex items-center gap-1.5 text-sm font-medium text-destructive"
            role="alert"
          >
            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden />
            {error}
          </motion.p>
        ) : hint ? (
          <p className="text-sm text-ink-soft">{hint}</p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

const controlBase =
  "w-full rounded-2xl border bg-surface px-4 text-ink placeholder:text-ink-faint transition-colors duration-200 ease-gentle focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-0";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
  leadingIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, invalid, leadingIcon, ...props }, ref) => {
    if (leadingIcon) {
      return (
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-faint">
            {leadingIcon}
          </span>
          <input
            ref={ref}
            className={cn(
              controlBase,
              "h-13 py-3 pl-11",
              invalid ? "border-destructive/60" : "border-line hover:border-line-strong",
              className,
            )}
            aria-invalid={invalid || undefined}
            {...props}
          />
        </div>
      );
    }
    return (
      <input
        ref={ref}
        className={cn(
          controlBase,
          "h-13 py-3",
          invalid ? "border-destructive/60" : "border-line hover:border-line-strong",
          className,
        )}
        aria-invalid={invalid || undefined}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, invalid, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          controlBase,
          "min-h-[112px] resize-none py-3 leading-relaxed",
          invalid ? "border-destructive/60" : "border-line hover:border-line-strong",
          className,
        )}
        aria-invalid={invalid || undefined}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

/** Convenience: generate a stable id when a caller doesn't pass one. */
export function useFieldId(prefix: string) {
  const id = useId();
  return `${prefix}-${id}`;
}
