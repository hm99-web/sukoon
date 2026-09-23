import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

import { faq } from "@/data/content";
import { Reveal } from "@/components/landing/reveal";
import { easing } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto mt-10 max-w-2xl space-y-3">
      {faq.map((item, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={item.q}>
            <div
              className={cn(
                "overflow-hidden rounded-3xl border bg-surface transition-colors",
                isOpen ? "border-primary/30 shadow-soft" : "border-line",
              )}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-display text-lg font-semibold text-ink">{item.q}</span>
                <span
                  className={cn(
                    "grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300",
                    isOpen ? "rotate-45 bg-primary text-primary-foreground" : "bg-muted text-ink-soft",
                  )}
                  aria-hidden
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: easing.calmOut }}
                  >
                    <p className="px-5 pb-5 text-pretty leading-relaxed text-ink-soft">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
