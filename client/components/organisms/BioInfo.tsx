import React from 'react';
import { View } from 'react-native';
import InputFieldLarge from '../atoms/InputFieldLarge';
import useAppState from '../interfaces/AppState';

const BioInfo: React.FC = () => {
  const [appState, updateState] = useAppState();

  return (
    <View>
      <InputFieldLarge
        onChangeText={(bio: string) => updateState({ ...appState, bio: bio })}
        placeholder={'Tell us about yourself...'}
        value={appState.bio}></InputFieldLarge>
    </View>
  );
};

export default BioInfo;
