import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowRight, Quote, ShieldCheck, Star } from "lucide-react";
import { useState } from "react";

import { BookButton } from "@/components/landing/BookButton";
import { Logo, LogoMark } from "@/components/brand/Logo";
import { Faq } from "@/components/landing/Faq";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import {
  Reveal,
  RevealGroup,
  RevealItem,
  Section,
  SectionHeading,
} from "@/components/landing/reveal";
import { Badge } from "@/components/ui/badge";
import { brand } from "@/lib/brand";
import { caregivers, howItWorks, whoCaregiversNote, whyTrust } from "@/data/content";
import { payAfterPromise, shiftTiers } from "@/data/pricing";
import { careTasks } from "@/data/tasks";
import { formatCount, formatPrice } from "@/lib/formatters";
import { cn } from "@/lib/utils";

// Two-tone rotation — orange + yellow — for repeated cards.
const PLAY = [
  { chip: "bg-primary-soft text-primary-ink", num: "text-primary/15" },
  { chip: "bg-secondary-soft text-secondary-ink", num: "text-secondary-deep/25" },
];

function HowItWorks() {
  return (
    <Section id="how">
      <SectionHeading
        eyebrow="Four calm steps"
        heading="How Sukoon works"
        subheading="No forms to dread, no card at checkout. Just tell us what you need — we take it from there."
      />
      <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {howItWorks.map((step, i) => {
          const Icon = step.icon;
          const play = PLAY[i % PLAY.length];
          return (
            <RevealItem key={step.title}>
              <div className="relative h-full rounded-3xl border border-line bg-surface p-6 shadow-soft">
                <span className={cn("absolute right-5 top-3 font-display text-5xl font-bold", play.num)}>
                  {i + 1}
                </span>
                <span className={cn("grid h-14 w-14 place-items-center rounded-2xl", play.chip)}>
                  <Icon className="h-7 w-7" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{step.body}</p>
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}

function WhatWeHelpWith({ onBook }: { onBook: () => void }) {
  return (
    <Section id="help">
      <SectionHeading
        eyebrow="Practical hands, kind presence"
        heading="What your caregiver can help with"
        subheading="The everyday things that get hard when you're unwell — done gently, without being asked twice."
      />
      <RevealGroup className="mt-10 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4" stagger={0.03}>
        {careTasks.map((task, i) => {
          const Icon = task.icon;
          const play = PLAY[i % PLAY.length];
          return (
            <RevealItem key={task.id}>
              <div className="flex h-full items-center gap-3 rounded-2xl border border-line bg-surface p-3.5 transition-shadow hover:shadow-soft">
                <span className={cn("grid h-10 w-10 shrink-0 place-items-center rounded-xl", play.chip)}>
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="text-sm font-bold leading-tight text-ink">{task.label}</span>
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>
      <Reveal className="mt-8 text-center">
        <BookButton size="lg" onBook={onBook}>
          Book care <ArrowRight className="h-4 w-4" aria-hidden />
        </BookButton>
      </Reveal>
    </Section>
  );
}

function WhyTrust() {
  return (
    <Section>
      <div className="rounded-[2.25rem] border border-secondary/25 bg-secondary-soft/50 p-6 shadow-card sm:p-10">
        <SectionHeading
          eyebrow="Trust, earned honestly"
          heading="Why families trust Sukoon"
          subheading="We treat your home and your loved ones the way we'd treat our own."
        />
        <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2">
          {whyTrust.map((point) => {
            const Icon = point.icon;
            return (
              <RevealItem key={point.title}>
                <div className="flex h-full gap-4 rounded-2xl bg-surface p-5 shadow-soft">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                    <Icon className="h-5.5 w-5.5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{point.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{point.body}</p>
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
        <Reveal className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-line pt-6 text-center">
          <Stat value={`${formatCount(brand.familiesServed)}+`} label="families cared for" />
          <Stat value="4.9" label="average rating" icon />
          <Stat value={`${brand.cities.length} cities`} label="and growing" />
        </Reveal>
      </div>
    </Section>
  );
}

function Stat({ value, label, icon }: { value: string; label: string; icon?: boolean }) {
  return (
    <div>
      <p className="flex items-center justify-center gap-1 font-display text-2xl font-semibold text-ink">
        {icon && <Star className="h-5 w-5 fill-secondary text-secondary-deep" aria-hidden />}
        {value}
      </p>
      <p className="text-sm text-ink-soft">{label}</p>
    </div>
  );
}

function Pricing({ onBook }: { onBook: () => void }) {
  return (
    <Section id="pricing">
      <SectionHeading
        eyebrow="Simple, honest pricing"
        heading="You see the price before you confirm"
        subheading="And you pay only after we assign a nurse you approve. No card, no deposit, no surprises."
      />
      <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
        {shiftTiers.map((tier) => {
          const Icon = tier.icon;
          const featured = Boolean(tier.badge);
          return (
            <RevealItem key={tier.key}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-3xl border p-5 transition-shadow",
                  featured
                    ? "border-secondary/50 bg-secondary-soft shadow-lift ring-2 ring-secondary/40"
                    : "border-line bg-surface shadow-soft",
                )}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "grid h-11 w-11 place-items-center rounded-xl",
                      featured ? "bg-secondary text-secondary-foreground" : "bg-primary-soft text-primary-ink",
                    )}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  {tier.badge && <Badge variant="primary">{tier.badge}</Badge>}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{tier.label}</h3>
                <p className="text-sm text-ink-faint">{tier.hours} each day</p>
                <p className="mt-3">
                  <span className="font-display text-3xl font-semibold tabular-nums text-ink">
                    {formatPrice(tier.pricePaise)}
                  </span>
                  <span className="text-sm text-ink-soft"> / day</span>
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{tier.note}</p>
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>
      <Reveal className="mx-auto mt-8 flex max-w-xl flex-col items-center gap-4 text-center">
        <p className="flex items-center gap-2 rounded-full bg-secondary-soft px-4 py-2 text-sm font-semibold text-secondary-ink">
          <ShieldCheck className="h-4 w-4" aria-hidden /> {payAfterPromise}
        </p>
        <BookButton size="lg" onBook={onBook}>
          Book care <ArrowRight className="h-4 w-4" aria-hidden />
        </BookButton>
      </Reveal>
    </Section>
  );
}

function Caregivers() {
  return (
    <Section>
      <SectionHeading
        eyebrow="The people who show up"
        heading="Chosen for kindness first"
        subheading="Warm, dependable caregivers — matched to your language and comfort."
      />
      <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-3">
        {caregivers.map((c) => (
          <RevealItem key={c.name}>
            <figure className="card-hairline h-full p-5">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-secondary/50 to-primary/40 font-display text-lg font-semibold text-primary-ink">
                  {c.name[0]}
                </span>
                <div>
                  <figcaption className="font-semibold text-ink">{c.name}</figcaption>
                  <p className="text-xs text-ink-faint">{c.role}</p>
                </div>
              </div>
              <Quote className="mt-4 h-5 w-5 text-primary/30" aria-hidden />
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{c.blurb}</p>
              <div className="mt-4 flex items-center justify-between border-t border-line pt-3 text-xs text-ink-faint">
                <span>{c.languages}</span>
                <span className="font-semibold text-primary">{c.years}</span>
              </div>
            </figure>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal className="mx-auto mt-6 flex max-w-2xl items-start gap-4 rounded-3xl border border-primary/20 bg-primary-soft/40 p-5">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary">
          <whoCaregiversNote.icon className="h-5.5 w-5.5" aria-hidden />
        </span>
        <div>
          <h3 className="font-semibold text-ink">{whoCaregiversNote.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-ink-soft">{whoCaregiversNote.body}</p>
        </div>
      </Reveal>
    </Section>
  );
}

function FinalCta({ onBook }: { onBook: () => void }) {
  return (
    <Section>
      <Reveal className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-b from-primary to-primary-deep px-6 py-14 text-center shadow-lift sm:px-10">
        <div className="aurora absolute inset-0 opacity-25" aria-hidden />
        <div className="relative">
          <h2 className="mx-auto max-w-xl text-balance font-display text-[2rem] font-semibold leading-tight text-white sm:text-[2.5rem]">
            Care that shows up, so you don't have to do it all alone.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-pretty font-medium leading-relaxed text-white/90">
            Book in two minutes. We'll call to confirm and personally assign your nurse or caregiver. You pay only after you approve them.
          </p>
          <div className="mt-7 flex justify-center">
            <BookButton variant="secondary" size="lg" onBook={onBook} className="shadow-lift">
              Book care <ArrowRight className="h-4 w-4" aria-hidden />
            </BookButton>
          </div>
          <p className="mt-4 text-sm text-white/75">No payment today · Cancel anytime before care begins</p>
        </div>
      </Reveal>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
        <Logo />
        <p className="max-w-md text-sm leading-relaxed text-ink-soft">{brand.tagline}</p>
        <p className="text-xs text-ink-faint">
          Serving {brand.cities.join(", ")} — and growing.
        </p>
        <p className="mx-auto max-w-xl text-xs leading-relaxed text-ink-faint">
          Sukoon caregivers provide non-clinical, everyday care and companionship — not medical or nursing treatment. For medical needs, please consult a doctor or registered nurse. In an emergency, call your local emergency number.
        </p>
        <p className="mt-2 text-xs text-ink-faint">
          © {2026} {brand.name}. Made with care.
        </p>
      </div>
    </footer>
  );
}

function MobileBookBar({ onBook }: { onBook: () => void }) {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setShow(y > 560));
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 px-4 pb-safe pt-2 md:hidden"
        >
          <div className="glass mx-auto flex max-w-md items-center justify-between gap-3 rounded-2xl border border-line/70 p-2 pl-4 shadow-lift">
            <span className="flex items-center gap-2 text-sm font-semibold text-ink">
              <LogoMark className="h-6 w-6" /> Pay only after care
            </span>
            <BookButton size="sm" onBook={onBook}>
              Book care
            </BookButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Landing({ onBook }: { onBook: () => void }) {
  return (
    <div className="relative min-h-dvh overflow-x-clip">
      <Header onBook={onBook} />
      <main>
        <Hero onBook={onBook} />
        <HowItWorks />
        <WhatWeHelpWith onBook={onBook} />
        <WhyTrust />
        <Pricing onBook={onBook} />
        <Caregivers />
        <Section id="faq" className="!py-14 sm:!py-20">
          <SectionHeading
            eyebrow="Questions, answered gently"
            heading="Everything you might be wondering"
            subheading="Before you book, here's the honest picture."
          />
          <Faq />
        </Section>
        <FinalCta onBook={onBook} />
      </main>
      <Footer />
      <MobileBookBar onBook={onBook} />
    </div>
  );
}
