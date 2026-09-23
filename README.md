# Sukoon

**Care that feels like family, on the days you need it most.**

A professional, mobile-first web app to book a warm, at-home caregiver — for
elderly, post-surgery, and everyday care. A person picks the days they need
care, tells us what would help, chooses a preferred gender and language, sees an
honest price, and confirms. **No payment at booking — you pay only after the
care is done.** A human calls back to confirm and personally assign a caregiver.

> Caregivers here are warm, dependable helpers (non-clinical) — not registered
> nurses. Registered nurses may be offered later.

## Stack

Vite · React 18 · TypeScript · Tailwind CSS · Framer Motion · lucide-react.
Self-hosted fonts (Lora + Raleway via `@fontsource`). No backend yet — booking
submission is a mocked async call, and the draft autosaves to `localStorage`.

**Warm, playful theme** (Headspace-inspired) — a cream canvas with sunny colour
blocks (**orange `#FB7A2E` + yellow `#FFC24B`** on warm cream — no other hues), big rounded
**Fredoka + Nunito** type, and a cheerful animated **nurse** character. The full
design system (tokens, motion, rules) lives in [`DESIGN.md`](./DESIGN.md) —
**read it before changing any UI.**

## Commands

```bash
npm install
npm run dev        # http://localhost:5178
npm run build      # typecheck + production build → dist/
npm run preview    # serve the built app
npm run typecheck  # tsc, no emit
```

## Architecture

- **`src/App.tsx`** — top-level `landing` ⇄ `booking` view switch (no router;
  `AnimatePresence` crossfade). Browser Back closes the booking flow.
- **`src/hooks/useBooking.tsx`** — the booking draft (reducer + context),
  autosaved to `localStorage` and restored on load; optional saved-contact reuse.
- **`src/components/booking/BookingFlow.tsx`** — the 5-step wizard orchestrator:
  per-step validation, directional transitions, mock submit → confirmation.
  Steps: **Dates & shift → Needs → Preferences → Contact → Review**.
- **`src/components/landing/`** — hero (with the bespoke `CareScene` SVG
  animation), how-it-works, what-we-help-with, why-trust, pricing, caregivers,
  FAQ, final CTA.
- **`src/lib/` / `src/data/`** — brand config, pricing engine, formatters,
  motion tokens, and all copy/pricing/task/language data.

### Money

Prices are integer **paise** (e.g. `149900` = ₹1,499). Only ever rendered via
`formatPrice(paise)` in `src/lib/formatters.ts`. Estimate = shift/day × days −
long-stay discount; the final amount is always confirmed on the call.

## Things to wire up next

- Real booking submit — replace the mocked call in `BookingFlow.handleContinue`
  with a POST; keep the pay-after promise (never collect payment at booking).
- Real support numbers, cities, and serviceable pincodes in `src/lib/brand.ts`.
- Tune pricing tiers/add-ons in `src/data/pricing.ts`.
- Renaming the brand: everything flows from `src/lib/brand.ts`.
