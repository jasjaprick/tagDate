import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import ChatBubble from '../atoms/ChatBubble';

interface IProps {
  data:any
}


const ChatBubbleList:React.FC<IProps> = (props) => {
  console.log('list', props.data?.getAllMessagesForChat.messages);
  const messages:any[] = props.data?.getAllMessagesForChat.messages
  
  return (
    <View style={styles.chatBubbleListContainer}>
      <ScrollView>
        {messages?.map(message => <ChatBubble key={message.id} message={message.content} location='flex-end' />)}
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
