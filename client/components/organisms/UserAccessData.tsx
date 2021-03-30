import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../helpers/styles';
import { View, StyleSheet } from 'react-native';
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
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('PersonalDetails');
  };

  return (
    <View>
      <InputFieldShort
        onChangeText={setEmail}
        placeholder={'E-mail'}
        value={email}></InputFieldShort>

      <InputFieldShort
        onChangeText={(password: string) => {
          setPassword(password);
        }}
        placeholder={'Password'}
        value={password?.toString()}></InputFieldShort>
    </View>
  );
};

const styles = StyleSheet.create({
  nextButton: {
    backgroundColor: colors.violet,
    padding: 20,
    borderRadius: 20,
    justifyContent: 'center',
    width: '60%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttonText: { fontSize: 20, color: 'white' },
});

export default UserAccessData;
