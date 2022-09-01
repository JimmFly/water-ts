import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en_US from "./en.json";
import zh_CN from "./zh.json";

const resources = {
  en: en_US,
  zh: zh_CN,
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "zh",
    resources,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
export default i18n;
