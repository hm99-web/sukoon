import { Head } from "vite-react-ssg";

import { brand } from "@/lib/brand";

interface SeoProps {
  title: string;
  description: string;
  /** Route path, e.g. "/", "/terms", "/home-nursing/bangalore". */
  path: string;
  /** JSON-LD structured data — a single node or an array of nodes. */
  jsonLd?: object | object[];
  /** Set true on the legal/utility pages we don't want ranking. */
  noindex?: boolean;
}

/** Absolute URL for a route path, from the configured site origin. */
export function absoluteUrl(path: string): string {
  return `${brand.siteUrl}${path === "/" ? "" : path}`;
}

/**
 * Per-page <head>: title, description, canonical, Open Graph, Twitter, and
 * JSON-LD. Rendered via vite-react-ssg's <Head> so the tags are baked into the
 * pre-rendered HTML for crawlers.
 */
export function Seo({ title, description, path, jsonLd, noindex }: SeoProps) {
  const url = absoluteUrl(path);
  const image = `${brand.siteUrl}/og.png`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,follow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={brand.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Head>
  );
}
