import { motion } from "framer-motion";

import { StepIntro } from "@/components/booking/ProgressHeader";
import { Field, Input } from "@/components/ui/field";
import { Chip, OptionCard } from "@/components/ui/selectable";
import {
  ageBands,
  genderOptions,
  languages,
  recipientOptions,
  type Gender,
} from "@/data/preferences";
import { spring } from "@/lib/motion";
import { useBooking } from "@/hooks/useBooking";
import { cn } from "@/lib/utils";

function SegmentedControl({
  value,
  onChange,
}: {
  value: Gender;
  onChange: (g: Gender) => void;
}) {
  const index = Math.max(0, genderOptions.findIndex((o) => o.value === value));
  return (
    <div
      className="relative grid grid-cols-3 rounded-2xl bg-muted p-1"
      role="radiogroup"
      aria-label="Preferred caregiver gender"
    >
      {/* Transform-based sliding highlight (no layoutId, so it can't stall an
          AnimatePresence exit when this step unmounts). */}
      <motion.span
        aria-hidden
        className="absolute inset-y-1 left-1 w-[calc((100%-0.5rem)/3)] rounded-xl bg-primary shadow-soft"
        animate={{ x: `${index * 100}%` }}
        transition={spring.gentle}
      />
      {genderOptions.map((opt) => {
        const active = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(opt.value)}
            className={cn(
              "relative z-10 min-h-11 rounded-xl px-3 text-sm font-semibold transition-colors",
              active ? "text-primary-foreground" : "text-ink-soft hover:text-ink",
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

export function PreferencesStep() {
  const { draft, patch, toggleLanguage } = useBooking();

  const specificChoice =
    draft.gender !== "any" ||
    (draft.languages.length > 0 && !draft.languages.includes("Any language is fine"));

  return (
    <div>
      <StepIntro
        title="Who would you feel most at ease with?"
        subtitle="Choose a preferred gender and language for your caregiver."
        helper="Comfort matters, especially with personal care. We'll do our best to match your choice — and if we can't, we'll always call before assigning anyone."
      />

      <div className="space-y-6">
        <Field label="Preferred gender">
          <SegmentedControl
            value={draft.gender}
            onChange={(g) => patch({ gender: g })}
          />
        </Field>

        <Field
          label="Preferred language"
          hint="Pick any that work — we'll match a caregiver you can talk to comfortably."
        >
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <Chip
                key={lang}
                selected={draft.languages.includes(lang)}
                onToggle={() => toggleLanguage(lang)}
              >
                {lang}
              </Chip>
            ))}
          </div>
        </Field>

        <Field label="Who is the care for?" optional>
          <div className="grid gap-2 sm:grid-cols-2">
            {recipientOptions.map((opt) => (
              <OptionCard
                key={opt.value}
                selected={draft.recipient === opt.value}
                onSelect={() =>
                  patch({
                    recipient: draft.recipient === opt.value ? null : opt.value,
                  })
                }
                title={opt.label}
              />
            ))}
          </div>
        </Field>

        {draft.recipient === "other" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={spring.gentle}
            className="overflow-hidden"
          >
            <Field label="Your relationship to them" htmlFor="relationship" optional>
              <Input
                id="relationship"
                value={draft.relationship}
                onChange={(e) => patch({ relationship: e.target.value })}
                placeholder="e.g. neighbour, friend, in-law"
                autoComplete="off"
              />
            </Field>
          </motion.div>
        )}

        <Field label="Their age (helps us match)" optional>
          <div className="flex flex-wrap gap-2">
            {ageBands.map((band) => (
              <Chip
                key={band}
                selected={draft.ageBand === band}
                onToggle={() =>
                  patch({ ageBand: draft.ageBand === band ? null : band })
                }
              >
                {band}
              </Chip>
            ))}
          </div>
        </Field>
      </div>

      {specificChoice && (
        <p className="mt-5 rounded-2xl bg-primary-soft/60 px-4 py-3 text-sm leading-relaxed text-primary-ink">
          We'll do our best to match your preference — and confirm on the call before anyone is assigned.
        </p>
      )}
    </div>
  );
}
