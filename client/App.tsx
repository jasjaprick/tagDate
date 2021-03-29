import React from 'react';
import * as Font from 'expo-font';
// import { useFonts } from 'expo-font';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppScreen from './components/tools/AppScreen';
import LoginNavigator from './components/navigations/LoginNavigator';
import { ApolloClient, InMemoryCache, ApolloProvider, split, HttpLink } from '@apollo/client';
import MenuNavigator from './components/navigations/MenuNavigator';
import { WebSocketLink } from '@apollo/client/link/ws';

const LOCAL_IP = process.env.REACT_NATIVE_LOCAL_IP;
console.log('LOCAL_IP', LOCAL_IP);

const httpLink = new HttpLink({
  uri: `http://${LOCAL_IP}:4000`
});
const wsLink = new WebSocketLink({
  uri: `ws://${LOCAL_IP}:4000/subscriptions`,
  options: {
    reconnect: true
  }
});
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink,
    );
    const client = new ApolloClient({
      link: splitLink,
      cache: new InMemoryCache(),
    });
    import {
  useFonts,
  RobotoCondensed_400Regular,
  RobotoCondensed_400Regular_Italic,
} from '@expo-google-fonts/roboto-condensed';
import { getMainDefinition } from '@apollo/client/utilities';

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular_Italic,
  });

  if (!fontsLoaded) {
    return (
      <View style={[styles.container, styles.horizontal]}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
