import React, { ChangeEvent, useState } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import IndividualChatContent from '../molecules/IndividualChatContent';
import IndividualChatHeader from '../molecules/IndividualChatHeader';
import IndividualChatSend from '../molecules/IndividualChatSend';
import styled from 'styled-components/native';
import Background from '../../assets/img/chat-bcg.svg';
import { useMutation, gql, useQuery } from '@apollo/client';
const CHAT_MESSAGES = gql`
  query Query($chatId: Float!) {
    getAllMessagesForChat(chatId: $chatId) {
      id
      messages {
        id
        content
        senderId
      }
    }
  }
`;


function IndividualChatPage(props) {


  const chatMatchId = +props.route.params.matchId;

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
      <Background
        style={{
          position: 'absolute',
          width: '100%',
          bottom: 0,
          margin: 0,
        }}
      />
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
