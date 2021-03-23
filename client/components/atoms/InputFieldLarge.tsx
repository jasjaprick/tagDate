import React, { useState} from 'react';
import { View, Text, StyleSheet, TextInput, } from 'react-native';
import colors from '../../helpers/colors';

function InputFieldLarge({ placeholder, onChange }) {
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
    height: '30%',
    alignItems: 'center',
    fontSize: 20,
    color: 'grey'
  },
  placeHolder: { fontSize: 20, color: 'grey' },
});

export default InputFieldLarge;