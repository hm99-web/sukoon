/** @type {import('tailwindcss').Config} */
import animate from "tailwindcss-animate";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      spacing: {
        "5.5": "1.375rem",
        13: "3.25rem",
        15: "3.75rem",
        18: "4.5rem",
      },
      // ── COLOUR BOARD ──────────────────────────────────────────────
      // Orange + Yellow + White only. Two brand colours (primary, secondary)
      // over warm neutrals. Nothing else. Text/icons on bright fills are DARK
      // (their `-foreground`) so everything stays readable.
      colors: {
        // Neutrals & surfaces (the "white" family, warmed)
        canvas: "#FFF6E9", // warm cream page background
        surface: "#FFFFFF", // white cards
        "surface-2": "#FFFBF3", // warm white panel
        ink: "#2A2622", // warm charcoal text
        "ink-soft": "#6B6157", // muted text
        "ink-faint": "#9C9080", // faint / captions
        line: "#F0E6D4", // warm hairline border
        "line-strong": "#E7D8C0",
        muted: "#FBEEDC", // warm muted fill (unselected chips, fields)

        // PRIMARY — orange (main actions, active, selected, highlights)
        primary: {
          DEFAULT: "#FB7A2E",
          hover: "#F06A1C",
          deep: "#E2560F", // gradients / emphasis
          soft: "#FFE6D2", // light orange fill (selected/active)
          ink: "#B24E14", // dark-orange text/icon on soft or cream
          foreground: "#3A1B08", // dark text/icon on the bright orange fill
        },
        // SECONDARY — yellow (sunny blocks, secondary highlights, badges)
        secondary: {
          DEFAULT: "#FFC24B",
          hover: "#F5A623",
          deep: "#F59E0B",
          soft: "#FFF2CE", // pale yellow fill
          ink: "#8A5A0B", // dark-amber text/icon on soft or cream
          foreground: "#2A2010", // dark text/icon on the yellow fill
        },
        // Functional error only (warm-leaning red)
        destructive: {
          DEFAULT: "#E23D2E",
          soft: "#FCE7E2",
          foreground: "#FFFFFF",
        },
      },
      fontFamily: {
        display: ['"Fredoka Variable"', "Fredoka", "system-ui", "sans-serif"],
        sans: ['"Nunito Variable"', "Nunito", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
      boxShadow: {
        // Playful, warm, soft — gentle depth for cards/pills
        soft: "0 1px 2px rgba(84,60,20,0.05), 0 6px 16px -8px rgba(84,60,20,0.12)",
        card: "0 2px 6px rgba(84,60,20,0.06), 0 16px 34px -16px rgba(84,60,20,0.18)",
        lift: "0 8px 20px -6px rgba(251,122,46,0.28), 0 20px 44px -22px rgba(84,60,20,0.20)",
        glow: "0 10px 26px -6px rgba(251,122,46,0.36)",
        "inner-soft": "inset 0 1px 2px rgba(84,60,20,0.06)",
        focus: "0 0 0 4px rgba(251,122,46,0.24)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.9" },
          "50%": { transform: "scale(1.04)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-12px) translateX(4px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both",
        breathe: "breathe 5s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
      },
      transitionTimingFunction: {
        gentle: "cubic-bezier(0.22, 1, 0.36, 1)",
        "soft-spring": "cubic-bezier(0.34, 1.4, 0.64, 1)",
      },
    },
  },
  plugins: [animate],
};
