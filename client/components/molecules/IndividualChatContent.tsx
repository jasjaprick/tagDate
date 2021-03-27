import React from 'react';
import { View, StyleSheet } from 'react-native';
import ChatBubbleList from './ChatBubbleList';

function IndividualChatContent() {
  return (
    <View style={styles.IndividualChatContentContainer}>
      <ChatBubbleList />
    </View>
  );
}

const styles = StyleSheet.create({
  IndividualChatContentContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default IndividualChatContent;
