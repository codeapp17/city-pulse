import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home_title: "Find Events Near You",
      search: "Search",
    },
  },
  ar: {
    translation: {
      home_title: "ابحث عن فعاليات بالقرب منك",
      search: "بحث",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: "v4",
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
