import React from 'react';
import { colors } from '../../helpers/styles';
import { View } from 'react-native';
import InputFieldShort from '../atoms/InputFieldShort';

interface IProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const UserAccessData: React.FC<IProps> = ({
  email,
  setEmail,
  password,
  setPassword,
}) => {
  return (
    <View>
      <InputFieldShort
        onChangeText={setEmail}
        placeholder={'E-mail'}
        value={email}></InputFieldShort>

      <InputFieldShort
      isFluid={false}
        onChangeText={(password: string) => {
          setPassword(password);
        }}
        placeholder={'Password'}
        value={password?.toString()}></InputFieldShort>
    </View>
  );
};

export default UserAccessData;
