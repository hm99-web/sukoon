import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from "react";

import { DEFAULT_SHIFT, type ShiftTier } from "@/data/pricing";
import type { Gender } from "@/data/preferences";

/**
 * The booking draft. Dates are ISO date strings (yyyy-mm-dd, date-only) so the
 * draft survives a JSON round-trip to localStorage cleanly.
 */
export interface BookingDraft {
  startDate: string | null;
  endDate: string | null;
  shift: ShiftTier["key"];
  tasks: string[];
  notes: string;
  gender: Gender;
  languages: string[];
  recipient: string | null;
  relationship: string;
  ageBand: string | null;
  name: string;
  phone: string;
  whatsappSame: boolean;
  addressLine: string;
  area: string;
  pincode: string;
  saveContact: boolean;
}

export const emptyDraft: BookingDraft = {
  startDate: null,
  endDate: null,
  shift: DEFAULT_SHIFT,
  tasks: [],
  notes: "",
  gender: "any",
  languages: [],
  recipient: null,
  relationship: "",
  ageBand: null,
  name: "",
  phone: "",
  whatsappSame: true,
  addressLine: "",
  area: "",
  pincode: "",
  saveContact: false,
};

type Action =
  | { type: "patch"; patch: Partial<BookingDraft> }
  | { type: "toggleTask"; id: string }
  | { type: "toggleLanguage"; lang: string }
  | { type: "reset" }
  | { type: "hydrate"; draft: BookingDraft };

function reducer(state: BookingDraft, action: Action): BookingDraft {
  switch (action.type) {
    case "patch":
      return { ...state, ...action.patch };
    case "toggleTask":
      return {
        ...state,
        tasks: state.tasks.includes(action.id)
          ? state.tasks.filter((t) => t !== action.id)
          : [...state.tasks, action.id],
      };
    case "toggleLanguage": {
      const isAny = action.lang === "Any language is fine";
      if (isAny)
        return {
          ...state,
          languages: state.languages.includes(action.lang) ? [] : [action.lang],
        };
      const withoutAny = state.languages.filter(
        (l) => l !== "Any language is fine",
      );
      return {
        ...state,
        languages: withoutAny.includes(action.lang)
          ? withoutAny.filter((l) => l !== action.lang)
          : [...withoutAny, action.lang],
      };
    }
    case "hydrate":
      return action.draft;
    case "reset":
      return emptyDraft;
    default:
      return state;
  }
}

const DRAFT_KEY = "sukoon.booking.draft.v1";
const CONTACT_KEY = "sukoon.saved.contact.v1";

interface SavedContact {
  name: string;
  phone: string;
  addressLine: string;
  area: string;
  pincode: string;
}

interface BookingContextValue {
  draft: BookingDraft;
  patch: (patch: Partial<BookingDraft>) => void;
  toggleTask: (id: string) => void;
  toggleLanguage: (lang: string) => void;
  reset: () => void;
  savedContact: SavedContact | null;
  applySavedContact: () => void;
  persistContact: () => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

function loadDraft(): BookingDraft {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return emptyDraft;
    return { ...emptyDraft, ...(JSON.parse(raw) as Partial<BookingDraft>) };
  } catch {
    return emptyDraft;
  }
}

function loadContact(): SavedContact | null {
  try {
    const raw = localStorage.getItem(CONTACT_KEY);
    return raw ? (JSON.parse(raw) as SavedContact) : null;
  } catch {
    return null;
  }
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [draft, dispatch] = useReducer(reducer, emptyDraft);
  const savedContact = useRef<SavedContact | null>(null);

  // Hydrate from localStorage once on mount (never lose the user's work).
  useEffect(() => {
    dispatch({ type: "hydrate", draft: loadDraft() });
    savedContact.current = loadContact();
  }, []);

  // Autosave every change.
  useEffect(() => {
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    } catch {
      /* storage full / unavailable — non-fatal */
    }
  }, [draft]);

  const patch = useCallback(
    (p: Partial<BookingDraft>) => dispatch({ type: "patch", patch: p }),
    [],
  );
  const toggleTask = useCallback(
    (id: string) => dispatch({ type: "toggleTask", id }),
    [],
  );
  const toggleLanguage = useCallback(
    (lang: string) => dispatch({ type: "toggleLanguage", lang }),
    [],
  );
  const reset = useCallback(() => {
    dispatch({ type: "reset" });
    try {
      localStorage.removeItem(DRAFT_KEY);
    } catch {
      /* noop */
    }
  }, []);

  const applySavedContact = useCallback(() => {
    if (savedContact.current) patch(savedContact.current);
  }, [patch]);

  const persistContact = useCallback(() => {
    const c: SavedContact = {
      name: draft.name,
      phone: draft.phone,
      addressLine: draft.addressLine,
      area: draft.area,
      pincode: draft.pincode,
    };
    try {
      localStorage.setItem(CONTACT_KEY, JSON.stringify(c));
      savedContact.current = c;
    } catch {
      /* noop */
    }
  }, [draft]);

  const value = useMemo<BookingContextValue>(
    () => ({
      draft,
      patch,
      toggleTask,
      toggleLanguage,
      reset,
      savedContact: savedContact.current,
      applySavedContact,
      persistContact,
    }),
    [draft, patch, toggleTask, toggleLanguage, reset, applySavedContact, persistContact],
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within a BookingProvider");
  return ctx;
}

/** Parse an ISO date-only string into a local Date (noon avoids TZ drift). */
export function parseDate(iso: string | null): Date | null {
  if (!iso) return null;
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d, 12);
}

export function toISODate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
