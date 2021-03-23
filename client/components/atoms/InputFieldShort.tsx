import React, { useState} from 'react';
import { View, Text, StyleSheet, TextInput, NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import colors from '../../helpers/colors';


interface IProps {
  placeholder: string;
  onChange: ((e: any) => void)
}


function InputFieldShort({ placeholder, onChange }: IProps) {
  return (
    <TextInput
    style={styles.input}
    onChange={onChange}
    placeholder={placeholder}
    >
    </TextInput>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'red',
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