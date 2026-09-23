import { motion } from "framer-motion";

import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** Fade-up on scroll into view, once. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay } },
      }}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Staggered container revealing children in view. */
export function RevealGroup({
  children,
  className,
  stagger: s = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      variants={stagger(s)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  className,
}: {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("mx-auto max-w-2xl text-center", className)}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance font-display text-[1.75rem] font-semibold leading-tight text-ink sm:text-[2.25rem]">
        {heading}
      </h2>
      {subheading && (
        <p className="mx-auto mt-3 max-w-xl text-pretty text-[1.05rem] leading-relaxed text-ink-soft">
          {subheading}
        </p>
      )}
    </Reveal>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("px-5 py-14 sm:py-20", className)}>
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}
