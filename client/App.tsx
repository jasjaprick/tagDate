import React from 'react';
import * as Font from 'expo-font';
// import { useFonts } from 'expo-font';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppScreen from './components/tools/AppScreen';
import LoginNavigator from './components/navigations/LoginNavigator';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

// import {
//   useFonts,
//   RobotoCondensed_400Regular,
//   RobotoCondensed_400Regular_Italic
// } from '@expo-google-fonts/roboto-condensed';

export default function App() {
  //   const [fontsLoaded] = useFonts({
  //     RobotoCondensed_400Regular,
  //     RobotoCondensed_400Regular_Italic,
  //   });

  //   if (!fontsLoaded) {
  //     return <View />;
  //     // return <AppLoading />;
  //   } else {
  return (
    <ApolloProvider client={client}>
    <AppScreen>
      <NavigationContainer>
        <LoginNavigator />
      </NavigationContainer>
    </AppScreen>
    </ApolloProvider>
    
  );
  // }
}
