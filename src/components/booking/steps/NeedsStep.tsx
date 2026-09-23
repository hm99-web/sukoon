import { AnimatePresence, motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";

import { StepIntro } from "@/components/booking/ProgressHeader";
import { Field, Textarea } from "@/components/ui/field";
import { Chip } from "@/components/ui/selectable";
import { careTasks } from "@/data/tasks";
import { fadeUp, spring, stagger } from "@/lib/motion";
import { useBooking } from "@/hooks/useBooking";

const NOTE_LIMIT = 300;

export function NeedsStep() {
  const { draft, patch, toggleTask } = useBooking();

  const tenderSelected = draft.tasks.some((id) =>
    careTasks.find((t) => t.id === id)?.tender,
  );

  return (
    <div>
      <StepIntro
        title="Tell us what would help"
        subtitle="A few words about what's going on and what you need — as much or as little as you like."
        helper='Everything here is optional. Even just "help bathing and meals" gives us a head start on matching the right person.'
      />

      <motion.div
        variants={stagger(0.035)}
        initial="hidden"
        animate="show"
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="What would help"
      >
        {careTasks.map((task) => {
          const Icon = task.icon;
          const selected = draft.tasks.includes(task.id);
          return (
            <motion.div key={task.id} variants={fadeUp}>
              <Chip
                selected={selected}
                onToggle={() => toggleTask(task.id)}
                icon={<Icon className="h-3.5 w-3.5" />}
              >
                {task.label}
              </Chip>
            </motion.div>
          );
        })}
      </motion.div>

      <AnimatePresence>
        {tenderSelected && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={spring.gentle}
            className="mt-4 flex items-start gap-2 rounded-2xl bg-secondary-soft px-4 py-3 text-sm leading-relaxed text-secondary-ink"
          >
            <HeartHandshake className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            Our caregivers are experienced with recovery and elderly support — you're in gentle hands.
          </motion.p>
        )}
      </AnimatePresence>

      <div className="mt-6">
        <Field
          label="Anything we should know?"
          htmlFor="care-notes"
          optional
          hint="This helps us match the right person. You can also tell us on the call."
        >
          <Textarea
            id="care-notes"
            value={draft.notes}
            maxLength={NOTE_LIMIT}
            onChange={(e) => patch({ notes: e.target.value })}
            placeholder="e.g. Mummy had a knee surgery last week and needs help walking to the washroom."
            autoComplete="off"
          />
          <div className="mt-1 text-right text-xs tabular-nums text-ink-faint">
            {draft.notes.length}/{NOTE_LIMIT}
          </div>
        </Field>
      </div>

      {draft.tasks.length === 0 && draft.notes.trim() === "" && (
        <p className="mt-2 text-center text-sm text-ink-soft">
          No details? No problem — we'll ask on the call.
        </p>
      )}
    </div>
  );
}
