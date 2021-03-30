import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import ChatBubble from '../atoms/ChatBubble';
import {
  gql,
  useSubscription,
} from '@apollo/client';

interface IProps {
  data: any;
}

const ChatBubbleList: React.FC<IProps> = (props) => {
  if (props.data === '') {
    return <View></View>;
  }
  const CHAT_SUBSCRIPTION = gql`
  subscription Subscription($listenMessagesArgs: Float!) {
  listenMessages(args: $listenMessagesArgs) {
      id
      content
      senderId
    }
  }
`;
// const messages = props.data? [...props.data] : [];
  const [messages, setMessages] = useState(props.data || [])
  //let messages =

//console.log('listBubbleList', props.data?.messages);
// let messages: any[] = props.data? props.data : ''
//console.log(messages)
let result = useSubscription(CHAT_SUBSCRIPTION, {
    variables: { listenMessagesArgs: 1 }
  });
useEffect(() => {
  if (result.data) {
    //console.log(result.data)
     //messages.push(data.listenMessages);
     console.log('happening') 
     const newMessage = result.data.listenMessages;
     setMessages([...messages, newMessage]);
     ;
}
    
  }, [result.data])

  return (
    <View style={styles.chatBubbleListContainer}>
      <ScrollView>
        {messages?.map((message) => (
          <ChatBubble
            key={message.id}
            message={message.content}
            location='flex-end'
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollview: { flex: 1 },
  chatBubbleListContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default ChatBubbleList;
