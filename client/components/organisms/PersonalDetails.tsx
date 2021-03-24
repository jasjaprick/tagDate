import React from 'react';
import { View } from 'react-native';
import InputFieldShort from '../atoms/InputFieldShort';

interface IProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  age: number | null;
  setAge: React.Dispatch<React.SetStateAction<number | null>>;
}

const PersonalDetails: React.FC<IProps> = ({ name, setName, age, setAge }) => {
  return (
    <View>
      <InputFieldShort
        onChangeText={setName}
        placeholder={'Name'}
        value={name}></InputFieldShort>

      <InputFieldShort
        onChangeText={(age: string) => {
          setAge(+age);
        }}
        placeholder={'Age'}
        value={age?.toString()}></InputFieldShort>
    </View>
  );
};

export default PersonalDetails;
