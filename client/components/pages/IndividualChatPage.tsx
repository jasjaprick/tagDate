import React, { ChangeEvent, useState } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import IndividualChatContent from '../molecules/IndividualChatContent';
import IndividualChatHeader from '../molecules/IndividualChatHeader';
import IndividualChatSend from '../molecules/IndividualChatSend';
import styled from 'styled-components/native';
import Background from '../../assets/img/bcg.svg';
import { useMutation, gql, useQuery } from '@apollo/client';
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

<<<<<<< HEAD
function IndividualChatPage() {
=======
// const SEND_MESSAGE = gql`
//   mutation Mutation($messageSentData: createMessageInput!) {
//     messageSent(data: $messageSentData) {
//       content
//       chat {
//         messages {
//           id
//           content
//         }
//       }
//     }
//   }
// `;
function IndividualChatPage(props) {
  // const [textContent, setTextContent] = useState('');
  // const [sendMessage] = useMutation(SEND_MESSAGE, {
  //   variables: {
  //     messageSentData: {
  //       content: textContent, //WHERE IS  CONTENT,
  //       senderId: 1, //SENDERID ,
  //       chatId: 1,
  //     },
  //   },
  // });

  const chatMatchId = +props.route.params.matchId;

>>>>>>> b7a0a3b684a36c7d297dc9cb1e28671e5ea67a5e
  const result = useQuery(CHAT_MESSAGES, {
    variables: { chatId: chatMatchId }, //value hardcoded
  });

  const OuterContainer = styled.View`
    width: 100%;
    height: 100%;
    background-color: white;
  `;

  return (
    <OuterContainer>
      <IndividualChatHeader
        title={'Matty'}
        src={require('../../assets/img/matty.png')}
      />
      <IndividualChatContent
        data={result.data ? result.data.getAllMessagesForChat : ''}
      />
      <KeyboardAvoidingView behavior={'padding'}>
        <IndividualChatSend
          chatId={result.data ? result.data.getAllMessagesForChat.id : ''}
          // textContent={textContent}
          // setTextContent={setTextContent}
          // sendingAMessage={sendingAMessage}
        />
      </KeyboardAvoidingView>
    </OuterContainer>
  );
}

export default IndividualChatPage;
