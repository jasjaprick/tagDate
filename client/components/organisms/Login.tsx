import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native';
import PurpleButton from '../atoms/PurpleButton';
import colors from '../../helpers/colors';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
console.log('prpos', props);
  console.log('username', username, 'password', password);

  const handleLogin = () => {
    props.navigation.replace('LoginSuccessPage');
  };

  return (
    <View style={styles.loginContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="username"
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.textInput}
        placeholder="password"
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <PurpleButton title="Login" action={handleLogin} />
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
