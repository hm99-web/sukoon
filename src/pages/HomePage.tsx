import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { BookingFlow } from "@/components/booking/BookingFlow";
import { Landing } from "@/components/landing/Landing";
import { Seo } from "@/components/Seo";
import { SiteFooter } from "@/components/site/SiteFooter";
import { GradientBackground } from "@/components/ui/gradient-background";
import { faq } from "@/data/content";
import { faqLd, organizationLd } from "@/lib/structured-data";

type View = "landing" | "booking";

export default function HomePage() {
  const [params, setParams] = useSearchParams();
  // Deep link: /?book=1 (used by the city/legal pages' "Book care" CTA) opens
  // straight into the booking flow.
  const [view, setView] = useState<View>(params.get("book") ? "booking" : "landing");

  const openBooking = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setView("booking");
  }, []);

  const closeBooking = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setView("landing");
    if (params.has("book")) {
      params.delete("book");
      setParams(params, { replace: true });
    }
  }, [params, setParams]);

  return (
    <>
      <Seo
        title="Home Nurse & Caregiver at Home | Sukoon"
        description="Warm, verified caregivers for elderly, post-surgery & everyday care at home across Bangalore, Delhi NCR, Pune, Mumbai & Hyderabad. Pay only after you approve."
        path="/"
        jsonLd={[organizationLd(), faqLd(faq)]}
      />
      {/* Backdrop lives here (not inside each view) so switching views doesn't
          tear down and rebuild the expensive blurred layers. */}
      <GradientBackground />
      {/* Views swap in the same commit — no exit animation, no "wait" mode.
          The old approach (fade out → unmount → mount → fade in) left the
          screen blank for 1–2s on mid-range phones. The new view just fades
          in quickly from a slightly-visible state so it never reads as empty. */}
      {view === "landing" ? (
        <motion.div
          key="landing"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.18 }}
        >
          <Landing onBook={openBooking} />
          <SiteFooter />
        </motion.div>
      ) : (
        <motion.div
          key="booking"
          initial={{ opacity: 0.4, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18 }}
        >
          <BookingFlow onExit={closeBooking} />
        </motion.div>
      )}
    </>
  );
}
