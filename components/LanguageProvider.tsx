"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Locale, TRANSLATIONS, TranslationContent } from "@/lib/i18n";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (loc: Locale) => void;
  t: TranslationContent;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "en",
  setLocale: () => {},
  t: TRANSLATIONS.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("lingora_locale") as Locale | null;
      if (saved && (saved === "en" || saved === "ru" || saved === "tj")) {
        setLocaleState(saved);
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  const setLocale = (loc: Locale) => {
    setLocaleState(loc);
    try {
      window.localStorage.setItem("lingora_locale", loc);
    } catch {
      // Ignore storage errors
    }
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: TRANSLATIONS[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
