import { AnimatePresence, motion } from "framer-motion";
import { Lock, MapPin, Phone, User, UserCheck } from "lucide-react";
import { useState } from "react";

import { StepIntro } from "@/components/booking/ProgressHeader";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, Input } from "@/components/ui/field";
import { isServiceablePincode } from "@/lib/brand";
import { spring } from "@/lib/motion";
import { useBooking } from "@/hooks/useBooking";

export interface ContactErrors {
  name?: string;
  phone?: string;
  addressLine?: string;
  area?: string;
  pincode?: string;
}

export function ContactStep({ errors }: { errors: ContactErrors }) {
  const { draft, patch, savedContact, applySavedContact } = useBooking();
  const [outOfArea, setOutOfArea] = useState(false);
  const [showSaved, setShowSaved] = useState(Boolean(savedContact));

  const forMyself = draft.recipient === "myself";

  return (
    <div>
      <StepIntro
        title="Where can we reach you?"
        subtitle="Your name and a phone number we can call to confirm."
        helper="We'll call within a few hours to confirm details and assign your caregiver. We never share your number, and we won't spam you."
      />

      <AnimatePresence>
        {showSaved && savedContact && (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, height: 0 }}
            onClick={() => {
              applySavedContact();
              setShowSaved(false);
            }}
            className="mb-4 flex w-full items-center gap-3 rounded-2xl border border-primary/25 bg-primary-soft/50 p-4 text-left"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground">
              <UserCheck className="h-5 w-5" aria-hidden />
            </span>
            <span className="flex-1">
              <span className="block font-semibold text-ink">Use saved details?</span>
              <span className="text-sm text-ink-soft">
                {savedContact.name} · +91 {savedContact.phone}
              </span>
            </span>
            <span className="text-sm font-semibold text-primary">Use</span>
          </motion.button>
        )}
      </AnimatePresence>

      <div className="space-y-5">
        <Field
          label={forMyself ? "Your name" : "Who should we call?"}
          htmlFor="contact-name"
          error={errors.name}
        >
          <Input
            id="contact-name"
            value={draft.name}
            onChange={(e) => patch({ name: e.target.value })}
            placeholder="Your name"
            autoComplete="name"
            leadingIcon={<User className="h-4 w-4" />}
            invalid={Boolean(errors.name)}
          />
        </Field>

        <Field
          label="Mobile number"
          htmlFor="contact-phone"
          error={errors.phone}
          hint="We'll only use your number to arrange care — no spam."
        >
          <div className="flex items-stretch gap-2">
            <span className="grid h-13 shrink-0 place-items-center rounded-2xl border border-line bg-muted px-3.5 text-sm font-semibold text-ink-soft">
              +91
            </span>
            <div className="flex-1">
              <Input
                id="contact-phone"
                type="tel"
                inputMode="numeric"
                maxLength={10}
                value={draft.phone}
                onChange={(e) =>
                  patch({ phone: e.target.value.replace(/\D/g, "").slice(0, 10) })
                }
                placeholder="98765 43210"
                autoComplete="tel-national"
                leadingIcon={<Phone className="h-4 w-4" />}
                invalid={Boolean(errors.phone)}
              />
            </div>
          </div>
        </Field>

        <Checkbox
          id="whatsapp-same"
          checked={draft.whatsappSame}
          onChange={(v) => patch({ whatsappSame: v })}
          label="This number is on WhatsApp"
        />

        <div className="border-t border-line pt-5">
          <Field label="Home address" htmlFor="address" error={errors.addressLine}>
            <Input
              id="address"
              value={draft.addressLine}
              onChange={(e) => patch({ addressLine: e.target.value })}
              placeholder="House / flat, building, street"
              autoComplete="street-address"
              leadingIcon={<MapPin className="h-4 w-4" />}
              invalid={Boolean(errors.addressLine)}
            />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Area / locality" htmlFor="area" error={errors.area}>
            <Input
              id="area"
              value={draft.area}
              onChange={(e) => patch({ area: e.target.value })}
              placeholder="Area or landmark"
              autoComplete="address-level2"
              invalid={Boolean(errors.area)}
            />
          </Field>

          <Field label="Pincode" htmlFor="pincode" error={errors.pincode}>
            <Input
              id="pincode"
              inputMode="numeric"
              maxLength={6}
              value={draft.pincode}
              onChange={(e) => {
                patch({ pincode: e.target.value.replace(/\D/g, "").slice(0, 6) });
                setOutOfArea(false);
              }}
              onBlur={() =>
                setOutOfArea(
                  draft.pincode.length === 6 && !isServiceablePincode(draft.pincode),
                )
              }
              placeholder="452001"
              autoComplete="postal-code"
              invalid={Boolean(errors.pincode)}
            />
          </Field>
        </div>

        <AnimatePresence>
          {outOfArea && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={spring.gentle}
              className="rounded-2xl bg-primary-soft px-4 py-3 text-sm leading-relaxed text-primary-ink"
            >
              We're not in your area just yet — but leave your details and we'll reach out the moment we arrive.
            </motion.p>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-2 rounded-2xl bg-muted/60 px-4 py-3 text-sm text-ink-soft">
          <Lock className="h-4 w-4 shrink-0 text-primary" aria-hidden />
          Your details are kept private and used only to arrange care.
        </div>

        <Checkbox
          id="save-contact"
          checked={draft.saveContact}
          onChange={(v) => patch({ saveContact: v })}
          label="Save these details for next time"
        />
      </div>
    </div>
  );
}
