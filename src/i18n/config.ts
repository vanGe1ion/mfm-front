import i18n from "i18next";
import translationEn from "./en/translation.json";
import translationRu from "./ru/translation.json";
import { initReactI18next } from "react-i18next";
import { LANGUAGE } from "@config";

export const resources = {
  en: {
    translation: translationEn,
  },
  ru: {
    translation: translationRu,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
  resources,
});
