import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header({ onBook }: { onBook: () => void }) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 12));

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled && "glass border-b border-line/70",
      )}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex">
          {[
            ["How it works", "#how"],
            ["What we help with", "#help"],
            ["Pricing", "#pricing"],
            ["Questions", "#faq"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-semibold text-ink-soft transition-colors hover:text-ink"
            >
              {label}
            </a>
          ))}
        </nav>
        <Button size="sm" onClick={onBook} className="shadow-soft">
          Book care
        </Button>
      </div>
    </motion.header>
  );
}
