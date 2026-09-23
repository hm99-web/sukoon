import { Outlet } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";

import { BookingProvider } from "@/hooks/useBooking";
import { citySlugs } from "@/data/cities";
import CityPage from "@/pages/CityPage";
import HomePage from "@/pages/HomePage";
import PrivacyPage from "@/pages/PrivacyPage";
import TermsPage from "@/pages/TermsPage";

function RootLayout() {
  return (
    <BookingProvider>
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
