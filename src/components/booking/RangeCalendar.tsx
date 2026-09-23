import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isAfter,
  isBefore,
  isSameDay,
  isSameMonth,
  isToday,
  startOfDay,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";

interface RangeCalendarProps {
  start: Date | null;
  end: Date | null;
  onSelect: (start: Date | null, end: Date | null) => void;
}

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

export function RangeCalendar({ start, end, onSelect }: RangeCalendarProps) {
  const reduce = useReducedMotion();
  const today = useMemo(() => startOfDay(new Date()), []);
  const [month, setMonth] = useState<Date>(startOfMonth(start ?? today));

  const days = useMemo(() => {
    const gridStart = startOfWeek(startOfMonth(month), { weekStartsOn: 0 });
    const gridEnd = endOfWeek(endOfMonth(month), { weekStartsOn: 0 });
    return eachDayOfInterval({ start: gridStart, end: gridEnd });
  }, [month]);

  const canGoPrev = isAfter(startOfMonth(month), startOfMonth(today));

  function handleClick(day: Date) {
    if (isBefore(day, today)) return; // past — inert
    // Begin a fresh range if nothing pending or a full range already exists.
    if (!start || (start && end)) {
      onSelect(day, null);
      return;
    }
    // start set, choosing the end
    if (isBefore(day, start)) {
      onSelect(day, null); // re-anchor earlier
    } else {
      onSelect(start, day); // same day => 1 day; later => range
    }
  }

  const inRange = (day: Date) =>
    start && end && !isBefore(day, start) && !isAfter(day, end);

  return (
    <div className="select-none">
      {/* Month nav */}
      <div className="mb-3 flex items-center justify-between">
        <button
          type="button"
          onClick={() => canGoPrev && setMonth(addMonths(month, -1))}
          disabled={!canGoPrev}
          aria-label="Previous month"
          className="grid h-10 w-10 place-items-center rounded-full text-ink-soft transition-colors hover:bg-muted disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={format(month, "yyyy-MM")}
            initial={reduce ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
            className="font-display text-lg font-semibold text-ink"
            aria-live="polite"
          >
            {format(month, "MMMM yyyy")}
          </motion.div>
        </AnimatePresence>
        <button
          type="button"
          onClick={() => setMonth(addMonths(month, 1))}
          aria-label="Next month"
          className="grid h-10 w-10 place-items-center rounded-full text-ink-soft transition-colors hover:bg-muted"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Weekday header */}
      <div className="mb-1 grid grid-cols-7">
        {WEEKDAYS.map((d, i) => (
          <div key={i} className="py-1 text-center text-xs font-semibold text-ink-faint">
            {d}
          </div>
        ))}
      </div>

      {/* Day grid */}
      <div className="grid grid-cols-7">
        {days.map((day) => {
          const isPast = isBefore(day, today);
          const outside = !isSameMonth(day, month);
          const isStart = start && isSameDay(day, start);
          const isEnd = end && isSameDay(day, end);
          const isEndpoint = isStart || isEnd;
          const within = inRange(day) && !isEndpoint;
          const single = isStart && isEnd;
          const dow = day.getDay();

          return (
            <div key={day.toISOString()} className="relative py-0.5">
              {/* Connecting range band. Endpoints only span half the cell
                  (from the circle's center inward) so the band never spills
                  past the first or last selected day. */}
              {inRange(day) && !single && (
                <div
                  aria-hidden
                  className={cn(
                    "absolute inset-y-0.5 bg-primary-soft",
                    isStart ? "left-1/2" : "left-0",
                    isEnd ? "right-1/2" : "right-0",
                    // round only the band's outer, visible terminations
                    dow === 0 && !isStart && "rounded-l-full",
                    dow === 6 && !isEnd && "rounded-r-full",
                  )}
                />
              )}
              <button
                type="button"
                onClick={() => handleClick(day)}
                disabled={isPast}
                aria-label={format(day, "EEEE, d MMMM yyyy")}
                aria-pressed={isEndpoint || within || false}
                aria-disabled={isPast || undefined}
                className={cn(
                  "relative mx-auto grid h-10 w-10 place-items-center rounded-full text-sm font-semibold transition-colors",
                  isPast && "cursor-not-allowed text-ink-faint/40",
                  outside && !isPast && "text-ink-faint/60",
                  !isPast && !outside && !isEndpoint && !within && "text-ink hover:bg-muted",
                  within && "text-primary-ink",
                  isEndpoint && "bg-primary text-primary-foreground shadow-soft",
                  !isPast && isToday(day) && !isEndpoint && "ring-2 ring-secondary",
                )}
              >
                {format(day, "d")}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
