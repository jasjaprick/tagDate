import React from 'react';
import { View, StyleSheet } from 'react-native';
import ChatBubbleList from './ChatBubbleList';

function IndividualChatContent({data}) {
  return (
    <View style={styles.IndividualChatContentContainer}>
      <ChatBubbleList data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  IndividualChatContentContainer: {
    flex: 1
  },
});

export default IndividualChatContent;
