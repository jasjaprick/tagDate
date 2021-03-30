import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IndividualChatContent from '../molecules/IndividualChatContent';
import IndividualChatHeader from '../molecules/IndividualChatHeader';
import IndividualChatSend from '../molecules/IndividualChatSend';
import {
  useMutation,
  gql,
  useQuery,
} from '@apollo/client';
const CHAT_MESSAGES = gql`
  query Query($chatId: Float!) {
    getAllMessagesForChat(chatId: $chatId) {
      id
      messages {
        id
        content
      }
    }
  }
`;

const SEND_MESSAGE = gql`
  mutation Mutation($messageSentData: createMessageInput!) {
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
`;
function IndividualChatPage() {
  const [textContent, setTextContent] = useState('');
  const [sendMessage] = useMutation(SEND_MESSAGE, {
    variables: {
      messageSentData: {
        content: textContent, //WHERE IS  CONTENT,
        senderId: 1, //SENDERID ,
        chatId: 1,
      },
    },
  });
            const result = useQuery(CHAT_MESSAGES, {
              variables: { chatId: 1 }, //value hardcoded
            });
  

  

  const sendingAMessage = () => {
     sendMessage();
    setTextContent('');
  };
  return (
    <View style={styles.IndividualChatPageContainer}>
      <IndividualChatHeader />
      <IndividualChatContent
     data={result.data? result.data.getAllMessagesForChat.messages : ''} 
     />
      <IndividualChatSend
        textContent={textContent}
        setTextContent={setTextContent}
        sendingAMessage={sendingAMessage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  IndividualChatPageContainer: {
    flex: 1,
  },
});

export default IndividualChatPage;
