import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IndividualChatContent from '../molecules/IndividualChatContent';
import IndividualChatHeader from '../molecules/IndividualChatHeader';
import IndividualChatSend from '../molecules/IndividualChatSend';

function IndividualChatPage() {
  const oldChatHistory = [{ sender: 1, receiver: 2, message: 'hi' }];

  const [chatHistory, setChatHistory] = useState(oldChatHistory);

  return (
    <View style={styles.IndividualChatPageContainer}>
      <IndividualChatHeader />
      <IndividualChatContent content={chatHistory} />
      <IndividualChatSend handler={setChatHistory} />
    </View>
  );
}

const styles = StyleSheet.create({
  IndividualChatPageContainer: {
    flex: 1,
  },
});

export default IndividualChatPage;
