/**
 * Per-city SEO landing content for Sukoon's home-care service.
 *
 * Generated from drafted + adversarially-reviewed copy (honest non-clinical
 * framing, ₹ pricing, pay-after-approval). Each city is intentionally unique to
 * avoid duplicate-content dilution. Add a new city object to serve + prerender
 * a new /home-nursing/<slug> page automatically.
 */

export interface CityFaq {
  q: string;
  a: string;
}

export interface CitySection {
  heading: string;
  body: string;
}

export interface CityContent {
  slug: string;
  city: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubcopy: string;
  introParagraphs: string[];
  sections: CitySection[];
  localFaq: CityFaq[];
  primaryKeywords: string[];
  areasServed: string[];
}

export const cities: CityContent[] = [
  {
    "slug": "bangalore",
    "city": "Bangalore",
    "metaTitle": "Home Nurse & Caregiver at Home in Bangalore | Sukoon",
    "metaDescription": "Warm, verified caregivers for elderly & patient care at home in Bangalore. Nursing-style help from ₹1200/day. No payment till you approve. Book online.",
    "h1": "a home nurse & caregiver, at your door in bangalore",
    "heroSubcopy": "Warm, verified caregivers for elderly care, post-surgery recovery and everyday help at home — from Koramangala to Whitefield. We call to confirm, you approve who we assign, and you pay only after that. No card, no deposit at booking.",
    "introParagraphs": [
      "When someone you love needs a hand at home in Bangalore — an aging parent living alone while you work long hours, a family member recovering after surgery, or just a hard week that needs an extra pair of gentle hands — Sukoon brings a warm, verified caregiver to your door. People search for a \"home nurse in Bangalore\" or a \"nursing attendant at home,\" and what most homes actually need is exactly this: nursing-style, non-clinical care through the day and night.",
      "Our caregivers help with the everyday things that matter most — meals, bathing and hygiene, help to the washroom, medicine reminders, mobility support, light housekeeping and gentle companionship. It is honest, unhurried care that feels like family on the days you need it most. We serve homes and gated communities right across the city, so whether you're in Indiranagar, HSR Layout, Jayanagar or out near Electronic City, someone kind can reach you.",
      "Two things stay true, always. First, we're honest about what we are: our caregivers are not registered nurses and Sukoon is not a medical or emergency service — for any clinical procedure you'll still rely on a registered nurse or doctor. Second, there's nothing to pay when you book. We call you, personally assign a caregiver, tell you exactly who is coming, and you pay only after you approve them."
    ],
    "sections": [
      {
        "heading": "Nursing attendant & caretaker for elderly at home in Bangalore",
        "body": "Sukoon books caregivers for the everyday, non-clinical care that keeps a home running gently: cooked meals and feeding help, bathing and personal hygiene, help to and from the washroom, timely medicine reminders, support with walking and mobility, light housekeeping around the person being cared for, and warm company through the day. It's the kind of patient care at home that families in Bangalore ask for when a parent is frail, when someone is recovering after a hospital stay, or when the household simply needs steady, kind hands for a while. Every caregiver is ID-verified and personally known to our team — never an anonymous match from an algorithm."
      },
      {
        "heading": "the areas we cover in bangalore",
        "body": "We assign caregivers to homes and apartment complexes across the city — Koramangala, Indiranagar, HSR Layout, BTM Layout, Jayanagar, JP Nagar, Basavanagudi and Banashankari in the south and centre; Whitefield, Marathahalli, Bellandur, Sarjapur Road and Electronic City on the tech corridors; and Hebbal, Yelahanka, Malleshwaram, Rajajinagar and Bannerghatta Road too. Bangalore's traffic makes crossing the city for care exhausting, which is exactly why care that comes to you matters. Tell us your area and pincode when you book, and we'll match a caregiver who can reach your home comfortably."
      },
      {
        "heading": "how booking works — and why there's nothing to pay today",
        "body": "You book online in a couple of minutes: choose your care dates, add a few notes about what would help, set your preferred caregiver gender and language, and leave your name, phone or WhatsApp, home address, area and pincode. There is no payment at booking — no card, no deposit, and we never collect card details at all. Our team calls you, usually within a few hours, to confirm the details and coordinate with our staffing partner to assign a suitable caregiver. We tell you exactly who is coming, and you approve that person before anything proceeds. Only after you approve do we arrange payment, over WhatsApp — via UPI QR code, online transfer, or cash. If the caregiver isn't the right fit, tell us and we'll replace them."
      },
      {
        "heading": "honest pricing for bangalore",
        "body": "Our prices are shown as honest estimates and always confirmed on the human call — never a surprise invoice. Care Visit (4 hours) is around ₹1200/day, ideal for a one-off bad day or a daily check-in. Full Day (12 hours) is around ₹1859/day, our most popular cover for recovery or elderly care while the family steps away. 24-Hour Live-in is around ₹2299/day, round-the-clock presence with rest breaks for post-surgery recovery or when someone can't be left alone. Longer stays get a small discount, which we'll confirm on the call. You're free to change your dates or cancel before care begins, at no charge — and again, you pay only after you've approved the caregiver we assign."
      },
      {
        "heading": "24-hour attendants & live-in care",
        "body": "For families who need someone through the night — after a discharge from a hospital in Bangalore, or for an elderly parent who shouldn't be alone — our 24-hour live-in attendants stay present around the clock, with proper rest breaks built in. Many of our Bangalore families are adult children working in the city's tech offices, or living abroad while their parents stay here; a dependable day-and-night attendant means you can breathe a little easier. Mention urgent or same-day needs on the confirmation call and we'll do our best to move quickly."
      },
      {
        "heading": "a caregiver in the language your family is comfortable in",
        "body": "Bangalore speaks many tongues, and comfort matters most with personal care like bathing and hygiene. During booking you can request a preferred language — Kannada, Hindi, English, Tamil, Telugu or Malayalam — and a preferred caregiver gender, and we match your choice wherever possible. If we can't meet a preference exactly, we'll always call to talk it through before assigning anyone. No one arrives at your door as a stranger."
      },
      {
        "heading": "warm care, not clinical care — the honest bit",
        "body": "We choose our caregivers for kindness first, and we're straight with you about what that means. Sukoon provides nursing-style, non-clinical home care — everyday help, not medical treatment. Our caregivers are verified and personally known to us, but they are not registered nurses, and Sukoon is not a medical, clinical or emergency service. For injections, wound dressing, IV lines or any medical procedure, please rely on a registered nurse or doctor. If you tell us on the call that you need a qualified nurse, we'll guide you honestly rather than promise something we're not."
      }
    ],
    "localFaq": [
      {
        "q": "Which areas of Bangalore do you cover?",
        "a": "We assign caregivers across the city — Koramangala, Indiranagar, HSR Layout, BTM Layout, Jayanagar, JP Nagar, Whitefield, Marathahalli, Bellandur, Sarjapur Road, Electronic City, Hebbal, Yelahanka, Malleshwaram, Rajajinagar, Banashankari and Bannerghatta Road, including gated communities and apartment complexes. Just share your area and pincode when you book and we'll match a caregiver who can reach you comfortably."
      },
      {
        "q": "Are your caregivers registered nurses?",
        "a": "No — and we'd rather be honest about that. Our caregivers provide non-clinical, nursing-style care at home: meals, bathing and hygiene, help to the washroom, medicine reminders, mobility support, light housekeeping and gentle company. They aren't registered nurses, so for medical procedures please rely on a registered nurse or doctor. If you specifically need a qualified nurse, tell us on the call and we'll guide you."
      },
      {
        "q": "Can I get a caregiver who speaks Kannada, Tamil, Telugu or Hindi?",
        "a": "Yes. Bangalore is wonderfully multilingual, so during booking you can set a preferred language — Kannada, Hindi, English, Tamil, Telugu or Malayalam — and a preferred caregiver gender. We match your choice wherever we can, and if we can't, we'll call to talk it through before assigning anyone."
      },
      {
        "q": "My parents live alone in Bangalore while I'm away — can you help?",
        "a": "That's one of the most common reasons families come to us. Whether you're working across the city or living abroad, we call to confirm every detail, tell you exactly who we're assigning, and keep our support line open through the visit. You approve the caregiver before anything proceeds, so you always know who is with your parents."
      },
      {
        "q": "How soon can a caregiver reach us, given Bangalore traffic?",
        "a": "After you book, we call within a few hours to confirm and personally assign your caregiver, and we match someone who can reach your area comfortably. For same-day or urgent needs — say, right after a hospital discharge — mention it on the call and we'll do our best to move quickly. You pick the exact dates on the calendar when booking."
      },
      {
        "q": "Do I pay anything when I book?",
        "a": "No. There's no payment at booking, no deposit, and we never collect card details. You'll see honest price estimates first — Care Visit ₹1200/day, Full Day ₹1859/day, 24-Hour Live-in ₹2299/day, with a small discount for longer stays — and we confirm the final amount on the call. You pay only after you approve the caregiver we assign, handled over WhatsApp via UPI or cash."
      }
    ],
    "primaryKeywords": [
      "home nurse in Bangalore",
      "nursing attendant at home Bangalore",
      "caretaker for elderly at home Bangalore",
      "patient care at home Bangalore",
      "24 hour attendant Bangalore",
      "home caregiver Bangalore",
      "elderly care at home Bangalore",
      "post-surgery care at home Bangalore",
      "live-in attendant Bangalore",
      "old age home care Bangalore"
    ],
    "areasServed": [
      "Koramangala",
      "Indiranagar",
      "Whitefield",
      "HSR Layout",
      "Jayanagar",
      "JP Nagar",
      "Electronic City",
      "Marathahalli",
      "Bannerghatta Road",
      "Yelahanka",
      "BTM Layout",
      "Sarjapur Road",
      "Bellandur",
      "Hebbal",
      "Malleshwaram",
      "Rajajinagar",
      "Banashankari",
      "Basavanagudi"
    ]
  },
  {
    "slug": "delhi-ncr",
    "city": "Delhi NCR",
    "metaTitle": "Home Nurse & Elderly Caretaker in Delhi NCR | Sukoon",
    "metaDescription": "Verified caregivers for nursing-style home care across Delhi NCR — elderly care, post-surgery help & 24-hour live-in. Pay only after you approve.",
    "h1": "Home Nurse, Nursing Attendant & Caretaker for Elderly in Delhi NCR",
    "heroSubcopy": "Warm, verified caregivers who come to your family home across Gurgaon, Noida, Dwarka, Saket and beyond — for elderly care, post-surgery recovery and everyday help. No payment at booking. You approve the caregiver first, then pay over WhatsApp.",
    "introParagraphs": [
      "Delhi NCR runs on the daily commute. You leave early for the office in Cyber City or Sector 62, sit through the Gurgaon toll and the DND crawl, and by the time you are home your parents have already had a long, quiet day alone. Sukoon exists for exactly that gap — we send a warm, verified caregiver to your family home so that the person who raised you is looked after with patience and dignity while you are stuck in traffic or on a call.",
      "Just as many NCR families are split across continents. Your parents kept the house in Rohini, Vasant Kunj or a Noida high-rise, while you build a life in London, Toronto or the Bay Area. The distance makes ordinary things — a meal on time, help to the washroom, a steady arm on the stairs — feel impossibly far away. A Sukoon caregiver becomes the trusted set of hands you cannot be, and we keep you updated so you are never guessing at how the day went.",
      "We should be honest about what we are. Sukoon caregivers are not registered nurses and this is not a clinical, medical or emergency service. What our people are exceptionally good at is nursing-style everyday care — cooking and feeding, bathing and hygiene, washroom support, medicine reminders, help getting up and moving safely, light housekeeping around the elder, and simply sitting and talking. For injections, dressings, procedures or anything clinical, you should rely on a registered nurse or doctor; for everything human that fills the rest of the day, we are here.",
      "And we made booking feel safe, because handing a stranger the keys to your parents' home should never be a leap of faith. You pay nothing to book — no card, no deposit. Sukoon calls you to understand the situation, coordinates a suitable caregiver, and shares their details for you to approve. Only after you say yes does payment happen, over WhatsApp via UPI QR, online or cash. You are free to change or cancel any time before care begins."
    ],
    "sections": [
      {
        "heading": "Care across every corner of the NCR",
        "body": "Sukoon caregivers travel to homes right across the National Capital Region, so it does not matter which side of the ring road your family lives on. We serve Gurgaon and its condominium belt, Noida and Greater Noida, Dwarka's sector blocks, the leafy lanes of Saket and Vasant Kunj, the settled colonies of Rohini, and homes across Faridabad and Ghaziabad. Whether your mother is in a fourth-floor Noida flat with a temperamental lift or your father is in an independent Faridabad house, we match you with someone who can reach reliably and knows how to work within your building's rhythms and rules."
      },
      {
        "heading": "Care that works around the Gurgaon commute",
        "body": "The classic NCR situation is simple and stressful: the adult children are out of the house for ten or twelve hours because work is in Gurgaon, Cyber Hub or an office park off the Expressway, and the elders are home alone through the whole stretch. A four-hour Care Visit can cover the difficult morning — bathing, breakfast, medicines — before you leave, or a Full Day caregiver can bridge the entire office day so you commute without that knot in your stomach. When you finally clear the Gurgaon-Delhi border and walk in, your parent has been fed, kept company and kept safe, not left waiting."
      },
      {
        "heading": "Caregivers who speak your parents' language",
        "body": "Comfort in old age is often a matter of language. Our NCR caregivers speak Hindi, Punjabi and English, so your parents can be spoken to the way they have always been spoken to — a Punjabi grandmother teased gently in her own tongue, a father who slips between Hindi and English, elders who simply relax the moment they realise they will be understood. We factor language into every match, because being cared for by someone you can actually chat with turns a service into companionship."
      },
      {
        "heading": "Post-surgery and discharge recovery at home",
        "body": "Coming home after a hospital stay is when families feel the most exposed. The discharge summary lists medicines and precautions, but no one is home during the day to make sure the elder eats, takes their tablets on time, moves without falling, and stays clean and comfortable through a slow recovery. A Sukoon caregiver handles that everyday recovery load — meal prep, hygiene, gentle mobility support, medicine reminders and steady companionship — so healing happens calmly. For the clinical parts, dressings or anything a procedure requires, you continue to lean on a registered nurse or doctor; we handle the human hours in between."
      },
      {
        "heading": "24-hour live-in and overnight attendants",
        "body": "Some situations need someone there around the clock, and NCR nights can be long and worrying — a parent who wanders, who needs help to the washroom at 3am, who cannot be left alone after a fall. Our 24-Hour Live-in caregiver stays in the home for full-day and overnight cover, managing the whole daily routine and being present through the night for washroom trips, repositioning, water, reassurance and calm. It is the option most families abroad choose, because it means someone dependable is always in the house with their parents, not just during office hours."
      },
      {
        "heading": "Care through Delhi's brutal seasons",
        "body": "NCR weather makes leaving the house genuinely hard for older people. The summer touches the high forties and the air outside is punishing; the winter brings a damp, bone-cold fog and air quality that keeps elders indoors for weeks. In both extremes, getting a parent out to a facility or clinic for routine help is exhausting and sometimes unsafe. Home care solves that — the caregiver comes to your air-conditioned or heated home, so your parents get bathing, meals, movement and company without ever stepping into the heat or the smog."
      },
      {
        "heading": "Honest pricing, and you only pay after you approve",
        "body": "We keep our rates clear and our promises simple. A Care Visit of four hours is ₹1,200/day, a Full Day of twelve hours is ₹1,859/day, and a 24-Hour Live-in caregiver is ₹2,299/day. These are honest estimates that we confirm on a quick call once we understand your parent's needs, and there is a small discount for longer stays. Nothing is charged when you book — no card, no deposit. We confirm, coordinate a caregiver, and you approve them before a single rupee changes hands. Payment then happens over WhatsApp by UPI QR, online or cash, and you can change or cancel free of charge any time before care begins."
      }
    ],
    "localFaq": [
      {
        "q": "Are your caregivers registered nurses?",
        "a": "No, and we will always be straight with you about that. Sukoon caregivers are warm, verified, non-clinical helpers — they are not registered nurses, and we are not a medical or emergency service. They are excellent at nursing-style everyday care: bathing, feeding, hygiene, washroom help, medicine reminders, mobility support and companionship. If your parent needs clinical work — an injection, wound dressing, or anything a hospital like Medanta, Fortis or Max would handle — please rely on a registered nurse or doctor for that part, and let our caregiver manage the daily hours around it."
      },
      {
        "q": "Which areas of Delhi NCR do you cover?",
        "a": "We send caregivers across the whole NCR — Gurgaon, Noida and Greater Noida, Dwarka, Saket, Rohini, Faridabad, Ghaziabad and Vasant Kunj, along with the surrounding colonies and condominium complexes. When you call, just tell us your locality and building, and we will match you with a caregiver who can reach you reliably."
      },
      {
        "q": "My parents live in NCR while I'm abroad — can I arrange everything remotely?",
        "a": "Yes, and a large share of the families we help are exactly in your position — settled overseas while parents keep the family home in Rohini, Noida or Vasant Kunj. You can arrange the whole thing from another time zone: we speak with you, coordinate a caregiver, share their details for your approval, and keep you updated on how the day is going. Payment is over WhatsApp, so distance is never a barrier."
      },
      {
        "q": "What languages do your caregivers speak?",
        "a": "Our NCR caregivers speak Hindi, Punjabi and English, and we match based on what will make your parents most comfortable. If your mother is happiest in Punjabi or your father moves between Hindi and English, tell us and we will keep that front of mind when assigning someone."
      },
      {
        "q": "Can I get someone for overnight or 24-hour care?",
        "a": "Yes. Our 24-Hour Live-in caregiver stays in the home for full-day and overnight cover at ₹2,299/day, handling the daily routine and being present through the night for washroom trips, repositioning and reassurance. It is the option most families choose when a parent cannot safely be alone, especially those coordinating care from abroad."
      },
      {
        "q": "How and when do I pay?",
        "a": "You pay nothing to book — no card, no deposit. Sukoon calls to confirm the details, coordinates a caregiver, and shares who they are so you can approve them first. Only then do you pay, over WhatsApp via UPI QR, online or cash. You are free to change or cancel any time before care begins, and there is a small discount for longer stays."
      }
    ],
    "primaryKeywords": [
      "home nurse Delhi NCR",
      "nursing attendant Delhi NCR",
      "caretaker for elderly Delhi NCR",
      "elderly care at home Gurgaon",
      "24 hour attendant Delhi NCR",
      "live-in caregiver Noida",
      "post surgery care at home Delhi NCR",
      "home caregiver Dwarka"
    ],
    "areasServed": [
      "Gurgaon",
      "Noida",
      "Greater Noida",
      "Dwarka",
      "Saket",
      "Rohini",
      "Faridabad",
      "Ghaziabad",
      "Vasant Kunj"
    ]
  },
  {
    "slug": "pune",
    "city": "Pune",
    "metaTitle": "Home Nurse & Elderly Caretaker in Pune | Sukoon",
    "metaDescription": "Sukoon books verified caregivers for nursing-style home care in Pune — elderly care, post-surgery help & live-in support. No payment at booking.",
    "h1": "Home Nurse, Nursing Attendant & Caretaker for Elderly in Pune",
    "heroSubcopy": "Warm, verified caregivers for everyday elderly care, post-surgery recovery and live-in support at home in Pune — from Kothrud and Aundh to Baner, Wakad and NIBM Road. Book on a call, approve your caregiver, and only pay once you are happy. No card, no deposit at booking.",
    "introParagraphs": [
      "Pune has quietly become one of India's most-loved retirement cities, and it shows in every lane of Kothrud, Aundh and NIBM Road. Parents who spent a lifetime here now live comfortably in their own flats, close to familiar temples, gardens and morning-walk groups — while their children build careers in the IT parks of Hinjewadi and Wakad, or work abroad across different time zones. Sukoon exists for exactly this Pune: independent elders who want to stay in their own home, and families who want a trusted pair of hands looking after them day to day.",
      "Sukoon books warm, background-verified, non-clinical caregivers to your doorstep for elderly care, post-surgery recovery and everyday help. That means meals cooked the way your parents like them, help with bathing and hygiene, washroom assistance, timely medicine reminders, mobility and walking support, light housekeeping, and — just as importantly — real companionship for someone who may spend long hours alone while the family is at the office in Baner or on a video call from another country.",
      "We want to be honest about what Sukoon is and is not. Our caregivers are compassionate, trained attendants — they are NOT registered nurses, and Sukoon is not a medical, clinical or emergency service. We provide nursing-style everyday care: the patient, practical, hands-on help that keeps daily life dignified and safe. For injections, wound dressing, IV lines, or any medical procedure, you should rely on a registered nurse or your doctor. What we do brilliantly is everything around that care — the hours in between that decide whether an elder actually thrives at home.",
      "Because so many Pune families are managing care from a distance — from Hinjewadi, from Mumbai, or from overseas — we have made booking calm and commitment-free. There is no payment at the time of booking, no card, and no deposit. You tell us what you need, we call to understand the situation, we coordinate a suitable caregiver, you personally approve the person assigned to your family, and only then do you pay. You are free to change or cancel any time before care begins."
    ],
    "sections": [
      {
        "heading": "Elderly care at home across Pune's neighbourhoods",
        "body": "Sukoon caregivers reach families right across the city and its spread-out suburbs. In the classic residential belts of Kothrud, Aundh, Karve Nagar and NIBM Road — where so many retired parents live independently — we help with the steady rhythm of the day: morning routines, cooked meals, medicine reminders, a walk around the society garden, and someone to talk to. Across the IT corridor in Hinjewadi, Wakad, Baner and Balewadi, we support young families who need a dependable attendant for a parent or grandparent while they are at work. And in Viman Nagar, Kalyani Nagar, Hadapsar and the older Camp and Deccan areas, we cover both compact apartments and larger family bungalows. Wherever in Pune your loved one lives, we aim to send a caregiver who can travel reliably and settle into the household's routine."
      },
      {
        "heading": "Care that speaks your language — Marathi, Hindi and English",
        "body": "Comfort at home starts with being understood. Many Pune elders are most at ease in Marathi — it is the language of their prayers, their old friends, their favourite serials and their instructions in the kitchen. We do our best to match caregivers who can converse warmly in Marathi, Hindi or English, depending on what your parent prefers. For a family coordinating from abroad, this matters twice over: your mother chats comfortably in Marathi with her caregiver, while you get clear updates in English or Hindi over WhatsApp. Good care is not only about tasks completed — it is about an elder feeling genuinely heard by the person beside them."
      },
      {
        "heading": "24-hour and live-in attendants in Pune",
        "body": "When someone needs round-the-clock support — after a fall, following surgery, with advancing age, or simply because living alone has become unsafe — a Sukoon 24-Hour Live-in attendant stays in the home and cares through the day and night. This is the option Pune families reach for most when children are working in Hinjewadi or living overseas and cannot be there at 2 a.m. The live-in caregiver manages the full daily routine: meals, bathing and hygiene, washroom help, medicine reminders, mobility support, night-time turning or toilet help, and constant companionship. For shorter needs, our Full Day attendant covers the working hours while the family is out. If you are searching for a 24 hour attendant in Pune, this is where to start — and we will talk you through what a live-in arrangement realistically looks like before anything is confirmed."
      },
      {
        "heading": "Post-surgery and recovery help at home",
        "body": "Coming home after a procedure — a knee or hip replacement, cardiac care, a cataract operation, or a longer hospital stay — is often when families feel most stretched. Sukoon caregivers provide the nursing-style everyday support that recovery depends on: helping your parent move safely from bed to chair, assisting with bathing and washroom needs, keeping to the medicine-reminder schedule the doctor set, preparing light meals, and watching for the small changes that a recovering body shows. To be clear, our caregivers do not perform clinical tasks like dressing changes or injections — for those you would arrange a registered nurse. What we cover is the patient, hour-by-hour attention that makes healing at home calmer for the whole family."
      },
      {
        "heading": "Living with Pune's weather and pace",
        "body": "Pune is kind to elders in many ways — the pleasant winters, the leafy old neighbourhoods, the walkable societies of Aundh and Kothrud. But the pace still has its challenges. The heavy monsoon can make roads slippery and keep an elder housebound for days, the summer afternoons in Hadapsar and the eastern suburbs can be draining, and the sheer distance between suburbs means family cannot always drop in. A Sukoon caregiver becomes the steady daily presence through all of it: making sure meals and fluids happen in the heat, preventing falls on wet monsoon floors, and keeping an elder engaged and moving even on the days they cannot step out. It is continuity your parent can count on, whatever the season."
      },
      {
        "heading": "Honest, simple pricing",
        "body": "Sukoon keeps pricing straightforward so a family can plan without surprises. Our Care Visit of 4 hours is ₹1,200/day, ideal for topping up an elder's day with meals, a bath and medicine reminders. A Full Day of 12 hours is ₹1,859/day, which suits households where everyone is out at work in Baner or Hinjewadi. Our 24-Hour Live-in care is ₹2,299/day for continuous day-and-night support. These are honest estimates that we confirm on a call, once we understand exactly what your family needs, and there is a small discount for longer stays. No hidden charges, no fine print — just a fair rate for real, caring hours."
      },
      {
        "heading": "How booking works — approve first, pay later",
        "body": "We have deliberately removed every reason to hesitate. You reach out, and Sukoon calls you to understand the situation — the elder's needs, the neighbourhood, the hours, the languages spoken at home. We then coordinate a suitable caregiver and share the details with you. You personally approve the person assigned to your family before anyone begins. Only after care starts do you pay — over WhatsApp via UPI QR, online, or in cash, whatever is easiest. There is no payment at booking, no card on file, and no deposit. And you can change or cancel entirely free of charge before care begins."
      }
    ],
    "localFaq": [
      {
        "q": "Are your caregivers registered nurses?",
        "a": "No — and we are always upfront about this. Sukoon caregivers are warm, verified, trained attendants who provide nursing-style everyday care: meals, bathing and hygiene, washroom help, medicine reminders, mobility support and companionship. They are not registered nurses, and Sukoon is not a clinical or emergency service. For medical procedures — injections, IV lines, wound dressing — you should rely on a registered nurse or a doctor, for example through a hospital like Ruby Hall or Deenanath Mangeshkar. Think of us as the dependable daily care that surrounds any medical treatment your family arranges."
      },
      {
        "q": "Which areas of Pune do you cover?",
        "a": "We serve families right across the city, including Kothrud, Aundh, Baner, Wakad, Hinjewadi, Balewadi, Viman Nagar, Kalyani Nagar, Hadapsar, NIBM Road, Karve Nagar, Deccan and the Camp area. Whether your parent lives in an independent flat in Kothrud or a bungalow near NIBM Road, we work to send a caregiver who can travel reliably to that neighbourhood. Just tell us the exact locality when you call and we will confirm availability."
      },
      {
        "q": "Can the caregiver speak Marathi?",
        "a": "Yes, wherever possible. Many Pune elders are most comfortable in Marathi, and we do our best to match a caregiver who can converse warmly in Marathi, Hindi or English depending on your parent's preference. For families coordinating from Hinjewadi or from abroad, this lets your parent feel at home in their own language while you receive clear updates in the language you prefer."
      },
      {
        "q": "My parents live alone in Pune while I work abroad. Can you help?",
        "a": "This is exactly the situation Sukoon was built for. Pune is full of independent elders in Kothrud, Aundh and NIBM Road whose children work in the IT parks or overseas. We become your trusted presence on the ground — daily meals, hygiene, medicine reminders, mobility support and companionship — with regular updates over WhatsApp so you always know how your parent is doing. You can arrange and approve everything remotely, without needing to be in the city."
      },
      {
        "q": "Do you provide 24-hour or live-in care?",
        "a": "Yes. Our 24-Hour Live-in attendant stays in the home and supports your elder through the day and night — meals, bathing, washroom help, medicine reminders, night-time assistance and companionship — at ₹2,299/day. It is the most popular choice for families whose parents need continuous support but who cannot be physically present. We will walk you through exactly how a live-in arrangement works before anything is confirmed."
      },
      {
        "q": "How and when do I pay?",
        "a": "There is no payment at the time of booking — no card and no deposit. Sukoon calls to understand your needs, coordinates a caregiver, and you approve the person assigned to your family. Only after care begins do you pay, over WhatsApp via UPI QR, online, or in cash. You are free to change or cancel at no cost before care starts, so there is no risk in reaching out."
      }
    ],
    "primaryKeywords": [
      "home nurse Pune",
      "nursing attendant Pune",
      "caretaker for elderly Pune",
      "elderly care at home Pune",
      "24 hour attendant Pune",
      "live-in caregiver Pune",
      "post-surgery care at home Pune",
      "home care services Pune",
      "patient attendant Kothrud",
      "elder care Baner Hinjewadi"
    ],
    "areasServed": [
      "Kothrud",
      "Aundh",
      "Baner",
      "Wakad",
      "Hinjewadi",
      "Balewadi",
      "Viman Nagar",
      "Kalyani Nagar",
      "Hadapsar",
      "NIBM Road",
      "Karve Nagar",
      "Deccan",
      "Camp"
    ]
  },
  {
    "slug": "mumbai",
    "city": "Mumbai",
    "metaTitle": "Home Nurse & Elder Caretaker in Mumbai | Sukoon",
    "metaDescription": "Verified caregivers for nursing-style home care in Mumbai — elderly care, post-surgery help & 24-hour live-in support. No payment till you approve.",
    "h1": "Home Nurse, Nursing Attendant & Caretaker for Elderly in Mumbai — Warm, Verified Home Care",
    "heroSubcopy": "Sukoon books gentle, background-verified caregivers to your home across Mumbai — from Andheri and Bandra to Powai, Thane and Borivali — for elderly care, post-surgery recovery and everyday help. Non-clinical, nursing-style support you can count on. You approve the caregiver before you pay a rupee.",
    "introParagraphs": [
      "Mumbai runs on movement, but its elders often cannot. In compact flats from Dadar to Malad, in high-rises across Powai and Thane, and in the older buildings of Chembur and Bandra, families are stretched thin — a son in a nine-hour shift with a two-hour commute, a daughter across town in Andheri, grandchildren in school. Somewhere in the middle sits an ageing parent who needs a warm hand for meals, a bath, medicine reminders and simple company through a long day. Sukoon exists to put that warm hand in your home.",
      "We are honest about what we are. Sukoon caregivers are trained, verified, compassionate attendants — not registered nurses, and Sukoon is not a clinical, medical or emergency service. What our caregivers do beautifully is the everyday, dignity-preserving work that keeps an elder safe and comfortable: help with bathing and hygiene, washroom support, mobility and walking, timely medicine reminders, freshly made meals, light housekeeping and the kind of unhurried companionship that a busy Mumbai household simply cannot spare during the week.",
      "Booking is built for how Mumbai actually lives. You tell us the neighbourhood, the hours and the kind of help needed. We call to understand the situation, coordinate a caregiver who fits — including someone who speaks the language your parent is most at ease in — and you meet and approve that caregiver before anything is confirmed. There is no payment at booking, no card, no deposit. You pay only after you have approved the person coming to your door, over WhatsApp via UPI QR, online or cash. If plans change before care begins, you can adjust or cancel free.",
      "From the first monsoon showers that keep elders indoors for weeks to the crush of a weekday local, this city asks a lot of families. Sukoon takes one heavy thing off your plate — the daily, hands-on care of the person who raised you — and does it with the patience, respect and steadiness a Mumbai home deserves."
    ],
    "sections": [
      {
        "heading": "Care that fits Mumbai's neighbourhoods, flats and buildings",
        "body": "A caregiver's day looks different in a 500-square-foot flat in Dadar than in a Powai tower or a bungalow lane in Bandra — and we plan for it. Our caregivers are used to compact Mumbai homes where every task, from a sponge bath to helping an elder to the washroom, happens in tight, shared space with care and discretion. We serve families across Andheri (East and West), Bandra, Powai, Thane, Chembur, Borivali, Malad and Dadar, and the pockets around them, and we match on practicalities that matter here: how far the caregiver travels, whether the building has a working lift, and the hours that suit a household where the working members leave early and return late. The goal is simple — an elder who is never left to manage a long day alone, and a family that stops worrying every time they step into the office lift."
      },
      {
        "heading": "Built around Mumbai's long commutes and stretched-thin joint families",
        "body": "In this city, distance is measured in hours, not kilometres. A family living together in Malad can still be effectively absent all day — one member on the Western line, another driving to a park in the eastern suburbs, everyone home only after 8pm. Joint families that once shared the load now find every adult working, and the elder at home becomes the person no one has time for between 8am and 8pm. Sukoon fills exactly that gap. A Care Visit covers the hours you are away; a Full Day caregiver stays through the working day so meals, medicine reminders, bathing and movement all happen on time; and a live-in caregiver means someone is present overnight too. You get your commute and your job back without the guilt of a parent left alone."
      },
      {
        "heading": "24-hour and live-in attendants for round-the-clock peace of mind",
        "body": "Some situations need a presence that does not clock out. After a hospital discharge, during a fragile stretch of recovery, or when an elder is prone to falls or confusion at night, Sukoon arranges a 24-hour live-in attendant in Mumbai who stays in your home — managing the daily routine by day and being there for washroom trips, repositioning and reassurance at night. Live-in care is our ₹2,299/day plan, with a small discount on longer stays, and it is popular with families where everyone works and no one can take the night shift. To be clear, a live-in caregiver provides nursing-style everyday help and companionship, not clinical treatment — for injections, wound dressing, IV lines or any medical procedure you should engage a registered nurse or doctor. What we guarantee is that your parent is never alone through the small hours."
      },
      {
        "heading": "Care in the language your parent is most comfortable in",
        "body": "Comfort in old age is deeply tied to language — an elder relaxes when they are spoken to the way they were spoken to all their life. Mumbai is a city of many tongues, and we take this seriously when matching a caregiver. Our attendants across the city speak Marathi, Hindi, English and Gujarati, and we do our best to send someone who can chat, explain the day and share a joke in the language your parent prefers. For a Marathi-speaking grandmother in Dadar, a Gujarati household in Borivali, or an English-comfortable family in Bandra, this small match makes an enormous difference to how willingly an elder accepts help with bathing, meals and medicine."
      },
      {
        "heading": "Monsoon months and the seasons that keep Mumbai's elders indoors",
        "body": "For a good part of the year, Mumbai's weather decides what elders can and cannot do. Through the long monsoon, wet floors, slippery building lobbies and flooded lanes make it genuinely unsafe for an older person to step out — and many stay confined to the flat for weeks, missing walks, sunlight and the small errands that once gave their day shape. That confinement brings its own risks: stiffness, low mood, skipped meals, missed medicine. A Sukoon caregiver keeps the indoor days active and safe — gentle mobility inside the home, meals cooked fresh so no one has to brave the rain for tiffin, medicine reminders kept on schedule, and steady company so the monsoon months do not turn into lonely ones. When the weather clears, the same caregiver can support safe, supervised time in the building compound or garden."
      },
      {
        "heading": "Honest, upfront pricing — and you pay only after you approve the caregiver",
        "body": "No Mumbai family should have to guess at a bill or pay a stranger sight unseen. Sukoon's rates are plain: a 4-hour Care Visit is ₹1,200/day, a 12-hour Full Day is ₹1,859/day, and a 24-Hour Live-in is ₹2,299/day, with a small discount for long-stay bookings. These are honest estimates that we confirm with you on a call — no hidden add-ons sprung later. And the payment model is deliberately built on trust: nothing is due at booking, no card, no deposit. We call to confirm, coordinate a caregiver, and you meet and approve that specific person before any money changes hands. Only then do you pay — over WhatsApp via UPI QR, online transfer or cash, whatever suits you. Change your mind before care begins and you can adjust or cancel for free."
      },
      {
        "heading": "How booking a caregiver in Mumbai works",
        "body": "It takes one conversation to start. Tell us the neighbourhood — Andheri, Powai, Thane, Chembur or anywhere across the city — the hours you need and the kind of help required, whether that is post-surgery recovery, daily elder care or simply company and meals through the working day. We call to understand the details, including the language your parent prefers, and coordinate a verified caregiver who fits your home and schedule. You meet and approve that caregiver first. Care begins only once you are comfortable, and payment follows only after your approval. It is a calm, no-pressure process designed for families who are already juggling too much."
      }
    ],
    "localFaq": [
      {
        "q": "Are your caregivers registered nurses from hospitals like Hinduja or Kokilaben?",
        "a": "No, and we want to be completely honest about that. Sukoon caregivers are trained, background-verified attendants who provide nursing-style everyday help — bathing and hygiene, washroom support, mobility, meals, medicine reminders and companionship. They are not registered nurses and we are not affiliated with hospitals such as Hinduja, Kokilaben, Lilavati or Fortis. For medical procedures — injections, wound dressing, IV lines or any clinical treatment — you should rely on a registered nurse or doctor, or coordinate discharge care with your hospital. Sukoon handles the daily, hands-on comfort care around that."
      },
      {
        "q": "Which parts of Mumbai do you cover?",
        "a": "We serve families right across the city and suburbs — Andheri, Bandra, Powai, Thane, Chembur, Borivali, Malad and Dadar, along with the areas around them. When you call, just tell us your locality and building, and we will coordinate a caregiver who can reach you reliably given Mumbai's commute realities."
      },
      {
        "q": "Can the caregiver speak my parent's language?",
        "a": "Yes, wherever possible. Our caregivers across Mumbai speak Marathi, Hindi, English and Gujarati, and we try hard to match someone fluent in the language your parent is most comfortable in. An elder accepts help far more willingly when they can be spoken to the way they always have been, so we treat this as an important part of the match, not an afterthought."
      },
      {
        "q": "Do you provide 24-hour or live-in attendants?",
        "a": "Yes. Our 24-Hour Live-in plan is ₹2,299/day, with a small discount on longer stays. A live-in caregiver stays in your home and manages the daily routine through the day while being present overnight for washroom trips, repositioning and reassurance. This is nursing-style everyday care and companionship, not clinical treatment — for medical needs you would still engage a registered nurse or doctor."
      },
      {
        "q": "How and when do I pay?",
        "a": "There is no payment at booking — no card, no deposit. We call to confirm the details, coordinate a caregiver, and you meet and approve that specific person before anything is due. Only after your approval do you pay, over WhatsApp via UPI QR, online transfer or cash. You are free to change or cancel before care begins at no charge."
      },
      {
        "q": "My whole family works long hours — can care run through the full day while we are out?",
        "a": "That is exactly what most Mumbai families book us for. Our Full Day plan (12 hours, ₹1,859/day) covers the stretch when everyone is commuting and at work, so meals, bathing, medicine reminders and mobility all happen on schedule and your parent is never left alone through a long day. If you need overnight cover as well, the live-in plan extends that presence to 24 hours."
      }
    ],
    "primaryKeywords": [
      "home nurse Mumbai",
      "nursing attendant Mumbai",
      "caretaker for elderly Mumbai",
      "24 hour attendant Mumbai",
      "elderly care at home Mumbai",
      "live-in caregiver Mumbai",
      "post-surgery care at home Mumbai",
      "patient care attendant Mumbai",
      "home care services Mumbai",
      "elder care Andheri Bandra Powai"
    ],
    "areasServed": [
      "Andheri",
      "Bandra",
      "Powai",
      "Thane",
      "Chembur",
      "Borivali",
      "Malad",
      "Dadar"
    ]
  },
  {
    "slug": "hyderabad",
    "city": "Hyderabad",
    "metaTitle": "Home Nurse & Elderly Caretaker in Hyderabad | Sukoon",
    "metaDescription": "Verified caregivers for nursing-style home care in Hyderabad — elderly care, post-surgery help & 24-hour live-in. Pay only after you approve.",
    "h1": "Home Nurse, Nursing Attendant & Caretaker for Elderly in Hyderabad",
    "heroSubcopy": "Warm, verified caregivers for everyday home care across Gachibowli, Madhapur, Banjara Hills and all of Hyderabad — bathing, meals, mobility and companionship. Not a clinical service. No payment until you meet and approve your caregiver.",
    "introParagraphs": [
      "Hyderabad grew up fast. In the space of a generation, the stretch from HITEC City through Madhapur, Kondapur and the Financial District turned into one of India's biggest tech corridors — and it pulled a whole generation of adult children into long office hours in Gachibowli, or across time zones in the US. Meanwhile their parents often stayed put in Malakpet, Tolichowki, Secunderabad or the lanes of the old city near Charminar. That gap — geographic and emotional — is exactly where Sukoon helps. We place a caring, dependable person beside your elder so that distance never has to mean neglect.",
      "Sukoon books warm, background-verified caregivers to your family's home for elderly care, post-surgery recovery, and the ordinary day-to-day help that keeps someone comfortable and safe: help with bathing and hygiene, washroom support, cooked meals, timely medicine reminders, help getting up and moving around the house, light housekeeping, and simple, patient companionship. Think of it as a steady hand and a kind face for the hours you cannot be there yourself.",
      "Let us be honest about what we are, because your family deserves clarity. Our caregivers are not registered nurses, and Sukoon is not a medical, clinical, or emergency service. We provide nursing-style everyday help — the practical, human care that fills the hours between doctor visits. If your parent needs an injection, an IV line, wound dressing, or any clinical procedure, that must come from a registered nurse or doctor. We will happily work alongside the medical team you already trust; we simply do not replace them.",
      "For families spread between the old city and the new — parents near Charminar, a son in Kukatpally, a daughter in San Jose — we make the arrangement simple and low-risk. You tell us what your elder needs, we understand the household, and we coordinate a caregiver who fits. Our team speaks Telugu, Hindi, Urdu and English, so your parent is cared for in the language they are most comfortable in, not one they have to strain to follow."
    ],
    "sections": [
      {
        "heading": "Home care across every corner of Hyderabad",
        "body": "We coordinate caregivers right across the city and its two halves. In the tech belt — Gachibowli, Madhapur, Kondapur, Hitech City, Nanakramguda and the wider Financial District — we support young families whose parents have moved in, or elders living alone while their children work nearby. In the established residential pockets of Banjara Hills and Jubilee Hills, we help long-settled families who want discreet, respectful care at home. Out towards Kukatpally, Miyapur and the KPHB stretch, and across the older neighbourhoods of Secunderabad, Malakpet, Tolichowki and the lanes around the old city, we place caregivers who know how to move gently through a joint family home. Wherever your elder lives, the aim is the same: someone patient, verified and genuinely kind, close at hand."
      },
      {
        "heading": "When adult children live in Gachibowli — or abroad",
        "body": "This is the most common Sukoon story in Hyderabad. The children built careers along the ORR — in Gachibowli, DLF, the Financial District — or they went further, to the US and beyond. The parents are in the family home, independent but slowing down, and there is no daughter-in-law at home all day like there used to be. What families ask us for is not just tasks; it is presence. A caregiver who notices your father skipped lunch, who reminds your mother about her BP tablet, who helps them bathe without a fall, and who sends you a quick WhatsApp update so you can breathe easier during your standup. We build the arrangement so the relative overseas can book, approve and pay entirely by phone — no need to fly down to set things up."
      },
      {
        "heading": "What our caregivers do, day to day",
        "body": "Everyday, non-clinical care is our whole focus. That means help bathing and staying clean and dry, dignified washroom and toilet help, dressing, and grooming. It means home-cooked meals prepared to your family's taste and served on time, gentle feeding help when needed, and steady hydration through Hyderabad's hot months. It means medicine reminders exactly on schedule (we prompt and hand over the dose — we do not give injections or manage clinical treatment). It means a supporting arm for walking, moving from bed to chair, and safe movement around the house to prevent falls. And it means the quieter things: light housekeeping around the person, tidy surroundings, and real companionship — conversation, a shared cup of chai, someone who listens."
      },
      {
        "heading": "24-hour live-in and full-day attendants",
        "body": "For elders who cannot safely be alone — after a fall, after surgery, or as age advances — a 24-hour live-in attendant in Hyderabad gives round-the-clock reassurance. Your caregiver stays in the home, helps through the night with washroom trips and repositioning, and keeps a steady, watchful presence so the family can finally sleep. If you need heavy daytime cover but not overnight, our Full Day (12-hour) option carries the household through the demanding hours — the morning bath, meals, medicine times and afternoon rest. Many families begin with a Care Visit to build trust, then move to full-day or live-in as needs grow. You can adjust the plan as your parent's needs change; nothing is locked in."
      },
      {
        "heading": "Post-surgery and recovery support at home",
        "body": "Coming home from a hospital stay — whether a knee replacement, a cardiac procedure, or a general operation — is when families in Hyderabad feel most stretched. The discharge summary lists things to watch, but someone has to actually be there to help your parent sit up, walk to the washroom, eat properly, take medicines on time, and rest without straining. That is where our caregivers shine: patient, attentive, everyday recovery support at home. To be completely clear, clinical tasks — dressing surgical wounds, injections, drains, catheter care — remain with a registered nurse or your treating doctor. We handle the human side of recovery so your family can focus on healing, and we coordinate smoothly around whatever medical care your elder is already receiving."
      },
      {
        "heading": "Care in the language your parent is comfortable in",
        "body": "Hyderabad speaks many tongues, and good care listens in the right one. Our caregivers include Telugu, Hindi, Urdu and English speakers, so we can match someone your elder can talk to naturally — whether that is Deccani Urdu in the old city, Telugu in a Kukatpally home, or English for a family used to it in Jubilee Hills. Comfort in language is not a small thing for an older person: it is the difference between being managed and being understood. When we coordinate a caregiver, language preference is one of the first things we ask about."
      },
      {
        "heading": "Honest pricing, and you pay only after you approve",
        "body": "Our rates are simple and we quote them plainly, in rupees, with no hidden extras. A Care Visit (4 hours) is ₹1,200/day, a Full Day (12 hours) is ₹1,859/day, and a 24-Hour Live-in is ₹2,299/day. These are honest estimates that we confirm on a quick call once we understand your parent's needs, and there is a small discount for longer stays. Here is the part Hyderabad families appreciate most: you pay nothing at the time of booking — no card, no deposit, no advance. We call to confirm the details, coordinate a suitable caregiver, and you personally approve the person assigned to your home. Only then do you pay — over WhatsApp via UPI QR, online, or cash, whichever suits you. You are free to change or cancel any time before care begins, at no cost."
      }
    ],
    "localFaq": [
      {
        "q": "Are your caregivers registered nurses from hospitals like Apollo or KIMS?",
        "a": "No, and we want to be honest about that. Our caregivers are warm, background-verified attendants for everyday, non-clinical home care — they are not registered nurses, and Sukoon is not affiliated with hospitals such as Apollo, KIMS, Yashoda or Care. For clinical procedures — injections, IV lines, wound dressing, or anything requiring medical training — you should rely on a registered nurse or your doctor. We provide nursing-style daily help: bathing, meals, mobility, medicine reminders and companionship, and we are glad to work alongside your existing medical team."
      },
      {
        "q": "Which areas of Hyderabad do you cover?",
        "a": "We coordinate caregivers across the whole city — Gachibowli, Madhapur, Kondapur, Hitech City and the Financial District in the tech belt; Banjara Hills and Jubilee Hills; Kukatpally, Miyapur and KPHB; and the older neighbourhoods of Secunderabad, Malakpet, Tolichowki and the old city. If you are just outside these areas, call us anyway — we will tell you honestly whether we can help."
      },
      {
        "q": "I live in the US and my parents are in Hyderabad. Can I arrange everything remotely?",
        "a": "Yes — this is one of the most common situations we handle. You can book, speak with us, approve the assigned caregiver, and pay entirely by phone and WhatsApp, without being in India. We share regular updates so you always know how your parent is doing, and we schedule our confirmation calls around your time zone wherever possible."
      },
      {
        "q": "Can I get a caregiver who speaks my parent's language?",
        "a": "Absolutely. Our caregivers include Telugu, Hindi, Urdu and English speakers. Comfort in the right language matters enormously for an older person, so we ask about language preference upfront and match accordingly — whether your parent is most at ease in Telugu, Deccani Urdu, Hindi or English."
      },
      {
        "q": "Do I have to pay in advance to book?",
        "a": "No. There is no payment at booking, no card, and no deposit. We call to confirm the details, coordinate a caregiver, and only after you meet and approve the assigned person do you pay — via UPI QR on WhatsApp, online, or cash. You can change or cancel free of charge any time before care begins."
      },
      {
        "q": "Can you provide someone overnight or 24 hours for an elderly parent living alone?",
        "a": "Yes. Our 24-Hour Live-in caregiver stays in the home and provides round-the-clock support, including help through the night with washroom trips and repositioning. It is ideal for elders who cannot safely be alone — after a fall, after surgery, or as age advances. If you need only daytime cover, our 12-hour Full Day option is a good fit, and you can scale up to live-in whenever needs change."
      }
    ],
    "primaryKeywords": [
      "home nurse Hyderabad",
      "nursing attendant Hyderabad",
      "caretaker for elderly Hyderabad",
      "24 hour attendant Hyderabad",
      "elderly home care Gachibowli",
      "live-in caregiver Hyderabad",
      "post surgery care at home Hyderabad",
      "patient attendant Madhapur",
      "home care Banjara Hills",
      "elder care Kondapur"
    ],
    "areasServed": [
      "Gachibowli",
      "Madhapur",
      "Kondapur",
      "Banjara Hills",
      "Jubilee Hills",
      "Kukatpally",
      "Miyapur",
      "Hitech City",
      "Financial District",
      "Nanakramguda",
      "KPHB",
      "Secunderabad",
      "Malakpet",
      "Tolichowki",
      "Old City"
    ]
  }
];

export const citySlugs: string[] = cities.map((c) => c.slug);

export function getCity(slug: string | undefined): CityContent | undefined {
  return cities.find((c) => c.slug === slug);
}
