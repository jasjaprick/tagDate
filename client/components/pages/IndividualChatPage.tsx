import React, {  ChangeEvent, useState } from 'react';
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

function IndividualChatPage() {
  const result = useQuery(CHAT_MESSAGES, {
    variables: { chatId: 1 }, //value hardcoded
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
        data={result.data ? result.data.getAllMessagesForChat.messages : ''}
      />
      <KeyboardAvoidingView behavior={'padding'}>
        <IndividualChatSend
          // textContent={textContent}
          // setTextContent={setTextContent}
          // sendingAMessage={sendingAMessage}
        />
      </KeyboardAvoidingView>
    </OuterContainer>
  );
}

export default IndividualChatPage;
