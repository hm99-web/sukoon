/**
 * Single source of truth for brand identity + contact details.
 * Rename the product or swap the support numbers here and it flows everywhere.
 */
export const brand = {
  name: "Sukoon",
  // Production domain (no trailing slash). Used for canonical URLs, sitemap,
  // and social-share (Open Graph) links. Apex form — make www redirect here.
  siteUrl: "https://sukoonseva.com",
  tagline: "Care that feels like family, on the days you need it most.",
  oneLiner:
    "Book a warm, verified nurse or caregiver to your home for elderly, post-surgery, and everyday care — you pay only after we assign someone you approve.",

  // Support contact (used on the confirmation screen + WhatsApp handoff).
  supportPhone: "+919000000000",
  supportPhoneDisplay: "+91 90000 00000",
  whatsappNumber: "919000000000", // no + for wa.me links

  // Social proof (founder-tunable).
  familiesServed: 750,
  cities: ["Bangalore", "Delhi NCR", "Pune", "Mumbai", "Hyderabad"],
} as const;

/**
 * Pincode prefixes for the metros we currently serve — the source of truth for
 * the gentle out-of-area waitlist nudge. Add a prefix here as we grow.
 * 56 Bangalore · 11 Delhi · 122 Gurgaon · 121 Faridabad · 201 Noida/Ghaziabad ·
 * 41 Pune · 40 Mumbai · 50 Hyderabad
 */
export const serviceablePincodePrefixes = [
  "56",
  "11",
  "122",
  "121",
  "201",
  "41",
  "40",
  "50",
];

export function isServiceablePincode(pincode: string): boolean {
  if (pincode.length !== 6) return false;
  return serviceablePincodePrefixes.some((prefix) => pincode.startsWith(prefix));
}

/** Pre-filled WhatsApp handoff for the confirmation screen. */
export function whatsappLink(ref: string): string {
  const text = encodeURIComponent(
    `Hi Sukoon, I just created a booking (${ref}). I'd like to confirm the details.`,
  );
  return `https://wa.me/${brand.whatsappNumber}?text=${text}`;
}
