import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AppScreen from "./components/tools/AppScreen";
import LoginNavigator from "./components/navigations/LoginNavigator";

export default function App() {
  return (
    <AppScreen>
      <NavigationContainer>
        <LoginNavigator />
      </NavigationContainer>
    </AppScreen>
  );
}
