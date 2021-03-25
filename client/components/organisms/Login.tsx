import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native';
import PrimaryButton from '../atoms/PrimaryButton';
import SecondaryButton from '../atoms/SecondaryButton';
import colors from '../../helpers/colors';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  console.log('username', username, 'password', password);

  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('LoginSuccessPage');
  };

  return (
    <View style={styles.loginContainer}>
      <TextInput
        style={styles.textInput}
        placeholder='username'
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.textInput}
        placeholder='password'
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <PrimaryButton title='Login' action={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  textInput: {
    margin: 10,
    textAlign: 'center',
    borderBottomColor: colors.violet,
    borderBottomWidth: 2,
    width: '80%',
    color: colors.violet,
  },
});

export default Login;
