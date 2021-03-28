import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../helpers/colors';

function IndividualChatHeader(props) {
  return (
    <View style={styles.IndividualChatHeaderContainer}>
      <Text style={styles.IndividualChatName}>Girl Girlovic</Text>
      <Text style={styles.IndividualChatTag}>Wants to eat a Tuna Salad</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  IndividualChatHeaderContainer: {
    backgroundColor: colors.violet,
  },
  IndividualChatName: {
    fontSize: 20,
    padding: 5,
    alignSelf: 'center',
    color: 'white',
  },
  IndividualChatTag: {
    padding: 5,
    alignSelf: 'center',
    color: 'white',
  },
});

export default IndividualChatHeader;
