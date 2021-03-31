import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PrimaryButton from '../atoms/PrimaryButton';
import MainLogo from '../../assets/img/logo-main.svg';
import { colors } from '../../helpers/styles';
import InputFieldShort from '../atoms/InputFieldShort';
import { gql, useLazyQuery } from '@apollo/client';
import { currentUserRegistrationId } from '../interfaces/AppState';

const LOGIN = gql`
  query Query($getWebTokenData: LoginInput!) {
    getWebToken(data: $getWebTokenData) {
      id
    }
  }
`;

function Login() {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const navigation = useNavigation();
  const handleLogin = () => {
    login({
      variables: {
        getWebTokenData: {
          email: inputEmail,
          password: '1234',
        },
      },
    });
    setInputEmail('');
    setInputPassword('');
  };

  const [login, { called, error, loading, data }] = useLazyQuery(LOGIN);

  useEffect(() => {
    if (data) {
      if (data.getWebToken) {
        currentUserRegistrationId(+data.getWebToken.id);
        navigation.navigate('MenuNavigator');
      }
    }
  }, [data]);

  return (
    <View style={styles.loginContainer}>
      <MainLogo
        style={{
          marginTop: 40,
          marginBottom: 40,
          marginLeft: '5%',
          marginRight: '5%',
          width: '90%',
        }}
      />
      <InputFieldShort
        value={inputEmail}
        placeholder='email'
        onChangeText={(username: string) => setInputEmail(username)}
        isFluid={false}
      />
      <InputFieldShort
        value={inputPassword}
        placeholder='password'
        onChangeText={(password: string) => setInputPassword(password)}
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
