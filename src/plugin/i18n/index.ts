
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next, useTranslation } from "react-i18next";
export const i18nObject = i18n
  .use(initReactI18next)
  // .use(HttpApi)
  .use(LanguageDetector);

i18nObject.init({
  supportedLngs: ["en", "fa"], // زبان‌های پشتیبانی‌شده
  fallbackLng: "en",
  // debug: process.env.NODE_ENV === "development",
  detection: {
    caches: ["localStorage", "cookie"],
    order: ["querystring", "cookie", "localStorage", "navigator"],
    lookupLocalStorage: "lng",
    lookupCookie: "lng",
    cookieMinutes: 1000,
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

export const addTranslationSchema = (locale: "fa" | "en", resources: any) => {
  i18nObject.addResourceBundle(locale, "translation", resources, true, true);
};
