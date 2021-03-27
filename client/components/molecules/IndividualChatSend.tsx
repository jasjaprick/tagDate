import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../../helpers/colors';
import InputFieldLarge from '../atoms/InputFieldLarge';
import SendMessageIcon from '../atoms/SendMessageIcon';

function IndividualChatSend(props) {
  return (
    <View style={styles.IndividualChatSendContainer}>
      <View style={styles.IndividualChatSendInput}>
        <InputFieldLarge />
      </View>
      <SendMessageIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  IndividualChatSendContainer: {
    backgroundColor: colors.violet,
    padding: 10,
    flexDirection: 'row',
    height: 80,
    justifyContent: 'center',
  },
  IndividualChatSendInput: { width: '85%' },
});

export default IndividualChatSend;
