import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import colors from '../../helpers/colors';


interface IProps {
  placeholder: string;
  onChangeText: ((text: string) => void);
  value: string | undefined;
}

const InputFieldShort: React.FC<IProps> = ({ placeholder, onChangeText, value } : IProps) => {
  return (
    <TextInput
    style={styles.input}
    onChangeText={onChangeText}
    placeholder={placeholder}
    value={value}
    >
    </TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'colors.white',
    borderColor: colors.grey,
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
    width: '100%',
    height: '10%',
    alignItems: 'center',
    fontSize: 20,
    color: 'grey'
  },
  placeHolder: { fontSize: 20, color: 'grey' },
});

export default InputFieldShort;