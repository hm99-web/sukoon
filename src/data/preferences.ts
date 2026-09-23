export const languages = [
  "Hindi",
  "English",
  "Bengali",
  "Marathi",
  "Telugu",
  "Tamil",
  "Gujarati",
  "Kannada",
  "Malayalam",
  "Punjabi",
  "Urdu",
  "Odia",
  "Any language is fine",
];

export type Gender = "female" | "male" | "any";

export const genderOptions: { value: Gender; label: string }[] = [
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
  { value: "any", label: "No preference" },
];

export const recipientOptions = [
  { value: "parent", label: "My parent" },
  { value: "grandparent", label: "My grandparent" },
  { value: "spouse", label: "My spouse / partner" },
  { value: "myself", label: "Myself" },
  { value: "other", label: "Someone else" },
];

export const ageBands = ["Under 18", "18–40", "41–60", "61–75", "75+"];

export const intensityOptions = [
  { value: "few_hours", label: "A few hours a day" },
  { value: "most_day", label: "Most of the day" },
  { value: "overnight", label: "Overnight support" },
];
