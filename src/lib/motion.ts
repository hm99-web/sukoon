import type { Transition, Variants } from "framer-motion";

/**
 * Motion tokens (from the design spec). Everything animates transform/opacity
 * only. The whole product breathes in the same slow, soft key.
 */
export const easing = {
  calmOut: [0.22, 1, 0.36, 1] as const,
  softEntrance: [0.16, 1, 0.3, 1] as const,
  breatheSine: [0.37, 0, 0.63, 1] as const,
  gentle: [0.4, 0, 0.2, 1] as const,
};

export const spring = {
  gentle: { type: "spring", stiffness: 170, damping: 22, mass: 1 } as Transition,
  soft: { type: "spring", stiffness: 120, damping: 20, mass: 1 } as Transition,
  press: { type: "spring", stiffness: 400, damping: 28, mass: 0.6 } as Transition,
  chip: { type: "spring", stiffness: 320, damping: 24, mass: 0.7 } as Transition,
  reassure: { type: "spring", stiffness: 90, damping: 18, mass: 1.1 } as Transition,
  successPop: { type: "spring", stiffness: 260, damping: 16, mass: 0.9 } as Transition,
};

/** Fade + rise, the workhorse entrance. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easing.calmOut },
  },
};

/** Stagger container for sections revealing in view. */
export const stagger = (staggerChildren = 0.06, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});

/** Directional wizard step transition (forward = enter from right). */
export function stepVariants(direction: 1 | -1): Variants {
  return {
    enter: { opacity: 0, x: direction * 28 },
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.32, ease: easing.calmOut },
    },
    exit: {
      opacity: 0,
      x: direction * -20,
      transition: { duration: 0.2, ease: easing.gentle },
    },
  };
}

export const viewportOnce = { once: true, amount: 0.25 } as const;
