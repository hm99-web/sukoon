import { LegalDoc } from "@/components/legal/LegalDoc";
import { Seo } from "@/components/Seo";
import { PageShell } from "@/components/site/PageShell";
import { terms } from "@/data/legal";
import { breadcrumbLd } from "@/lib/structured-data";

export default function TermsPage() {
  return (
    <PageShell>
      <Seo
        title="Terms & Conditions · Sukoon"
        description="Sukoon's Terms & Conditions — non-clinical home care, pay only after you approve your caregiver, honest pricing, and free cancellations before care begins."
        path="/terms"
        jsonLd={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Terms & Conditions", path: "/terms" },
        ])}
      />
      <LegalDoc doc={terms} />
    </PageShell>
  );
}
