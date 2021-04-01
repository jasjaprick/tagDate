import React, { ChangeEvent, useState } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import IndividualChatContent from '../molecules/IndividualChatContent';
import IndividualChatHeader from '../molecules/IndividualChatHeader';
import IndividualChatSend from '../molecules/IndividualChatSend';
import styled from 'styled-components/native';
import Background from '../../assets/img/chat-bcg.svg';
import { useMutation, gql, useQuery } from '@apollo/client';
import { currentUserRegistrationId } from '../interfaces/AppState';

const CHAT_MESSAGES = gql`
  query Query($chatId: Float!) {
    getAllMessagesForChat(chatId: $chatId) {
      id
      userOne {
        id
        profile {
          name
          profilePicture
        }
      }
      userTwo {
        id
        profile {
          name
          profilePicture
        }
      }
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
    variables: { chatId: chatMatchId }, 
  });

  console.log(`result.data`, result.data);

  const userId = currentUserRegistrationId();
  const userOne = result.data ? result.data.getAllMessagesForChat.userOne : '';
  const userTwo = result.data ? result.data.getAllMessagesForChat.userTwo : '';
  let userToDisplay;

  if (Number(userOne.id) === userId) {
    userToDisplay = userTwo?.profile;
  } else {
    userToDisplay = userOne?.profile;
  }

  const OuterContainer = styled.View`
    width: 100%;
    height: 100%;
    background-color: white;
  `;

  if (result.loading) {
    return <></>;
  }

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
        title={userToDisplay ? userToDisplay.name : ''}
        src={{ uri: userToDisplay.profilePicture }}
      />
      <IndividualChatContent
        data={result.data ? result.data.getAllMessagesForChat : ''}
      />
      <KeyboardAvoidingView behavior={'padding'}>
        <IndividualChatSend
          chatId={result.data ? result.data.getAllMessagesForChat.id : ''}
          />
      </KeyboardAvoidingView>
    </OuterContainer>
  );
}

export default IndividualChatPage;
