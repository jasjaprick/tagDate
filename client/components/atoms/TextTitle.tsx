import React from 'react';
import { StyleSheet, Text } from 'react-native';
import colors from '../../helpers/colors';

function TextTitle({ children }) {
  return <Text style={styles.TextTitle}>{children}</Text>;
}

const styles = StyleSheet.create({
  TextTitle: {
    fontSize: 30,
    color: colors.violet,
  },
});

export default TextTitle;
