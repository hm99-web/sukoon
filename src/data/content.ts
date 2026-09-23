import {
  BadgeCheck,
  CalendarHeart,
  HandHeart,
  HeartHandshake,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const heroTrustline =
  "No payment today. We call to confirm and personally assign your nurse or caregiver.";

export const trustBadges = [
  "Pay only after you approve who we assign",
  "Every caregiver personally assigned",
  "We call before anyone arrives",
  "Choose your caregiver's gender & language",
];

export interface Step {
  icon: LucideIcon;
  title: string;
  body: string;
}

export const howItWorks: Step[] = [
  {
    icon: CalendarHeart,
    title: "Tell us when & what",
    body: "Pick the days you need care and, if you like, a few words about what would help.",
  },
  {
    icon: HeartHandshake,
    title: "Share your preferences",
    body: "Choose a caregiver's gender and language so you feel completely at ease.",
  },
  {
    icon: PhoneCall,
    title: "We call & assign",
    body: "Our team calls to confirm and personally matches a caregiver to your home.",
  },
  {
    icon: Wallet,
    title: "Approve, then pay",
    body: "We assign someone and you approve them first. You pay only after that — never at booking.",
  },
];

export interface TrustPoint {
  icon: LucideIcon;
  title: string;
  body: string;
}

export const whyTrust: TrustPoint[] = [
  {
    icon: ShieldCheck,
    title: "Verified, personally known",
    body: "Every caregiver is ID-verified and known to our team — never an anonymous match from an algorithm.",
  },
  {
    icon: PhoneCall,
    title: "We call before anyone arrives",
    body: "You'll know your caregiver's name ahead of time, and our support line stays open through the visit.",
  },
  {
    icon: Wallet,
    title: "Pay only after you approve",
    body: "No card, no deposit, no payment at booking. You pay only once you've approved the person we assign.",
  },
  {
    icon: BadgeCheck,
    title: "Not the right fit? We replace them",
    body: "If the match doesn't feel right, tell us — we'll send someone else, free of charge.",
  },
];

export interface Caregiver {
  name: string;
  role: string;
  blurb: string;
  languages: string;
  years: string;
}

export const caregivers: Caregiver[] = [
  {
    name: "Sunita",
    role: "Elderly care companion",
    blurb: "Patient and gentle with seniors — remembers how everyone likes their tea.",
    languages: "Hindi · English",
    years: "6 yrs caring",
  },
  {
    name: "Reshma",
    role: "Post-surgery recovery",
    blurb: "Calm hands for mobility and hygiene help while someone gets back on their feet.",
    languages: "Marathi · Hindi",
    years: "4 yrs caring",
  },
  {
    name: "Arun",
    role: "Day & night attendant",
    blurb: "Dependable through long shifts — the person families ask for again.",
    languages: "Tamil · English",
    years: "8 yrs caring",
  },
];

export const whoCaregiversNote = {
  icon: HandHeart,
  title: "Chosen for kindness first",
  body: "Sukoon brings warm caregivers for nursing-style home care — the everyday help of meals, bathing, medicine reminders and company. They're verified and personally known to us. They aren't registered nurses, so for clinical or medical procedures we'll point you to a nurse or doctor.",
};

export const faq = [
  {
    q: "Do I really pay nothing until after?",
    a: "Yes. You'll see the price before you confirm, but there's no payment at booking and no card details required. We assign someone and you approve them first — you pay only after that, in cash or online, whatever's easiest for you.",
  },
  {
    q: "Are the caregivers registered nurses?",
    a: "Our caregivers provide non-clinical nursing-style care at home — meals, bathing and hygiene, help to the washroom, medicine reminders, mobility support, light housekeeping, and gentle company. They aren't registered nurses, so for medical procedures please rely on a registered nurse or doctor. If you specifically need a qualified nurse, tell us on the call and we'll guide you.",
  },
  {
    q: "How do I know I can trust who comes to my home?",
    a: "Every caregiver is personally known to our team, and we assign them by hand — never by an anonymous algorithm. Before anyone arrives, we call you to confirm who's coming. You'll have their name ahead of time, and our support line stays open throughout the visit if anything feels off.",
  },
  {
    q: "Can I choose a woman or a man, and a language I'm comfortable in?",
    a: "Yes. You can set a preferred gender and preferred language during booking — comfort matters, especially with personal care like bathing. We match your choice wherever possible, and if we can't, we'll always call to talk it through before assigning anyone.",
  },
  {
    q: "What if I need to cancel or change the dates?",
    a: "That's completely okay. You can change your dates or cancel before the care begins, at no charge — just tell us on the confirmation call or through the app. Plans shift when someone's unwell, and we understand.",
  },
  {
    q: "How soon can someone come?",
    a: "After you book, we call within a few hours to confirm and assign your caregiver. For same-day or urgent needs, mention it on the call and we'll do our best to move quickly. You choose the exact days on the calendar when booking.",
  },
];

export const emotionalMicrocopy = { icon: Sparkles };
