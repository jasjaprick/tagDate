import React from 'react';
import { colors } from '../../helpers/styles';
import { View } from 'react-native';
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
        isFluid={false}
        placeholder={'E-mail'}
        value={appState.email}></InputFieldShort>
      <InputFieldShort
      isFluid={false}
        onChangeText={(password: string) => {
          updateState({ ...appState, password: password });
        }}
        placeholder={'Password'}
        value={appState.password?.toString()}></InputFieldShort>
    </View>
  );
};

export default UserAccessData;
