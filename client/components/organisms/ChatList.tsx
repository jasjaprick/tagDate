import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Chat from '../atoms/Chat';

function ChatList(props) {
  return (
    <View style={styles.chatListContainer}>
      <Text style={styles.chatTitle}>Messages</Text>
      <Chat />
      <Chat />
    </View>
  );
}

const styles = StyleSheet.create({
  chatListContainer: {
    width: '100%',
  },
  chatTitle: {
    marginLeft: 10,
  },
});

export default ChatList;
