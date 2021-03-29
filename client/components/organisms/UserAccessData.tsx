import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

import { colors } from '../../helpers/styles';
import InputFieldShort from '../atoms/InputFieldShort';
import useAppState from '../interfaces/AppState';

const UserAccessData: React.FC = () => {
  const [appState, updateState] = useAppState();
  return (
    <View>
      <InputFieldShort
        onChangeText={(email: string) =>
          updateState({ ...appState, email: email })
        }
        placeholder={'E-mail'}
        value={appState.email}></InputFieldShort>
      {console.log('aps', appState)}
      <InputFieldShort
        onChangeText={(password: string) => {
          updateState({ ...appState, password: password });
        }}
        placeholder={'Password'}
        value={appState.password?.toString()}></InputFieldShort>
    </View>
  );
};

export default UserAccessData;
