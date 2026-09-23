import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface AnimatedGradientBackgroundProps {
  /** Initial size of the radial gradient (starting width %). */
  startingGap?: number;
  /** Enables the slow breathing animation. */
  Breathing?: boolean;
  /** Colors used in the radial gradient (calm, low-saturation by default). */
  gradientColors?: string[];
  /** Percentage stops for each color (0-100). */
  gradientStops?: number[];
  /** Breathing speed — lower is slower. */
  animationSpeed?: number;
  /** Max breathing expansion in percentage points. */
  breathingRange?: number;
  containerStyle?: React.CSSProperties;
  containerClassName?: string;
  topOffset?: number;
}

/**
 * AnimatedGradientBackground — a soft, breathing radial gradient.
 * Adapted from a 21st.dev component to Sukoon's calm, light-first palette
 * (pale cyan mint → healing mint → warm peach → faint lavender).
 */
const AnimatedGradientBackground: React.FC<AnimatedGradientBackgroundProps> = ({
  startingGap = 128,
  Breathing = true,
  // Warm cream centre glowing out to sunny yellow + orange.
  gradientColors = [
    "#FFF6E9",
    "#FFF6E9",
    "#FFE9C9",
    "#FFD27A",
    "#FFB020",
    "#FB7A2E",
    "#E2560F",
  ],
  gradientStops = [0, 30, 48, 64, 78, 90, 100],
  animationSpeed = 0.015,
  breathingRange = 6,
  containerStyle = {},
  topOffset = 0,
  containerClassName = "",
}) => {
  if (gradientColors.length !== gradientStops.length) {
    throw new Error(
      `gradientColors and gradientStops must have the same length. Received ${gradientColors.length} colors and ${gradientStops.length} stops.`,
    );
  }

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationFrame: number;
    let width = startingGap;
    let directionWidth = 1;

    const animateGradient = () => {
      if (width >= startingGap + breathingRange) directionWidth = -1;
      if (width <= startingGap - breathingRange) directionWidth = 1;
      if (!Breathing || reduce) directionWidth = 0;
      width += directionWidth * animationSpeed;

      const gradientStopsString = gradientStops
        .map((stop, index) => `${gradientColors[index]} ${stop}%`)
        .join(", ");

      const gradient = `radial-gradient(${width}% ${width + topOffset}% at 50% 18%, ${gradientStopsString})`;
      if (containerRef.current) containerRef.current.style.background = gradient;

      if (directionWidth !== 0) animationFrame = requestAnimationFrame(animateGradient);
    };

    animationFrame = requestAnimationFrame(animateGradient);
    return () => cancelAnimationFrame(animationFrame);
  }, [
    startingGap,
    Breathing,
    gradientColors,
    gradientStops,
    animationSpeed,
    breathingRange,
    topOffset,
  ]);

  return (
    <motion.div
      key="animated-gradient-background"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1] },
      }}
      className={`absolute inset-0 overflow-hidden ${containerClassName}`}
    >
      <div ref={containerRef} style={containerStyle} className="absolute inset-0" />
    </motion.div>
  );
};

export default AnimatedGradientBackground;
