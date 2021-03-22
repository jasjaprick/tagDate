import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Login from '../organisms/Login';

function LoginPage({ navigation }) {
  return (
    <View style={styles.loginPageContainer}>
      <Login navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  loginPageContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginPage;
