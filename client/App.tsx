import React from 'react';
import * as Font from 'expo-font';
// import { useFonts } from 'expo-font';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppScreen from './components/tools/AppScreen';
import LoginNavigator from './components/navigations/LoginNavigator';
import {
  useFonts,
  RobotoCondensed_400Regular,
  RobotoCondensed_400Regular_Italic
} from '@expo-google-fonts/roboto-condensed';

export default function App() {
    const [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular_Italic
  });

    if (!fontsLoaded) {
    return <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator />
    </View>;
  } else {
  return (
    <AppScreen>
      <NavigationContainer>
        <LoginNavigator />
       </NavigationContainer>
    </AppScreen>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});