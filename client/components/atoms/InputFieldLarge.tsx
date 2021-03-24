import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import colors from '../../helpers/colors';

interface IPropsInput {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string | undefined;
}

const InputFieldLarge: React.FC<IPropsInput> = ({
  placeholder,
  onChangeText,
  value,
}: IPropsInput) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={value}></TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.white,
    borderColor: colors.grey,
    padding: 10,
    borderRadius: 20,
    borderWidth: 0.5,
    marginBottom: 10,
    width: '100%',
    height: '30%',
    alignItems: 'center',
    fontSize: 20,
    color: colors.grey,
  },
  placeHolder: { fontSize: 20, color: colors.grey },
});

export default InputFieldLarge;
