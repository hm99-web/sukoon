import { motion, useReducedMotion } from "framer-motion";
import { Check, Copy, Home, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

import { brand } from "@/lib/brand";
import { easing, spring, stagger, fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

function SuccessScene() {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto grid h-32 w-32 place-items-center">
      {/* rippling rings */}
      {!reduce &&
        [0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="absolute rounded-full border border-primary/30"
            initial={{ width: "40%", height: "40%", opacity: 0.5 }}
            animate={{ width: "130%", height: "130%", opacity: 0 }}
            transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.7, ease: "easeOut" }}
          />
        ))}
      {/* breathing halo */}
      <motion.span
        className="absolute h-full w-full rounded-full bg-primary/12"
        animate={reduce ? undefined : { scale: [1, 1.06, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: easing.breatheSine }}
      />
      <motion.div
        className="relative grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-secondary via-primary to-primary-deep text-white shadow-glow"
        initial={reduce ? false : { scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={spring.successPop}
      >
        <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden>
          <motion.path
            d="M14 25l7 7 13-15"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, ease: easing.calmOut, delay: reduce ? 0 : 0.2 }}
          />
        </svg>
      </motion.div>
    </div>
  );
}

interface ConfirmationProps {
  bookingRef: string;
  sameDay: boolean;
  whatsappHref: string;
  onDone: () => void;
}

export function Confirmation({ bookingRef, sameDay, whatsappHref, onDone }: ConfirmationProps) {
  const reduce = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const copyRef = async () => {
    try {
      await navigator.clipboard.writeText(bookingRef);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const timeline = [
    sameDay
      ? "We call you — usually within about 15 minutes for same-day requests."
      : "We call you — usually within about 2 hours — to confirm the details.",
    "We match a nurse or caregiver to your needs and preferences.",
    "You approve them — and only then do you pay. Never before.",
    "They arrive at your home on your start date.",
  ];

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="mx-auto max-w-lg px-5 pb-16 pt-[max(2rem,env(safe-area-inset-top))] text-center"
    >
      <SuccessScene />

      <motion.div
        variants={stagger(0.08, reduce ? 0 : 0.55)}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          variants={fadeUp}
          className="mt-6 font-display text-[2rem] font-semibold leading-tight text-ink"
        >
          You're taken care of.
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-2 text-lg text-ink-soft">
          Take a breath — we've got it from here.
        </motion.p>
        <motion.p variants={fadeUp} className="mx-auto mt-2 max-w-md text-pretty leading-relaxed text-ink-soft">
          Your booking is created. We'll call you shortly to assign the right nurse or caregiver. No payment now — you pay only after you approve who we assign.
        </motion.p>

        {/* Booking ref */}
        <motion.div variants={fadeUp} className="mx-auto mt-6 inline-flex flex-col items-center">
          <span className="text-xs font-medium uppercase tracking-wide text-ink-faint">
            Booking reference
          </span>
          <button
            type="button"
            onClick={copyRef}
            className="mt-1 inline-flex items-center gap-2 rounded-2xl border border-line bg-surface px-4 py-2.5 font-display text-xl font-semibold tabular-nums text-ink shadow-soft transition-colors hover:border-line-strong"
            aria-live="polite"
          >
            {bookingRef}
            {copied ? (
              <span className="inline-flex items-center gap-1 text-sm font-sans font-semibold text-primary">
                <Check className="h-4 w-4" /> Copied
              </span>
            ) : (
              <Copy className="h-4 w-4 text-ink-faint" aria-hidden />
            )}
          </button>
          <span className="mt-1.5 text-xs text-ink-faint">
            We'll text this to you so you have it handy.
          </span>
        </motion.div>

        {/* What to expect */}
        <motion.div variants={fadeUp} className="card-hairline mt-7 p-5 text-left">
          <h2 className="font-display text-lg font-semibold text-ink">What happens next</h2>
          <ol className="mt-3 space-y-3">
            {timeline.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary-soft text-xs font-bold text-primary-ink">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed text-ink-soft">{item}</span>
              </li>
            ))}
          </ol>
          <p className="mt-4 rounded-2xl bg-muted/60 px-3.5 py-2.5 text-xs leading-relaxed text-ink-soft">
            Keep your phone nearby — the call may come from a {brand.name} number you don't recognise yet.
          </p>
        </motion.div>

        {/* Primary next step — the whole conversation (confirm, share your
            caregiver, and collect payment after you approve) happens here. */}
        <motion.a
          variants={fadeUp}
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-secondary px-5 text-base font-semibold text-secondary-foreground shadow-lift transition-colors hover:bg-secondary/90"
        >
          <MessageCircle className="h-5 w-5" aria-hidden /> Send my booking on WhatsApp
        </motion.a>
        <motion.p variants={fadeUp} className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-ink-faint">
          We confirm the details, share your caregiver's name, and collect payment right here — only after you approve them.
        </motion.p>

        {/* Secondary actions */}
        <motion.div variants={fadeUp} className="mt-4 grid grid-cols-2 gap-2.5">
          <a
            href={`tel:${brand.supportPhone}`}
            className={cn(
              "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-surface px-4 font-semibold text-ink shadow-soft transition-colors hover:border-line-strong",
            )}
          >
            <Phone className="h-4 w-4 text-primary" aria-hidden /> Call us
          </a>
          <button
            type="button"
            onClick={onDone}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-surface px-4 font-semibold text-ink shadow-soft transition-colors hover:border-line-strong"
          >
            <Home className="h-4 w-4 text-primary" aria-hidden /> Home
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
