import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { Confirmation } from "@/components/booking/Confirmation";
import { ProgressHeader } from "@/components/booking/ProgressHeader";
import { StickyCtaBar } from "@/components/booking/StickyCtaBar";
import { ContactStep, type ContactErrors } from "@/components/booking/steps/ContactStep";
import { DatesStep } from "@/components/booking/steps/DatesStep";
import { NeedsStep } from "@/components/booking/steps/NeedsStep";
import { PreferencesStep } from "@/components/booking/steps/PreferencesStep";
import { ReviewStep } from "@/components/booking/steps/ReviewStep";
import { GradientBackground } from "@/components/ui/gradient-background";
import { bookingWhatsappHref, deliverBooking } from "@/lib/booking";
import { stepVariants } from "@/lib/motion";
import { toISODate, useBooking } from "@/hooks/useBooking";

const STEP_CTAS = ["Continue", "Continue", "See pricing", "Review booking", "Confirm booking"];
const TOTAL = 5;

function makeRef() {
  return `SKN-${Math.floor(1000 + Math.random() * 9000)}`;
}

function validateContact(draft: ReturnType<typeof useBooking>["draft"]): ContactErrors {
  const e: ContactErrors = {};
  if (!draft.name.trim()) e.name = "What should we call you? Please add a name.";
  if (!/^[6-9]\d{9}$/.test(draft.phone))
    e.phone = "Enter a 10-digit mobile number (starts with 6–9).";
  if (!draft.addressLine.trim())
    e.addressLine = "Please add a home address so the caregiver can find you.";
  if (!draft.area.trim()) e.area = "Add an area or landmark to help us reach you.";
  if (!/^\d{6}$/.test(draft.pincode))
    e.pincode = "Enter a 6-digit pincode so we can check we serve your area.";
  return e;
}

export function BookingFlow({ onExit }: { onExit: () => void }) {
  const reduce = useReducedMotion();
  const { draft, persistContact, reset } = useBooking();
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [datesError, setDatesError] = useState<string>();
  const [contactErrors, setContactErrors] = useState<ContactErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState<{
    ref: string;
    sameDay: boolean;
    whatsappHref: string;
  } | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }, [step, reduce]);

  const goTo = (next: number, dir: 1 | -1) => {
    setDirection(dir);
    setStep(next);
  };

  const back = () => {
    if (step === 0) onExit();
    else goTo(step - 1, -1);
  };

  const datesComplete = Boolean(draft.startDate && draft.endDate);

  const handleContinue = async () => {
    // Per-step validation
    if (step === 0) {
      if (!datesComplete) {
        setDatesError("Please pick the days you'd like care — tap a start date, then an end date.");
        return;
      }
      setDatesError(undefined);
    }
    if (step === 3) {
      const errs = validateContact(draft);
      if (Object.keys(errs).length) {
        setContactErrors(errs);
        const firstId = {
          name: "contact-name",
          phone: "contact-phone",
          addressLine: "address",
          area: "area",
          pincode: "pincode",
        }[Object.keys(errs)[0] as keyof ContactErrors];
        requestAnimationFrame(() => document.getElementById(firstId!)?.focus());
        return;
      }
      setContactErrors({});
      if (draft.saveContact) persistContact();
    }

    if (step < 4) {
      goTo(step + 1, 1);
      return;
    }

    // Final submit: create a ref, deliver to the optional webhook, and hand off
    // to WhatsApp on the confirmation screen.
    setSubmitting(true);
    const ref = makeRef();
    deliverBooking(draft, ref);
    await new Promise((r) => setTimeout(r, 900));
    const sameDay = draft.startDate === toISODate(new Date());
    setSubmitting(false);
    setConfirmed({ ref, sameDay, whatsappHref: bookingWhatsappHref(draft, ref) });
  };

  if (confirmed) {
    return (
      <div className="relative min-h-dvh">
        <GradientBackground />
        <Confirmation
          bookingRef={confirmed.ref}
          sameDay={confirmed.sameDay}
          whatsappHref={confirmed.whatsappHref}
          onDone={() => {
            reset();
            onExit();
          }}
        />
      </div>
    );
  }

  const ctaDisabled = step === 0 && !datesComplete;

  return (
    <div className="relative min-h-dvh pb-40">
      <GradientBackground />
      <div className="mx-auto max-w-lg px-5">
        <ProgressHeader
          step={step + 1}
          total={TOTAL}
          onBack={back}
          backLabel={step === 0 ? "Home" : "Back"}
        />

        {/* -mx-2/px-2: widen the clip box outward so full-width inputs'
            focus rings aren't clipped on the left/right, while keeping content
            in the same place. The step slide is only ~28px, so nothing peeks. */}
        <div className="relative -mx-2 overflow-x-clip px-2">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={step}
              custom={direction}
              variants={stepVariants(direction)}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {step === 0 && <DatesStep error={datesError} />}
              {step === 1 && <NeedsStep />}
              {step === 2 && <PreferencesStep />}
              {step === 3 && <ContactStep errors={contactErrors} />}
              {step === 4 && <ReviewStep onEdit={(i) => goTo(i, -1)} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <StickyCtaBar
        label={STEP_CTAS[step]}
        onClick={handleContinue}
        disabled={ctaDisabled}
        disabledHelper="Pick a start and end date to continue"
        loading={submitting}
        variant={step === 4 ? "sunny" : "primary"}
        note={
          step === 4
            ? "Confirming creates your booking — still no payment now."
            : "No payment now — you pay only after we assign a nurse you approve."
        }
      />
    </div>
  );
}
