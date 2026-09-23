import { useEffect, useLayoutEffect } from "react";
import { Outlet, useLocation, useNavigationType } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";

import { BookingProvider } from "@/hooks/useBooking";
import { citySlugs } from "@/data/cities";
import CityPage from "@/pages/CityPage";
import HomePage from "@/pages/HomePage";
import PrivacyPage from "@/pages/PrivacyPage";
import TermsPage from "@/pages/TermsPage";

/**
 * Client-side navigations keep the previous scroll position, so tapping a
 * footer link (e.g. Privacy Policy) opened the new page still scrolled to
 * the bottom. Jump to the top on every push/replace navigation; leave
 * back/forward (POP) alone so the browser can restore where the user was.
 */
// useLayoutEffect warns during the SSG prerender (no DOM); fall back there.
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();
  useIsoLayoutEffect(() => {
    if (navType === "POP" || hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash, navType]);
  return null;
}

function RootLayout() {
  return (
    <BookingProvider>
      <ScrollToTop />
      <Outlet />
    </BookingProvider>
  );
}

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "privacy-policy", element: <PrivacyPage /> },
      { path: "terms", element: <TermsPage /> },
      {
        path: "home-nursing/:city",
        element: <CityPage />,
        // Pre-render one static HTML page per city slug at build time.
        getStaticPaths: () => citySlugs.map((s) => `home-nursing/${s}`),
      },
    ],
  },
];
