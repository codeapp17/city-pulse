// src/navigation/AppNavigator.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./HomeNavigator";
import { I18nManager } from "react-native";
import { useAsyncStorage } from "../context/useAsyncStorage";
import AuthNavigator from "./AuthNavigator";

const AppNavigator = () => {
  const { user } = useAsyncStorage();
  return (
    <NavigationContainer>
      {user ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
