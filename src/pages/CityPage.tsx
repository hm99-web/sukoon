import { Link, useParams } from "react-router-dom";
import { ArrowRight, Check, MapPin, Phone, ShieldCheck } from "lucide-react";

import { Seo } from "@/components/Seo";
import { PageShell } from "@/components/site/PageShell";
import { getCity } from "@/data/cities";
import { shiftTiers } from "@/data/pricing";
import { brand } from "@/lib/brand";
import { formatPrice } from "@/lib/formatters";
import { breadcrumbLd, cityServiceLd, faqLd, organizationLd } from "@/lib/structured-data";

export default function CityPage() {
  const { city: slug } = useParams<{ city: string }>();
  const city = getCity(slug);

  if (!city) {
    return (
      <PageShell>
        <div className="mx-auto max-w-3xl px-5 py-24 text-center">
          <h1 className="font-display text-2xl font-semibold text-ink">We're not in that area page.</h1>
          <p className="mt-3 text-ink-soft">
            Try our{" "}
            <Link to="/" className="font-semibold text-primary underline-offset-4 hover:underline">
              home page
            </Link>{" "}
            to book care or see where we serve.
          </p>
        </div>
      </PageShell>
    );
  }

  const path = `/home-nursing/${city.slug}`;

  return (
    <PageShell>
      <Seo
        title={city.metaTitle}
        description={city.metaDescription}
        path={path}
        jsonLd={[
          organizationLd(),
          cityServiceLd(city, path),
          faqLd(city.localFaq),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: `Home care in ${city.city}`, path },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-5 pt-10 sm:pt-14">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary-ink">
          Home care in {city.city}
        </p>
        <h1 className="mt-2 font-display text-[2.1rem] font-semibold leading-tight text-ink sm:text-[2.6rem]">
          {city.h1}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">{city.heroSubcopy}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            to="/?book=1"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground shadow-lift transition-colors hover:bg-primary-hover"
          >
            Book care in {city.city} <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <a
            href={`tel:${brand.supportPhone}`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-surface px-5 font-semibold text-ink shadow-soft transition-colors hover:border-line-strong"
          >
            <Phone className="h-4 w-4 text-primary" aria-hidden /> Call us
          </a>
        </div>
        <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary-ink">
          <ShieldCheck className="h-4 w-4" aria-hidden /> No payment now — you pay only after you
          approve your caregiver.
        </p>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-5 pt-10">
        <div className="space-y-4">
          {city.introParagraphs.map((p, i) => (
            <p key={i} className="leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Detail sections */}
      <section className="mx-auto max-w-3xl px-5 pt-12">
        <div className="space-y-8">
          {city.sections.map((s) => (
            <div key={s.heading} className="card-hairline p-5 sm:p-6">
              <h2 className="font-display text-xl font-semibold text-ink">{s.heading}</h2>
              <p className="mt-2 leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-3xl px-5 pt-12">
        <h2 className="font-display text-2xl font-semibold text-ink">
          Simple, honest pricing in {city.city}
        </h2>
        <p className="mt-2 text-ink-soft">
          Estimates you'll see before you confirm — the final amount is agreed on our call.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {shiftTiers.map((t) => (
            <div key={t.key} className="card-hairline p-5">
              <h3 className="font-display text-lg font-semibold text-ink">{t.label}</h3>
              <p className="text-sm text-ink-faint">{t.hours} each day</p>
              <p className="mt-3">
                <span className="font-display text-2xl font-semibold tabular-nums text-ink">
                  {formatPrice(t.pricePaise)}
                </span>
                <span className="text-sm text-ink-soft"> / day</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Areas served */}
      <section className="mx-auto max-w-3xl px-5 pt-12">
        <h2 className="font-display text-2xl font-semibold text-ink">
          Neighbourhoods we cover in {city.city}
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2.5">
          {city.areasServed.map((a) => (
            <li
              key={a}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium text-ink-soft"
            >
              <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden /> {a}
            </li>
          ))}
        </ul>
      </section>

      {/* Local FAQ */}
      <section className="mx-auto max-w-3xl px-5 pt-12">
        <h2 className="font-display text-2xl font-semibold text-ink">
          Questions from families in {city.city}
        </h2>
        <div className="mt-5 space-y-3">
          {city.localFaq.map((f) => (
            <details key={f.q} className="card-hairline group p-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 font-semibold text-ink">
                {f.q}
                <span className="mt-1 text-primary transition-transform group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-3xl px-5 py-14">
        <div className="rounded-3xl bg-secondary-soft p-6 text-center sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-secondary-ink">
            Ready when you are, {city.city}
          </h2>
          <p className="mx-auto mt-2 max-w-md leading-relaxed text-secondary-ink/80">
            Book in two minutes. We'll call to confirm and personally assign your caregiver — you
            pay only after you approve them.
          </p>
          <ul className="mx-auto mt-4 flex max-w-md flex-col gap-2 text-left text-sm text-secondary-ink/90">
            {["No payment at booking — no card, no deposit", "Choose gender & language", "Free to change or cancel before care begins"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0" aria-hidden /> {item}
                </li>
              ),
            )}
          </ul>
          <Link
            to="/?book=1"
            className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 font-semibold text-primary-foreground shadow-lift transition-colors hover:bg-primary-hover"
          >
            Book care in {city.city} <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
