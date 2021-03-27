import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../helpers/colors';

function ChatBubble({ message, location }) {
  return (
    <View style={[styles.ChatBubbleContainer, { alignSelf: location }]}>
      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ChatBubbleContainer: {
    backgroundColor: 'white',
    maxWidth: '80%',
    borderColor: colors.violet,
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 10,
  },
});

export default ChatBubble;
