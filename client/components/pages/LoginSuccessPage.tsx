import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';

function LoginSuccessPage(props) {
  console.log('props loginsuccesspage', props);
  return (
    <View>
      <Text>Login was succesful!</Text>
      <TouchableOpacity onPress={() => props.navigation.replace('LoginPage')}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

export default LoginSuccessPage;
