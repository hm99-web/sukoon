import { AnimatePresence, motion } from "framer-motion";

/**
 * Full-screen blocking loader. Covers the whole viewport with a softly
 * blurred, slightly dimmed cream veil so nothing underneath can be tapped,
 * and shows a centred ring — grey track, orange arc — while a view switch
 * is in flight. Mount it with `show` toggled from a `useTransition` flag.
 */
export function LoadingOverlay({ show, label = "Loading…" }: { show: boolean; label?: string }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loading-overlay"
          role="status"
          aria-live="polite"
          aria-label={label}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          // Fixed + z-50 sits above the sticky header/CTA bar; the element is
          // interactive (no pointer-events-none) so it swallows every tap.
          className="fixed inset-0 z-50 grid place-items-center bg-canvas/70 backdrop-blur-sm"
          onClick={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.preventDefault()}
        >
          <div
            aria-hidden
            className="h-14 w-14 animate-spin rounded-full border-[5px] border-line-strong border-t-primary motion-reduce:animate-none"
          />
          <span className="sr-only">{label}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
