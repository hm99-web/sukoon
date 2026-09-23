import { LegalDoc } from "@/components/legal/LegalDoc";
import { Seo } from "@/components/Seo";
import { PageShell } from "@/components/site/PageShell";
import { privacyPolicy } from "@/data/legal";
import { breadcrumbLd } from "@/lib/structured-data";

export default function PrivacyPage() {
  return (
    <PageShell>
      <Seo
        title="Privacy Policy · Sukoon"
        description="How Sukoon collects, uses, and protects your personal data under India's DPDP Act, 2023. We never sell your data or use it for ads."
        path="/privacy-policy"
        jsonLd={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />
      <LegalDoc doc={privacyPolicy} />
    </PageShell>
  );
}
