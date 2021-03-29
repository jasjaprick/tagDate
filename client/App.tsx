import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppScreen from './components/tools/AppScreen';
import LoginNavigator from './components/navigations/LoginNavigator';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import cache from './cache';

const LOCAL_IP = process.env.REACT_NATIVE_LOCAL_IP;
console.log('LOCAL_IP', LOCAL_IP);

const client = new ApolloClient({
  uri: `http://${LOCAL_IP}:4000`,
  cache,
});

const LexendDeca_400Regular = require('./assets/fonts/LexendDeca-Regular.ttf'); 

import {
  useFonts,
  RobotoCondensed_400Regular,
  RobotoCondensed_400Regular_Italic,
} from '@expo-google-fonts/roboto-condensed';





export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular_Italic,
    LexendDeca_400Regular
  });

  if (!fontsLoaded) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  } else {
    return (
      <ApolloProvider client={client}>
        <AppScreen>
          <NavigationContainer>
            <LoginNavigator />
          </NavigationContainer>
        </AppScreen>
      </ApolloProvider>
    );
  }
}

