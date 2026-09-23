import { useEffect, useRef, useState } from "react";

/**
 * Animate a number from 0 to `target` over `duration` ms with a calm ease-out.
 * Respects prefers-reduced-motion (jumps straight to the value).
 */
export function useCountUp(target: number, duration = 900): number {
  const [value, setValue] = useState(target);
  const frame = useRef<number>();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(target);
      return;
    }
    let startTs: number | null = null;
    const from = 0;

    const tick = (ts: number) => {
      if (startTs === null) startTs = ts;
      const t = Math.min((ts - startTs) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setValue(Math.round(from + (target - from) * eased));
      if (t < 1) frame.current = requestAnimationFrame(tick);
    };

    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [target, duration]);

  return value;
}
