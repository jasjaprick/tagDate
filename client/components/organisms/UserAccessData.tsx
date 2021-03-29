import React from 'react';
import { View } from 'react-native';
import InputFieldShort from '../atoms/InputFieldShort';

//TODO: CHECK TYPE PASSWORD
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
        value={email}
        isFluid={false}
      ></InputFieldShort>

      <InputFieldShort
        onChangeText={(password: string) => {
          setPassword(password);
        }}
        placeholder={'Password'}
        value={password?.toString()}
        isFluid={false}
      ></InputFieldShort>
    </View>
  );
};

export default UserAccessData;
