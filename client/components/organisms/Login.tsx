import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PrimaryButton from '../atoms/PrimaryButton';
import MainLogo from '../../assets/img/logo-main.svg';
import { colors } from '../../helpers/styles';
import InputFieldShort from '../atoms/InputFieldShort';
import { gql, useLazyQuery } from '@apollo/client';

const LOGIN = gql`
  query Query($getWebTokenData: LoginInput!) {
    getWebToken(data: $getWebTokenData) {
      id
    }
  }
`;

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const handleLogin = () => {
    // navigation.replace('MenuNavigator');
    console.log(`clicking login`);
    login({
      variables: {
        getWebTokenData: {
          email: username,
          password: '1234',
        },
      },
    });
    setUsername('');
    setPassword('');
  };

  // console.log('username', username, 'password', password);

  const [login, { called, error, loading, data }] = useLazyQuery(LOGIN);

  console.log(`called`, called);

  if (error) {
    console.log(`error`, error);
  }
  console.log(`data`, data);

  useEffect(() => {
    if (loading) {
      console.log(`Loading!!`);
    }

    if (data) {
      if (data.getWebToken === null) {
        console.log('invalid user');
        navigation.navigate('MenuNavigator');
      } else if (data.getWebToken) {
        console.log('go in');
        navigation.navigate('MenuNavigator');
      }
    }
  }, [data]);

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
