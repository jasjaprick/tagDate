import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import ChatBubble from '../atoms/ChatBubble';
import { gql, useSubscription } from '@apollo/client';

interface IProps {
  data: any;
}
//SUBSCRIPTION IS IN THIS COMPONENT IN ORDER TO WATCH OUT FOR NEW MESSAGES
const ChatBubbleList: React.FC<IProps> = (props) => {
  if (props.data.messages === '') {
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

  const [messages, setMessages] = useState(props.data.messages || []);
  let scrollViewRef = useRef<ScrollView>(null);
  const result = useSubscription(CHAT_SUBSCRIPTION, {
    variables: { listenMessagesArgs: Number(props.data.id) }, //this value is currently hardcoded and represents the chatID
  });
  //we watchout for new updates to the subscription with useEffect
  useEffect(() => {
    if (result.data) {
      const newMessage = result.data.listenMessages;
      setMessages([...messages, newMessage]);
    }
  }, [result.data]);

  return (
    <View >
      <ScrollView 
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current !== null && scrollViewRef.current.scrollToEnd({ animated: true }) }
      >
        {messages?.map((message: any) => {
          console.log(message);
          return (
            //need to implement interface for messages
            <ChatBubble
              key={message.id}
              message={message.content}
              senderId={message.senderId}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};


export default ChatBubbleList;
