import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import ChatBubble from '../atoms/ChatBubble';

function ChatBubbleList() {
  return (
    <View style={styles.chatBubbleListContainer}>
      <ScrollView>
        <ChatBubble message='Hey' location='flex-end' />
        <ChatBubble message='Hey hows it going?' location='flex-start' />
        <ChatBubble
          message='Wanna go for netflix and chill?'
          location='flex-end'
        />
        <ChatBubble message='Sounds good to me' location='flex-start' />
        {/* <ChatBubble message='Hey' location='flex-end' />
        <ChatBubble message='Hey hows it going?' location='flex-start' />
        <ChatBubble
          message='Wanna go for netflix and chill?'
          location='flex-end'
        />
        <ChatBubble message='Sounds good to me' location='flex-start' />
        <ChatBubble message='Hey' location='flex-end' />
        <ChatBubble message='Hey hows it going?' location='flex-start' />
        <ChatBubble
          message='Wanna go for netflix and chill?'
          location='flex-end'
        />
        <ChatBubble message='Sounds good to me' location='flex-start' /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollview: { flex: 1 },
  chatBubbleListContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default ChatBubbleList;
