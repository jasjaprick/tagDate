import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import colors from '../../helpers/colors';
import Login from '../organisms/Login';

function LoginPage({ navigation }) {
  const register = () => navigation.replace('LoginSuccessPage');

  return (
    <View style={styles.loginPageContainer}>
      <Login navigation={navigation} />
      <TouchableOpacity style={styles.registerButton} onPress={register}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  loginPageContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  registerButton: {
    // backgroundColor: 'red',
    padding: 10,
  },
  registerText: {
    color: colors.violet,
  },
});

export default LoginPage;
