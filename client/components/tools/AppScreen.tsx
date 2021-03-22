import { StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native';
import React from 'react';

function AppScreen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default AppScreen;
