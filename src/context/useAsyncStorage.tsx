// AppContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { I18nManager } from "react-native";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../config/firebase";

type AppContextType = {
  language: "en" | "ar";
  user: User | null;
  loading: boolean;
  setLanguage: (lang: "en" | "ar") => Promise<void>;
  setUser: (user: User | null) => Promise<void>;
};

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<"en" | "ar">("en");
  const [user, setUserState] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Load initial data from AsyncStorage
  useEffect(() => {
    (async () => {
      const storedLang = await AsyncStorage.getItem("LANG");
      const storedUser = await AsyncStorage.getItem("USER");
      
      if (storedLang) {
        setLanguageState(storedLang as "en" | "ar");
        I18nManager.allowRTL(storedLang === "ar");
        I18nManager.forceRTL(storedLang === "ar");
      }
      if (storedUser) {
        setUserState(JSON.parse(storedUser));
      }
      setLoading(false);
      return onAuthStateChanged(auth, (u) => setUser(u));
    })();
  }, []);

  // Save language
  const setLanguage = async (lang: "en" | "ar") => {
    setLanguageState(lang);
    await AsyncStorage.setItem("LANG", lang);
  };

  // Save user
  const setUser = async (userData: User | null) => {
    setUserState(userData);
    if (userData) {
      console.log("savingUser", userData)
      await AsyncStorage.setItem("USER", JSON.stringify(userData));
    } else {
      await AsyncStorage.removeItem("USER");
    }
  };

  return (
    <AppContext.Provider
      value={{ language, user, loading, setLanguage, setUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook
export const useAsyncStorage = () => useContext(AppContext)!;
