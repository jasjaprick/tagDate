import React from 'react';
import { View } from 'react-native';
import InputFieldLarge from '../atoms/InputFieldLarge';

interface IPropsBio {
  bio: string;
  setBio: React.Dispatch<React.SetStateAction<string>>;
}

const BioInfo: React.FC<IPropsBio> = ({ bio, setBio }) => {
  return (
    <View>
      <InputFieldLarge
        onChangeText={setBio}
        placeholder={'Tell us about yourself...'}
        value={bio}></InputFieldLarge>
    </View>
  );
};

export default BioInfo;
