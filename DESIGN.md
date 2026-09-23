# Sukoon — Design System

The single source of truth for how Sukoon looks, moves, and feels. **Read this
before adding or changing any UI.**

The vibe is **warm, playful, and calming** — inspired by Headspace. Bright sunny
colours, big rounded friendly type, cute characters with simple happy faces,
soft pill buttons, and generous rounded cards. It should feel like a gentle,
cheerful friend — reassuring, never clinical, never "AI slop," never loud-in-a-
stressful-way.

Sukoon is **mobile-first** — ~90% of users are on phones. Design and test at
360–390px width first; treat web as a nice-to-have that scales up.

---

## 1. Look & feel

- **Warm cream canvas** with **orange & yellow blocks**: full-width sections in
  sunny orange, yellow, cream and white — each block rounded and friendly.
- **Cute characters**: rounded blobs and a smiling nurse with a simple black
  line face (closed happy eyes, gentle smile), rosy cheeks, clouds and floating
  buddy-blobs. Flat, bold, hand-drawn-friendly.
- **Everything is rounded**: pill buttons (`rounded-full`), big cards
  (`rounded-3xl` / `rounded-[2rem]`), curved section bottoms.
- Calm > clever. Soft > sharp. Warm > cold.

## 2. Colour board — Orange + Yellow + White ONLY

Two brand colours over warm neutrals. **No blue, green or purple — anywhere.**
All colours are tokens in `tailwind.config.js`; **never hardcode a hex in a
component** — use a token. Re-theming happens only in the config.

**Neutrals (the "white" family, warmed):**

| Token | Hex | Use |
|---|---|---|
| `canvas` | `#FFF6E9` | Warm cream page background |
| `surface` / `surface-2` | `#FFFFFF` / `#FFFBF3` | White cards / warm panels |
| `muted` | `#FBEEDC` | Unselected chips, input fills, tracks |
| `line` / `line-strong` | `#F0E6D4` / `#E7D8C0` | Warm hairline borders |
| `ink` / `ink-soft` / `ink-faint` | `#2A2622` / `#6B6157` / `#9C9080` | Text: primary / secondary / captions |

**`primary` — ORANGE** (main actions, active, selected, calendar, highlights):

| Shade | Hex | Use |
|---|---|---|
| `primary` | `#FB7A2E` | Solid fills: buttons, selected day, active |
| `primary.foreground` | `#3A1B08` | **Dark** text/icon ON the bright orange fill |
| `primary.hover` / `.deep` | `#F06A1C` / `#E2560F` | Hover / gradient-end / emphasis |
| `primary.soft` / `.ink` | `#FFE6D2` / `#B24E14` | Light-orange fill + dark-orange text (chips, notes) |

**`secondary` — YELLOW** (sunny highlights, positive/pay-after, badges, "most popular"):

| Shade | Hex | Use |
|---|---|---|
| `secondary` | `#FFC24B` | Solid yellow fills (featured icon, "sunny" confirm button) |
| `secondary.foreground` | `#2A2010` | **Dark** text/icon ON the yellow fill |
| `secondary.hover` / `.deep` | `#F5A623` / `#F59E0B` | Hover / deeper amber (stars, big numbers) |
| `secondary.soft` / `.ink` | `#FFF2CE` / `#8A5A0B` | Pale-yellow fill + dark-amber text |

`destructive` `#E23D2E` is **functional only** (form errors) — the one warm red.

**Rules:**
- **Text/icons on bright fills are DARK** — always the `-foreground` token, never
  `text-white`. (White reads poorly on both bright orange and yellow.)
- Exceptions where white text IS used: the **hero orange block** headline and the
  **final-CTA orange block** — large display text, a deliberate brand choice.
- On light `*.soft` fills, use the matching `.ink` (darker) token.
- Colour is **never** the only signal — pair with an icon/check/weight/text.
- Two-tone rhythm: alternate `primary` (orange) and `secondary` (yellow) across
  repeated cards (see `PLAY` in `Landing.tsx`). Actions lean orange; positive /
  highlight moments lean yellow.

## 3. Typography

- **Display / headings:** `font-display` → **Fredoka** (rounded, chunky,
  friendly). Big and warm. Headlines may be **lowercase** for a playful feel
  (e.g. "someone kind, at your door").
- **Body / UI:** `font-sans` → **Nunito** (rounded, readable). Base 16px; never
  below 16px on inputs (prevents iOS zoom). Semibold/bold for buttons & labels.
- Numbers (prices, dates, phone, refs) → `tabular-nums`.
- One `<h1>` per screen. `text-balance` on headings, `text-pretty` on paragraphs.

## 4. Space, radius, shadow

- **Spacing rhythm:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64. Generous whitespace.
- **Radii:** buttons/chips are pills; cards `rounded-2xl`/`rounded-3xl`; big
  feature blocks `rounded-[2rem]`+ with a curved bottom on the hero.
- **Depth is soft & warm:** `shadow-soft` / `shadow-card` for cards,
  `shadow-lift` / `shadow-glow` (both warm orange) for primary CTAs & featured cards.
  `.card-hairline` = the standard card. `.glass` = light frosted (sticky bars).

## 5. Motion (Framer Motion)

Tokens in `src/lib/motion.ts`. Animate **transform + opacity only**; honour
`prefers-reduced-motion` (freeze ambient loops, skip slides).

- Durations 180–450ms; gentle springs (`spring.gentle/soft/reassure`).
- Entrances: fade + rise, staggered (`fadeUp`, `stagger`, `Reveal`).
- Wizard steps: directional slide+fade via `stepVariants` in
  `AnimatePresence mode="wait"`.
- **Never** put a `layoutId` shared-layout animation inside a component that
  unmounts during an `AnimatePresence` exit — it stalls the transition (use a
  transform-based highlight; see the gender `SegmentedControl`).
- Characters float gently (5–6s), clouds drift; all freeze under reduced motion.
- No fake urgency, no confetti, no animating width/height/top/left.

## 6. Signature elements

- **`GradientBackground`** (`components/ui/gradient-background.tsx`): the fixed
  cream canvas with soft out-of-focus colour blobs. Non-interactive; colourful
  sections sit on top.
- **`PlayfulNurse`** (`components/hero/PlayfulNurse.tsx`): the brand mascot — a
  cheerful nurse (cap + orange cross, white scrubs, stethoscope) with a simple black
  line face, rosy cheeks, floating buddy-blobs and clouds. Bespoke SVG + Framer
  Motion, no external asset. Keep her warm and kind.
- SVG rule: every filled shape sets `fill`; every stroke-only shape sets
  `fill="none"` (an unset fill defaults to black). Facial features use near-black
  strokes (`#2A2A2E`), rounded caps.

## 7. Components & patterns

- Reuse primitives in `components/ui/` (`Button`, `Field`/`Input`/`Textarea`,
  `Chip`/`OptionCard`, `Checkbox`, `Badge`). Don't hand-roll form controls.
- **Buttons** are pills. `primary` = orange (main action); `sunny` = yellow
  (a distinct "go" / confirm); `secondary` = white pill (great on coloured
  blocks); `ghost`/`link` = tertiary. Min height 44px. Text on orange/yellow is
  dark (`-foreground`), never white.
- **Icons:** lucide-react only, sized by token; no emoji as UI icons.
- **Forms:** every input has a visible `<label>` (`Field`); persistent helper
  text; validate on blur/submit, never mid-keystroke; errors next to the field;
  focus the first invalid field.

## 8. Voice (copy)

Calm, capable, warm — like a cheerful friend on a hard day. Lead with
reassurance, then facts. Dignify everyone ("your mother," "caregiver" — never
"patient/staff/burden"). No hype ("seamless," "elevate," "unlock"), no exclamation
stacks, no emoji clutter. Playful lowercase is welcome in big headlines. Money
always sits next to the pay-after promise.

## 9. Hard rules (never break)

1. **No payment / card / CVV / checkout field anywhere.** Pay-after is the whole
   promise; a card field breaks trust.
2. Warm & bright — no dark page background. Never white text on yellow.
3. Mobile-first: no horizontal scroll, `min-h-dvh` (not `100vh`), 44px targets,
   respect safe areas, content never hidden behind sticky bars.
4. Prices are integer **paise**, rendered only via `formatPrice()`.
5. Colour is never the sole indicator; reduced motion is always supported.
6. No fake urgency, countdowns, or false price precision (estimates are labelled).

---

*When in doubt: warm over cold, rounded over sharp, cheerful over clinical,
honest over hype — and always test it on a phone first.*
