import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native';
import PrimaryButton from '../atoms/PrimaryButton';
import MainLogo from '../../assets/logo-main.svg';
import { colors } from '../../helpers/styles';
import InputFieldShort from '../atoms/InputFieldShort';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.replace('MenuNavigator');
  };

  return (
    <View style={styles.loginContainer}>
      <MainLogo width={400} />
      <InputFieldShort
        value={username}
        placeholder='email'
        onChangeText={(username: string) => setUsername(username)}
        isFluid={false}
      />
      <InputFieldShort
        value={password}
        placeholder='password'
        onChangeText={(password: string) => setPassword(password)}
        isFluid={false}
      />
      <PrimaryButton isPrimary={true} title='Login' action={handleLogin} />
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
