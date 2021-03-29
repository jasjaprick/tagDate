import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IndividualChatContent from '../molecules/IndividualChatContent';
import IndividualChatHeader from '../molecules/IndividualChatHeader';
import IndividualChatSend from '../molecules/IndividualChatSend';
import { useMutation, gql , useQuery, useSubscription} from '@apollo/client';

const CHAT_SUBSCRIPTION = gql `
subscription Subscription($listenMessagesArgs: Float!) {
  listenMessages(args: $listenMessagesArgs) {
    id
    content
  }
}
`;

const CHAT_MESSAGES = gql `query Query($chatId: Float!) {
  getAllMessagesForChat(chatId: $chatId) {
    id
    messages {
      id
      content
    }
  }
}
`;

const SEND_MESSAGE = gql `mutation Mutation($messageSentData: createMessageInput!) {
  messageSent(data: $messageSentData) {
    content
    chat {
      messages {
        id
        content
      }
    }
  }
}
`
function IndividualChatPage() {
  const oldChatHistory = [{ sender: 1, receiver: 2, message: 'hi' }];

  const [chatHistory, setChatHistory] = useState(oldChatHistory);
  const [textContent, setTextContent] = useState('')
  const [sendMessage] = useMutation(SEND_MESSAGE, {
    variables: {
      messageSentData: {
        content:textContent, //WHERE IS  CONTENT,
        senderId: 1, //SENDERID ,
        chatId: 1,
      },
    },
  });

  const {loading, error, data } = useQuery(CHAT_MESSAGES, {
    variables: { chatId: 1} //insert chat id1
      });
    if (loading) {
      console.log('loading');
      
    }

    if (error) {
      console.log(error);
      
    }
    if(data) {

      
    }
  

  const sendingAMessage = (newTextContent: string) => {
    console.log('getting called')
    // newTextContent: string
     setTextContent(newTextContent)
    sendMessage();
    setTextContent('');
  }

  return (
    <View style={styles.IndividualChatPageContainer}>
      <IndividualChatHeader />
      <IndividualChatContent content={chatHistory} data={data} />
      <IndividualChatSend textContent={textContent} handler={setChatHistory} setTextContent={setTextContent} sendingAMessage={sendingAMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  IndividualChatPageContainer: {
    flex: 1,
  },
});

export default IndividualChatPage;
