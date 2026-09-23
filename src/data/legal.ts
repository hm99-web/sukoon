/**
 * Legal copy for the Privacy Policy and Terms pages.
 *
 * ⚠️ FOUNDER TODO before go-live: fill every 【bracketed】placeholder below
 * (legal entity name, registered address, support email/phone, WhatsApp number,
 * grievance officer, jurisdiction, effective date). The page renderer highlights
 * any remaining 【…】 so unfilled placeholders are obvious.
 *
 * Content drafted + adversarially reviewed for the actual Sukoon model:
 * non-clinical caregivers (not registered nurses), no card / pay-after-approval
 * over WhatsApp+UPI, data never sold, India DPDP Act 2023.
 */

export interface LegalBlock {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface LegalDoc {
  title: string;
  /** Shown under the H1, e.g. "Effective from 【Effective Date】". */
  updatedLabel: string;
  intro: string;
  sections: LegalBlock[];
}

export const privacyPolicy: LegalDoc = {
  title: "Privacy Policy",
  updatedLabel: "Effective from 【Effective Date】",
  intro:
    "At Sukoon, trust is the whole point. When you invite one of our caregivers into your home for someone you love, you are trusting us with more than a booking — you are trusting us with your family's comfort and your personal details. This policy explains, in plain language, exactly what information we collect, why we collect it, who we share it with (and who we never share it with), and the rights you have over your data under India's Digital Personal Data Protection Act, 2023. We have tried to keep it honest and free of jargon.",
  sections: [
    {
      heading: "Who we are",
      paragraphs: [
        "Sukoon is a home-care booking service operating in India — currently in Bangalore, Delhi NCR, Pune, Mumbai, and Hyderabad, and growing. We arrange warm, verified, non-clinical caregivers to come to your home for elderly care, post-surgery recovery, and everyday help such as meals, bathing and hygiene, help to the washroom, medicine reminders, mobility support, light housekeeping, and gentle companionship.",
        "An important honesty note: our caregivers are not registered nurses, and Sukoon is not a medical, clinical, or emergency service. For any medical procedure, please rely on a registered nurse or doctor. This matters for your data too — we do not ask for, or store, clinical or medical records.",
        "If you are booking care for another adult — for example, an elderly parent — some of the details you give us, such as their address and care needs, are their personal data. By booking, you confirm you are authorised to share it and, where needed, that they are content for us to use it to arrange their care. They have the same rights over their data as set out below.",
        "The business named in this policy — 【Legal Entity Name】, at 【Registered Address】 — is the data fiduciary responsible for your personal data. This policy is effective from 【Effective Date】.",
      ],
    },
    {
      heading: "What data we collect, and why",
      paragraphs: [
        "We keep collection to the minimum needed to arrange your care. When you make a booking, we collect only:",
      ],
      bullets: [
        "Your name",
        "Your phone number, and whether that number is on WhatsApp",
        "Your home address, area, and pincode",
        "The care needs or notes you type in — so the right caregiver comes prepared",
        "Your caregiver gender and language preferences",
        "The care dates you choose",
      ],
    },
    {
      heading: "What we never ask for",
      paragraphs: [
        "There is no payment at the time of booking — no card, no deposit, and no card details, ever. We never collect or store card numbers. Payment happens only later, after you have approved the caregiver (explained below), and never with a card.",
      ],
    },
    {
      heading: "The booking draft saved in your own browser",
      paragraphs: [
        "As you fill in a booking, a draft is saved locally in your own web browser (using something called localStorage) so that you don't lose your progress if you get interrupted or your page reloads. This draft stays on your device. It is under your control — clearing your browser data removes it. It is only sent to us if and when you actually submit the booking.",
      ],
    },
    {
      heading: "How we use your information",
      paragraphs: ["We use your data only for the following purposes, and nothing else:"],
      bullets: [
        "To call you (usually within a few hours) and confirm the details of your booking",
        "To coordinate with our staffing agent or partner and assign a suitable caregiver",
        "To share only the minimum necessary details with the assigned caregiver and staffing agent, so that care can actually be delivered at your home",
        "To arrange payment over WhatsApp after you have approved the assigned caregiver",
        "To contact you about your booking — for example, to tell you who is coming, to arrange a replacement if a caregiver is not the right fit, or to handle a change or cancellation",
      ],
    },
    {
      heading: "How your booking and payment actually work",
      paragraphs: [
        "We think it helps to see where your data goes in the flow. After you book online, our team calls you to confirm. We then coordinate with a staffing agent or partner to assign a suitable caregiver. We tell you who is coming, and you must approve that caregiver before anything proceeds.",
        "Only after you approve the caregiver do we arrange payment — and this is handled over WhatsApp, either through a UPI QR code or online transfer, or in cash. There is no card involved at any stage. Our prices are shown as honest estimates (for example, a 4-hour Care Visit at ₹1,200/day, a 12-hour Full Day at ₹1,859/day, or 24-Hour Live-in at ₹2,299/day, with a small discount for long stays) and are always confirmed on the human call. You are free to change your dates or cancel at no charge before the care begins.",
      ],
    },
    {
      heading: "Who we share your data with — and who we never do",
      paragraphs: [
        "We are strict about this, so it is worth saying plainly:",
        "We do NOT sell your personal data. We do NOT use it for third-party advertising. We do NOT share it with data brokers or unrelated companies.",
        "The only parties who ever receive your data are:",
      ],
      bullets: [
        "The staffing agent/partner and the assigned caregiver needed to fulfil your specific booking — and only the minimum details they need to reach you and deliver care",
        "WhatsApp and UPI, which carry our communication with you and your payment (more below)",
        "Any authority or party where disclosure is genuinely required by law",
      ],
    },
    {
      heading: "WhatsApp and UPI",
      paragraphs: [
        "We communicate with you and arrange payment over WhatsApp (operated by Meta) and over UPI. When you message us or pay through these services, those providers process that data under their own privacy policies, which are separate from ours and outside our control. We recommend reviewing Meta's and your UPI app's privacy terms so you understand how they handle your information.",
      ],
    },
    {
      heading: "Your legal basis and our commitments under the DPDP Act, 2023",
      paragraphs: [
        "We handle your personal data in line with India's Digital Personal Data Protection Act, 2023 (the DPDP Act). In practice this means:",
      ],
      bullets: [
        "Consent: we process your data based on the consent you give when you book, for the specific purposes described above",
        "Purpose limitation: we use your data only for arranging and delivering your care, and not for any unrelated purpose",
        "Data minimisation: we ask for only what we genuinely need to serve you",
        "Retention limits and security: we keep your data only as long as needed and take reasonable steps to protect it (see below)",
      ],
    },
    {
      heading: "Your rights over your data",
      paragraphs: ["Under the DPDP Act, 2023, you have the right to:"],
      bullets: [
        "Access the personal data we hold about you and how we have used and shared it",
        "Correct or update any data that is inaccurate or incomplete",
        "Erase your data when it is no longer needed for the purpose you gave it for, subject to any legal obligation we have to retain it",
        "Withdraw your consent at any time — though please note that without the details needed to arrange care, we may not be able to provide the service",
        "Nominate another person to exercise your rights in the event of your death or incapacity, as provided under the Act",
      ],
    },
    {
      heading: "How to exercise your rights, and how to complain",
      paragraphs: [
        "To exercise any of these rights, or if you have a question about your privacy, you can reach us at 【Support Email】 or 【Support Phone】, or message us on WhatsApp at 【WhatsApp Number】.",
        "If you are not satisfied with how we have handled your data or your request, you can contact our Grievance Officer, who is responsible for addressing your concerns under the DPDP Act, 2023:",
        "Grievance Officer: 【Grievance Officer Name】, 【Grievance Officer Email】. We will acknowledge and respond to grievances within the timelines required by law. If your concern remains unresolved, you may also approach the Data Protection Board of India.",
      ],
    },
    {
      heading: "How long we keep your data",
      paragraphs: [
        "We keep your personal data only for as long as it is needed to arrange and deliver your care, to handle any follow-up, replacement, or dispute, and to meet any record-keeping obligation the law places on us. When it is no longer needed for these purposes, we delete it or anonymise it. Remember that the booking draft saved in your browser lives on your own device and can be cleared by you at any time.",
      ],
    },
    {
      heading: "How we protect your data",
      paragraphs: [
        "We take reasonable technical and organisational measures to keep your data safe and to limit access to it to the people who genuinely need it to serve you — such as the team member who calls you and the assigned caregiver. While no method of transmission or storage can be guaranteed to be perfectly secure, we work to protect your information and to correct any issue promptly if one arises. Please note that messages and payments carried over WhatsApp and UPI are also protected by those providers' own security measures.",
        "If a personal data breach ever affects your information, we will notify you and the Data Protection Board of India in the manner required by the DPDP Act, and tell you what happened and the steps you can take.",
      ],
    },
    {
      heading: "Children",
      paragraphs: [
        "Sukoon's service is intended for adults booking care, and our website and booking are not directed at children under 18. We do not knowingly collect personal data directly from a child. If care is being arranged for an elderly or recovering family member, the person making the booking should be an adult who is able to give consent.",
      ],
    },
    {
      heading: "Changes to this policy",
      paragraphs: [
        "We may update this policy from time to time — for example, if we add cities or refine how we work. When we do, we will post the updated version here and change the effective date at the top. We encourage you to review it occasionally so you always know how your data is handled.",
      ],
    },
    {
      heading: "Contact us",
      paragraphs: [
        "We would genuinely rather hear from you than have you wonder. For anything about your booking or your privacy, reach us at 【Support Email】, call 【Support Phone】, or message 【WhatsApp Number】. If you would prefer this policy in another Indian language, we can provide it on request at 【Support Email】.",
        "Our registered entity is 【Legal Entity Name】, 【Registered Address】. This policy is governed by the laws of India, and any disputes are subject to the jurisdiction of the courts at 【Governing Law City / Jurisdiction】.",
      ],
    },
  ],
};

export const terms: LegalDoc = {
  title: "Terms & Conditions",
  updatedLabel: "Effective from 【Effective Date】",
  intro:
    "Welcome to Sukoon. These Terms & Conditions explain how our home-care booking service works and the promises we make to each other when you book care through us. Please read them carefully — by making a booking with Sukoon, you agree to these Terms.",
  sections: [
    {
      heading: "About these Terms and about us",
      paragraphs: [
        'Sukoon is a home-care booking service operated by 【Legal Entity Name】, with its registered address at 【Registered Address】 ("Sukoon", "we", "us", "our"). Our promise is simple: care that feels like family, on the days you need it most.',
        "These Terms apply whenever you use our website or book care through us. By making a booking, you confirm that you are at least 18 years old and that you agree to these Terms. If you are booking care on behalf of someone else, you confirm that you are authorised to do so on their behalf.",
        "If you do not agree with these Terms, please do not use the service.",
      ],
    },
    {
      heading: "What Sukoon is",
      paragraphs: [
        "Sukoon connects you with warm, verified, non-clinical caregivers who come to your home to help with everyday care — for elderly loved ones, post-surgery recovery, and day-to-day support. This is hands-on everyday help (the kind sometimes loosely called “nursing-style” care), not nursing or medical treatment, and our caregivers are not nurses.",
        "The everyday help our caregivers offer includes things like:",
      ],
      bullets: [
        "Preparing and serving meals",
        "Bathing, grooming and personal hygiene",
        "Help getting to and from the washroom",
        "Medicine reminders (reminders only)",
        "Mobility support and help moving around the home",
        "Light housekeeping around the person being cared for",
        "Gentle companionship",
      ],
    },
    {
      heading: "What Sukoon is not",
      paragraphs: [
        "Please read this carefully: Sukoon is a booking and matching service, not a medical, clinical, or emergency service. Our caregivers are NOT registered nurses, doctors, or medical professionals, and they do not provide clinical or medical care. They give reminders to take medicines — they do not prescribe, change doses, or make any medical or clinical decision.",
        "For any medical need — a procedure, a diagnosis, a medication decision, wound care or injections that require a nurse, or any emergency — you must rely on a registered nurse or a qualified doctor. In an emergency, contact emergency services immediately (for example, dial 108 or your local emergency number). Do not rely on Sukoon or a caregiver for emergency medical response.",
      ],
    },
    {
      heading: "Where we operate",
      paragraphs: [
        "We currently serve Bangalore, Delhi NCR, Pune, Mumbai, and Hyderabad — and we are growing. If you are outside these areas, do reach out; we may still be able to help, or add you as we expand.",
      ],
    },
    {
      heading: "How booking works",
      paragraphs: [
        "Booking with Sukoon is meant to feel calm and human. Here is how it goes, step by step:",
      ],
      bullets: [
        "You book online, telling us your care dates, your care needs and any notes, your preference for the caregiver's gender and language, and your contact details (name, phone/WhatsApp number, home address, area and pincode).",
        "No payment is taken at booking. We never ask for card details, a deposit, or any payment to hold your booking.",
        "Our team calls you — usually within a few hours — to understand your needs and confirm the details.",
        "We coordinate with our staffing partner/agent to assign a caregiver suited to your needs.",
        "We tell you exactly who is coming, and you approve the assigned caregiver before anything proceeds.",
      ],
    },
    {
      heading: "Pricing and honest estimates",
      paragraphs: [
        "The prices we show are honest estimates to help you plan. Your final price is always confirmed with you on the human call before any care begins — there are no hidden surprises.",
        "Our current indicative rates are:",
        "We offer a small discount for long stays. Prices may change over time; the price that applies to you is always the one we confirm with you on the call.",
      ],
      bullets: [
        "Care Visit (4 hours): ₹1,200 per day",
        "Full Day (12 hours): ₹1,859 per day",
        "24-Hour Live-in: ₹2,299 per day",
      ],
    },
    {
      heading: "Payment — only after you approve",
      paragraphs: [
        "We collect payment only after you have approved the assigned caregiver. Until you approve, you owe us nothing.",
        "Payment is arranged over WhatsApp — by UPI (through a QR code or online transfer) or in cash. We do not accept cards, and we never collect or store card details.",
        "WhatsApp is operated by Meta, and UPI payments are processed by your bank or UPI app. Those services handle the related information under their own terms and privacy policies.",
      ],
    },
    {
      heading: "Approving and replacing your caregiver",
      paragraphs: [
        "You are always told who is coming before care starts, and care only proceeds once you approve the assigned caregiver.",
        "If the caregiver turns out not to be the right fit for your family, just tell us and we will arrange a replacement. We want the match to feel right.",
      ],
    },
    {
      heading: "Changes, cancellations and refunds",
      paragraphs: [
        "You can change your care dates or cancel free of charge at any time before care begins — there is no cancellation fee. If you had already paid for a booking that you then cancel before care begins, we refund the full amount you paid, over the same channel you used (UPI or cash).",
        "If you cancel after care has already begun, you are charged only for the care actually delivered up to that point, and we refund the balance of anything you prepaid for care not yet delivered. To change or cancel, simply contact us using the details below.",
      ],
    },
    {
      heading: "Your responsibilities",
      paragraphs: [
        "So we can match the right caregiver and keep everyone safe and comfortable, you agree to:",
      ],
      bullets: [
        "Give us accurate and complete information about the care needs, the person being cared for, and your contact details.",
        "Provide a safe, respectful and reasonably clean home environment for the caregiver to work in.",
        "Treat your caregiver with dignity and respect. We do not tolerate harassment, abuse, discrimination, or unsafe conditions, and we may end care if they occur.",
        "Tell us in advance about anything that could affect the caregiver's safety or ability to help — for example, pets, hazards in the home, or any medical situation that actually needs a nurse or doctor.",
        "Not ask the caregiver to perform medical or clinical tasks, or anything unlawful or unsafe.",
        "Use the service only for lawful purposes and keep your booking details reasonably secure.",
      ],
    },
    {
      heading: "Our promises and what we cannot promise",
      paragraphs: [
        "We carefully verify our caregivers and do our honest best to match you well and to deliver warm, reliable care.",
        'That said, the service is provided on an "as is" and "as available" basis. To the extent the law allows, we do not guarantee that the service will be uninterrupted or error-free, or that any particular caregiver will always be available. We make no medical or clinical warranties of any kind — because Sukoon is not a medical service.',
      ],
    },
    {
      heading: "Limitation of liability",
      paragraphs: [
        "Sukoon is a non-clinical booking and matching service. Our responsibility is to run that service honestly and with reasonable care and skill.",
        "To the fullest extent permitted by Indian law, Sukoon will not be liable for: any medical outcome, clinical decision, or medical treatment (which are matters for a registered nurse or doctor); any indirect, incidental, special or consequential loss; or the acts or omissions of a caregiver or staffing partner beyond our reasonable control, provided we selected and verified them with reasonable care and skill.",
        "Where we are found liable in connection with a booking, our total liability for that booking is limited to the amount you actually paid to us for it. Nothing in these Terms limits or excludes any liability that cannot be limited or excluded under applicable law.",
      ],
    },
    {
      heading: "Indemnity",
      paragraphs: [
        "If a claim is brought against us because you broke these Terms, gave us wrong or incomplete information, misused the service, or asked a caregiver to do something unsafe or unlawful, you agree to reasonably cover the direct costs and losses that result. We will keep this fair, let you know promptly, and work with you in good faith.",
      ],
    },
    {
      heading: "Your privacy",
      paragraphs: [
        "We only collect the details we genuinely need to arrange your care, and we handle them under our Privacy Policy, in line with India's Digital Personal Data Protection Act, 2023. Please read our Privacy Policy to understand what we collect, how we use it, and the rights you have over your data.",
      ],
    },
    {
      heading: "Grievances and how to reach us",
      paragraphs: [
        "We want you to feel looked after. If something is not right, please contact us first — we will do our best to make it right.",
        "Support email: 【Support Email】. Support phone: 【Support Phone】. WhatsApp: 【WhatsApp Number】.",
        "In keeping with Indian law, our Grievance Officer is 【Grievance Officer Name】, who can be reached at 【Grievance Officer Email】.",
      ],
    },
    {
      heading: "Governing law and jurisdiction",
      paragraphs: [
        "These Terms are governed by and construed in accordance with the laws of India. Any dispute arising out of or in connection with these Terms or the service will be subject to the exclusive jurisdiction of the courts at 【Governing Law City / Jurisdiction】.",
      ],
    },
    {
      heading: "Changes to these Terms",
      paragraphs: [
        "We may update these Terms from time to time — for example, if our service grows or the law changes. The current version will always be available on our website, with its effective date shown. If you continue to use Sukoon after we post an update, that means you accept the revised Terms.",
        "Effective date: 【Effective Date】.",
      ],
    },
  ],
};
