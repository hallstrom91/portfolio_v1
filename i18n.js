import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import combinedSV from "./src/locales/sv/translationSV.json";
import combinedEN from "./src/locales/en/translationEN.json";

const resources = {
  sv: { translation: combinedSV },
  en: { translation: combinedEN },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "sv",
  fallbackLng: "en",
});

export default i18n;
