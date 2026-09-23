import {
  Accessibility,
  Bandage,
  BedDouble,
  GlassWater,
  HandHeart,
  HeartHandshake,
  MessageCircleHeart,
  Pill,
  ShowerHead,
  Soup,
  SprayCan,
  Thermometer,
  Toilet,
  Utensils,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface CareTask {
  id: string;
  label: string;
  icon: LucideIcon;
  /** Selecting these surfaces the "experienced with recovery & elderly" reassurance. */
  tender?: boolean;
}

export const careTasks: CareTask[] = [
  { id: "meals", label: "Cook fresh meals & soup", icon: Soup },
  { id: "feeding", label: "Feeding assistance", icon: Utensils },
  { id: "hydration", label: "Bring water & keep hydrated", icon: GlassWater },
  { id: "medicine", label: "Medicine reminders", icon: Pill },
  { id: "washroom", label: "Help to the washroom", icon: Toilet },
  { id: "bathing", label: "Bathing & hygiene help", icon: ShowerHead },
  { id: "linen", label: "Change bedsheets & fresh linen", icon: BedDouble },
  { id: "housekeeping", label: "Light housekeeping", icon: SprayCan },
  { id: "mobility", label: "Mobility & walking support", icon: Accessibility },
  { id: "recovery", label: "Post-surgery & recovery care", icon: Bandage, tender: true },
  { id: "elderly", label: "Elderly & senior care", icon: HandHeart, tender: true },
  { id: "companionship", label: "Companionship & conversation", icon: MessageCircleHeart },
  { id: "emotional", label: "Emotional support & reassurance", icon: HeartHandshake },
  { id: "vitals", label: "Basic vitals check (temp / BP)", icon: Thermometer },
];
