import { Link } from "react-router-dom";

import { LogoMark } from "@/components/brand/Logo";
import { cities } from "@/data/cities";
import { brand } from "@/lib/brand";

export function SiteFooter() {
  const year = 2026; // static: avoids a render-time Date() call (SSR-safe)
  return (
    <footer className="relative border-t border-line/70 bg-surface/60">
      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2.5" aria-label={`${brand.name} — home`}>
              <LogoMark />
              <span className="font-display text-[1.35rem] font-semibold tracking-tight text-ink">
                {brand.name}
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
              {brand.tagline}
            </p>
          </div>

          <nav aria-label="Cities" className="text-sm">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-faint">
              Home care in
            </h2>
            <ul className="space-y-2">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/home-nursing/${c.slug}`}
                    className="text-ink-soft transition-colors hover:text-ink"
                  >
                    {c.city}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company" className="text-sm">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-faint">
              Sukoon
            </h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-ink-soft transition-colors hover:text-ink">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-ink-soft transition-colors hover:text-ink">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-ink-soft transition-colors hover:text-ink">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </nav>

          <div className="text-sm">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-faint">
              Talk to us
            </h2>
            <ul className="space-y-2 text-ink-soft">
              <li>
                <a href={`tel:${brand.supportPhone}`} className="transition-colors hover:text-ink">
                  {brand.supportPhoneDisplay}
                </a>
              </li>
              <li>No payment until you approve your caregiver.</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-line/70 pt-6 text-xs leading-relaxed text-ink-faint">
          <p>
            © {year} {brand.name}. Warm, non-clinical home care across {brand.cities.join(", ")}.
            Our caregivers are not registered nurses; for medical needs please consult a
            registered nurse or doctor.
          </p>
        </div>
      </div>
    </footer>
  );
}
