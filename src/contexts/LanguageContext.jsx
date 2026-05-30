import { createContext, useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    // Sync state with i18n language
    setCurrentLanguage(i18n.language);

    // Update HTML attributes
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";

    // Listen for language changes
    const handleLanguageChange = (lng) => {
      console.log("Language changed to:", lng);
      setCurrentLanguage(lng);
      document.documentElement.lang = lng;
      document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    };

    i18n.on("languageChanged", handleLanguageChange);

    // Cleanup
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  const changeLanguage = async (language) => {
    try {
      console.log("Changing language to:", language);
      await i18n.changeLanguage(language);
      localStorage.setItem("i18nextLng", language);
    } catch (error) {
      console.error("Error changing language:", error);
    }
  };

  const value = {
    currentLanguage,
    changeLanguage,
    isHindi: currentLanguage === "hi",
    isEnglish: currentLanguage === "en",
    languages: {
      en: "English",
      hi: "हिंदी",
    },
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
