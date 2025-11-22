// src/navigation/HomeNavigator.tsx
import React, { useEffect } from "react";
import { I18nManager, StyleSheet, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import EventDetail from "../screens/EventDetails";
import AppText from "../components/AppText";
import i18n from "../i18n";
import { useLanguageToggle } from "../hooks/useLanguageToggle";
import { useAsyncStorage } from "../context/useAsyncStorage";
import { useNavigation } from "@react-navigation/native";
import ProfileScreen from "../screens/Profile";
import { reloadAppAsync } from "expo";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  const { language, setLanguage } = useAsyncStorage();
  const { toggleLanguage } = useLanguageToggle();
  const isRTL = I18nManager.isRTL;
  const navigation = useNavigation();

  /**
   * changing i18n language to stored language
   */
  useEffect(() => {
    i18n.changeLanguage(language);
  },[]);

  /**
   * change language when toggle button clicked
   */
  const changeLanguage = () => {
    toggleLanguage();
    setLanguage(i18n.language as "en" | "ar")
    setTimeout(() => {
      reloadAppAsync();
    }, 500);
  }

  const toggleButton = () => {
    return (
      <TouchableOpacity
        onPress={changeLanguage}
        style={styles.toggle}>
        <AppText
          style={styles.toggleText}>
          {language === "ar" ? "AR" : "EN"}
        </AppText>
      </TouchableOpacity>
    )
  }

  return(
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{ title: "Home",
      headerLeft: () => isRTL ? toggleButton() : null,                 
      headerRight: () => !isRTL ? toggleButton() : null}}
    />
    <Stack.Screen 
      name="EventDetail" 
      component={EventDetail}
      options={{ title: "Event Details", headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          style={{ marginRight: 12 }}
        >
          <AppText style={{ fontSize: 16, color: "#2563eb" }}>Profile</AppText>
        </TouchableOpacity>
      ), }}
    />
    <Stack.Screen 
      name="Profile" 
      component={ProfileScreen}
      options={{ title: "Profile" }}
    />
  </Stack.Navigator>)
}

export default HomeNavigator;


const styles = StyleSheet.create({
  toggle: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#007AFF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  toggleText:{
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  }
})
