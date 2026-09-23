import { motion } from "framer-motion";
import { ArrowRight, Check, Heart } from "lucide-react";

import { PlayfulNurse } from "@/components/hero/PlayfulNurse";
import { Button } from "@/components/ui/button";
import { heroTrustline, trustBadges } from "@/data/content";
import { easing } from "@/lib/motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easing.calmOut } },
};

export function Hero({ onBook }: { onBook: () => void }) {
  const scrollToHow = () =>
    document.getElementById("how")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative">
      {/* Warm hero block */}
      <div className="relative overflow-hidden rounded-b-[2.75rem] bg-gradient-to-b from-[#FFB35C] via-[#FF8F42] to-[#FB6A28] px-5 pb-16 pt-24 text-center shadow-[0_24px_50px_-30px_rgba(251,106,40,0.9)]">
        <motion.div variants={container} initial="hidden" animate="show" className="mx-auto flex max-w-md flex-col items-center">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-bold text-white backdrop-blur-sm"
          >
            <Heart className="h-3.5 w-3.5" fill="currentColor" aria-hidden />
            At-home care, when someone you love is unwell
          </motion.span>

          {/* Character with a soft halo */}
          <motion.div variants={item} className="relative mt-3">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 blur-2xl" />
            <div className="relative">
              <PlayfulNurse />
            </div>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-1 max-w-[15ch] font-display text-[2.5rem] font-semibold leading-[1.02] text-white sm:text-[2.9rem]"
          >
            someone kind, at your door
          </motion.h1>

          <motion.p variants={item} className="mx-auto mt-3 max-w-sm text-[1.05rem] font-medium leading-relaxed text-white/90">
            Book a warm nurse or caregiver for meals, bathing, medicine reminders and
            gentle company. You pay only after we assign someone you approve.
          </motion.p>

          <motion.div variants={item} className="mt-7 flex w-full flex-col items-center gap-3">
            <Button variant="secondary" size="lg" block onClick={onBook} className="text-primary-ink shadow-lift">
              Book care
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <button
              type="button"
              onClick={scrollToHow}
              className="inline-flex min-h-11 items-center justify-center rounded-full px-5 text-[0.95rem] font-bold text-white underline-offset-4 hover:underline"
            >
              See how it works
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Trust badges on cream */}
      <div className="px-5 pt-6">
        <ul className="mx-auto flex max-w-md flex-wrap justify-center gap-x-4 gap-y-2">
          {trustBadges.map((badge) => (
            <li key={badge} className="flex items-center gap-1.5 text-sm font-semibold text-ink-soft">
              <span className="grid h-4 w-4 place-items-center rounded-full bg-secondary text-secondary-foreground">
                <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
              </span>
              {badge}
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-3 max-w-sm text-center text-sm text-ink-faint">{heroTrustline}</p>
      </div>
    </section>
  );
}
