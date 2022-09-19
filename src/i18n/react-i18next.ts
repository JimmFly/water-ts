import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const DetectorOptions = {
  // order and from where user language should be detected
  order: ["path"],

  // keys or params to lookup language from

  lookupFromPathIndex: 0,

  // cache user language on
  caches: [], // languages to not persist (cookie, localStorage)

  // optional htmlTag with lang attribute, the default is:
};

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: "en",
  detection: DetectorOptions,
  // resources,
});
export default i18n;
