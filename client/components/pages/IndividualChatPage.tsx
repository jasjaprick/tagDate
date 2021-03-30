import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IndividualChatContent from '../molecules/IndividualChatContent';
import IndividualChatHeader from '../molecules/IndividualChatHeader';
import IndividualChatSend from '../molecules/IndividualChatSend';
import {
  useMutation,
  gql,
  useQuery,
  useSubscription,
  useLazyQuery,
} from '@apollo/client';

// const CHAT_SUBSCRIPTION = gql`
//   subscription Subscription($listenMessagesArgs: Float!) {
//   listenMessages(args: $listenMessagesArgs) {
//       id
//       content
//       senderId
//     }
//   }
// `;

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
  const [chatHistory, setChatHistory] = useState('');
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
  // function subscription() {
    // const {data, loading, error} = useSubscription(CHAT_SUBSCRIPTION, {
    //   variables: { listenMessagesArgs: 1 }
    // });
  //   if(loading) {
  //     console.log("loading SUBS")
  //   }
  //   console.log('FIRED')
  //   if(data) console.log('subscriptiondata', data.listenMessages.content);
  // };
  // function updateChatMessages(chatId = 1) {
    
    //  let subscribeToNewMessages = () => {
      //     subscribeToMore({
        //       document: CHAT_SUBSCRIPTION,
        //       variables: {chatId},
        //       updateQuery: (prev, { subscriptionData }) => {
          //         if (!subscriptionData.data) return prev;
          //         const newItem = subscriptionData.data;
          //         console.log(newItem)
          //       }
          //     }
          //   }
          
          // }
            const result = useQuery(CHAT_MESSAGES, {
              variables: { chatId: 1 }, //insert chat id1
            });
  //  useEffect(() => {
    // if (loading) {
    //   console.log('loading');
    // }

    // if (error) {
    //   console.log(error);
    // }
    // if (data) {
    //   console.log('data', data)
     // setChatHistory(data.getAllMessagesForChat);
   // }
      // console.log(`chatHistory`, chatHistory);
      // console.log('getting data...');
      
    //  }, [data]);

  // const insertMessageToChat = () => {
  //   const message = { content: textContent, senderId: 1, chatId: 1 };
  //   console.log('chatHistory', chatHistory);
  //   // const newChat = chatHistory.messages.push(message);
  //   // console.log('chatHistory2', newChat);

  //   // const oldChat = chatHistory.messages;
  //   setChatHistory('hi');
  //   console.log('new chatHistory', chatHistory);
  // };

  const sendingAMessage = () => {
    console.log('getting called');
    //insertMessageToChat();
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
       // subscription={subscription}
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
