import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../helpers/colors';

function PrimaryButton({ title, action }) {
  return (
    <TouchableOpacity onPress={action} style={styles.mainButton}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainButton: {
    backgroundColor: colors.violet,
    padding: 10,
    borderRadius: 10,
    margin: 10,
    width: '60%',
    alignItems: 'center',
  },
  buttonText: { fontSize: 20, color: 'white' },
});

export default PrimaryButton;
