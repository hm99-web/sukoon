import { Link } from "react-router-dom";

import { LogoMark } from "@/components/brand/Logo";
import { SiteFooter } from "@/components/site/SiteFooter";
import { GradientBackground } from "@/components/ui/gradient-background";
import { brand } from "@/lib/brand";

/**
 * Shared chrome for content pages (legal, city): calm backdrop, a slim top bar
 * with the logo linking home and a Book-care CTA. The global footer is rendered
 * by the route layout, so it isn't repeated here.
 */
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-dvh">
      <GradientBackground />

      <header className="sticky top-0 z-40 glass border-b border-line/60">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-3">
          <Link to="/" className="inline-flex items-center gap-2.5" aria-label={`${brand.name} — home`}>
            <LogoMark />
            <span className="font-display text-[1.35rem] font-semibold tracking-tight text-ink">
              {brand.name}
            </span>
          </Link>
          <Link
            to="/?book=1"
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-primary-hover"
          >
            Book care
          </Link>
        </div>
      </header>

      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
