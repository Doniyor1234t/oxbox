import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import languagedetector from "i18next-browser-languagedetector";
// import Backend from "i18next-http-backend";
// const LanguageDetector = languagedetector.LanguageDetector;

import translation_ru from "./translations/ru/translation.json";
import translation_en from "./translations/en/translation.json";
import translation_uz from "./translations/uz/translation.json";

i18next
  .use(initReactI18next)
  .use(languagedetector)
  // .use(Backend)
  .init({
    // debug: true,
    fallbackLng: "uz",
    // lng: "uz",
    resources: {
      en: {
        translation: translation_en,
      },
      ru: {
        translation: translation_ru,
      },
      uz: {
        translation: translation_uz,
      }
    },
    // saveMissing: true,
  });
