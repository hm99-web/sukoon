import type { LegalDoc as LegalDocData } from "@/data/legal";

/**
 * Splits text on 【placeholder】 markers and wraps them in a highlighted <mark>
 * so any value the founder hasn't filled in is impossible to miss (and easy to
 * grep for) before go-live.
 */
function withPlaceholders(text: string): React.ReactNode {
  const parts = text.split(/(【[^】]*】)/g);
  return parts.map((part, i) =>
    part.startsWith("【") && part.endsWith("】") ? (
      <mark
        key={i}
        className="rounded bg-secondary-soft px-1 font-semibold text-secondary-ink"
        title="Fill this in before publishing"
      >
        {part}
      </mark>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export function LegalDoc({ doc }: { doc: LegalDocData }) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
      <header className="border-b border-line pb-6">
        <h1 className="font-display text-[2.25rem] font-semibold leading-tight text-ink">
          {doc.title}
        </h1>
        <p className="mt-2 text-sm text-ink-faint">{withPlaceholders(doc.updatedLabel)}</p>
        <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">{doc.intro}</p>
      </header>

      <div className="mt-8 space-y-8">
        {doc.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display text-xl font-semibold text-ink">{section.heading}</h2>
            {section.paragraphs?.map((p, i) => (
              <p key={i} className="mt-3 leading-relaxed text-ink-soft">
                {withPlaceholders(p)}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-3 space-y-2 pl-1">
                {section.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2.5 leading-relaxed text-ink-soft">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    <span>{withPlaceholders(b)}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}
