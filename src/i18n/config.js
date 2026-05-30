import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import commonEN from "../locales/en/common.json";
import commonHI from "../locales/hi/common.json";
import navbarEN from "../locales/en/navbar.json";
import navbarHI from "../locales/hi/navbar.json";
import homeEN from "../locales/en/home.json";
import homeHI from "../locales/hi/home.json";
import aboutEN from "../locales/en/about.json";
import aboutHI from "../locales/hi/about.json";
import servicesEN from "../locales/en/services.json";
import servicesHI from "../locales/hi/services.json";
import contactEN from "../locales/en/contact.json";
import contactHI from "../locales/hi/contact.json";
import pagesEN from "../locales/en/pages.json";
import pagesHI from "../locales/hi/pages.json";

// Translation resources
const resources = {
  en: {
    common: commonEN,
    navbar: navbarEN,
    home: homeEN,
    about: aboutEN,
    services: servicesEN,
    contact: contactEN,
    pages: pagesEN,
  },
  hi: {
    common: commonHI,
    navbar: navbarHI,
    home: homeHI,
    about: aboutHI,
    services: servicesHI,
    contact: contactHI,
    pages: pagesHI,
  },
};

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources,
    fallbackLng: "en",
    lng: localStorage.getItem("i18nextLng") || "en", // Set initial language
    defaultNS: "common",
    ns: ["common", "navbar", "home", "about", "services", "contact", "pages"],

    debug: false,

    interpolation: {
      escapeValue: false, // React already escapes values
    },

    detection: {
      // Order of language detection
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },

    react: {
      useSuspense: false,
      bindI18n: "languageChanged",
      bindI18nStore: "",
      transEmptyNodeValue: "",
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
    },

    // Load path config
    load: "languageOnly", // only load 'en' not 'en-US'

    // Clean code
    cleanCode: true,
  });

export default i18n;
