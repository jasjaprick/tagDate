import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../helpers/colors';

function SecondaryButton({ title, action }) {
  return (
    <TouchableOpacity onPress={action} style={styles.mainButton}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainButton: {
    backgroundColor: colors.white,
    borderColor: colors.violet,
    borderWidth: 2,
    padding: 10,
    borderRadius: 20,
    margin: 10,
    width: '60%',
    alignItems: 'center',
  },
  buttonText: { fontSize: 20, color: colors.violet },
});

export default SecondaryButton;
