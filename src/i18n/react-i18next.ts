import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
// import en_US from "./resource/en.json";
// import zh_CN from "./resource/zh.json";

// const resources = {
//   en: { translation: en_US },
//   zh: { translation: zh_CN },
// } as const;

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "zh",
    // resources,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
export default i18n;
