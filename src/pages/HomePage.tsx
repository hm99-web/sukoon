import { motion } from "framer-motion";
import { useCallback, useEffect, useState, useTransition } from "react";
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
  // Always start on "landing" so the client's first render matches the
  // prerendered HTML (no hydration mismatch). Deep link /?book=1 (from the
  // city/legal pages' CTA, or a pre-hydration tap on "Book care") then opens
  // the booking flow right after mount.
  const [view, setView] = useState<View>("landing");
  // Non-urgent view switches keep the tap responsive and give us `pending`
  // to show a spinner on the control that was tapped, so a slow phone never
  // looks like the tap was ignored.
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    if (params.get("book")) startTransition(() => setView("booking"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openBooking = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    startTransition(() => setView("booking"));
  }, []);

  const closeBooking = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    startTransition(() => setView("landing"));
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
      {/* The landing page stays mounted and is merely hidden while booking is
          open. Rebuilding it on "Home" cost 1–2s of blank screen on phones;
          toggling `hidden` is instant. */}
      <div hidden={view !== "landing"}>
        <Landing onBook={openBooking} pending={pending && view === "landing"} />
        <SiteFooter />
      </div>
      {view === "booking" && (
        <motion.div
          key="booking"
          initial={{ opacity: 0.4, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18 }}
        >
          <BookingFlow onExit={closeBooking} exiting={pending} />
        </motion.div>
      )}
    </>
  );
}
