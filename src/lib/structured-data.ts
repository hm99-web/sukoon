import { shiftTiers } from "@/data/pricing";
import type { CityContent } from "@/data/cities";
import { brand } from "@/lib/brand";

const site = brand.siteUrl;
const abs = (path: string) => `${site}${path === "/" ? "" : path}`;

/** Organization node — the brand itself. Reused across pages. */
export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site}/#organization`,
    name: brand.name,
    url: site,
    logo: `${site}/favicon.svg`,
    description: brand.oneLiner,
    areaServed: brand.cities.map((c) => ({ "@type": "City", name: c })),
    // TODO(founder): set a real telephone in brand.ts for this to be accurate.
    contactPoint: {
      "@type": "ContactPoint",
      telephone: brand.supportPhone,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
  };
}

const priceOffers = () =>
  shiftTiers.map((t) => ({
    "@type": "Offer",
    name: t.label,
    priceCurrency: "INR",
    price: Math.round(t.pricePaise / 100),
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceCurrency: "INR",
      price: Math.round(t.pricePaise / 100),
      unitText: "per day",
    },
  }));

/** Service node for a city landing page. */
export function cityServiceLd(city: CityContent, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Home nursing & elderly caregiver service",
    name: `Home nurse & caregiver service in ${city.city}`,
    description: city.metaDescription,
    url: abs(path),
    provider: { "@id": `${site}/#organization` },
    areaServed: [
      { "@type": "City", name: city.city },
      ...city.areasServed.map((a) => ({ "@type": "Place", name: a })),
    ],
    offers: priceOffers(),
  };
}

/** FAQPage node from a list of Q&A. */
export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** BreadcrumbList node. */
export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}
