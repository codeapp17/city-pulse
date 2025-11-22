import { I18nManager } from "react-native";
import i18n from "../i18n";

export const useLanguageToggle = () => {
  
  const toggleLanguage = async () => {
    const isArabic = i18n.language === "ar";
    const nextLang = isArabic ? "en" : "ar";

    await i18n.changeLanguage(nextLang);
    
    const shouldUseRTL = nextLang === "ar";
    I18nManager.allowRTL(shouldUseRTL);
    I18nManager.forceRTL(shouldUseRTL);
  };

  return { toggleLanguage };
};
