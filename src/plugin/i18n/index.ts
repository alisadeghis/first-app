import enLocale from "@/locale/en";
import faLocale from "@/locale/fa";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

export const i18nObject = i18n.use(initReactI18next);

export const registerI18n = () => {
  i18nObject.init({
    fallbackLng: "en",
    // debug: process.env.NODE_ENV === "development",
    detection: {
      caches: ["localStorage", "cookie"],
      lookupLocalStorage: "lng",
      lookupCookie: "lng",
      cookieMinutes: 1000,
      order: ["localStorage", "cookie"],
    },

    react: {
      bindI18n: "languageChanged loaded",
      nsMode: "default",
      useSuspense: true,
    },
    interpolation: {
      escapeValue: false,
    },
  });
  const { ready } = useTranslation();
  if (ready) {
    addTranslationSchema("fa", faLocale);
    addTranslationSchema("en", enLocale);
  }
};

export const addTranslationSchema = (locale: "fa" | "en", resources: any) => {
  i18nObject.addResourceBundle(locale, "translation", resources, true, true);
};
