import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import zh from "./zh.json";

export const resources = {
  en: {
    translation: en,
  },
  zh: {
    translation: zh,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: "en",
  resources,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});
