import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { colors } from '../../helpers/styles';

interface IPropsInput {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string | undefined;
}

const InputFieldLarge: React.FC<IPropsInput> = ({
  placeholder,
  onChangeText,
  value,
}) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={value}
      multiline
      numberOfLines={4}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.white,
    borderColor: colors.grey,
    borderRadius: 20,
    padding: 10,
    borderWidth: 0.5,
    width: '100%',
    alignItems: 'center',
    fontSize: 20,
    color: colors.grey,
  },
  placeHolder: { fontSize: 20, color: colors.grey },
});

export default InputFieldLarge;
