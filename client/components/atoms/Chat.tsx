import { gql, useSubscription } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import { colors, boxShadow } from '../../helpers/styles';
import { currentUserRegistrationId } from '../interfaces/AppState';

interface IProps {
  match: any;
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

const Chat: React.FunctionComponent<IProps> = ({ match }) => {
  // Retrieving both users from the match prop, where on is loggin in user and other is target user
  const { userOne, userTwo } = match;
  const [lastMessage, setLastMessage] = useState(match?.messages[match.messages.length - 1]?.content ?? '')
  const userId = currentUserRegistrationId();
  
  const result = useSubscription (CHAT_SUBSCRIPTION, {
    variables: { listenMessagesArgs: Number(match.id) }, //this value is currently hardcoded and represents the chatID
  });

  useEffect(() => {
    if(result.data) {
      setLastMessage(result.data.listenMessages.content)
    }
  }, [result.data])

  //TODO: TS def
  // Set empty var as user that is the target user that we want to display
  let userToDisplay;

  // filter for the target user and display that user in the chat
  if (Number(userOne.id) === userId) {
    userToDisplay = userTwo;
  } else {
    userToDisplay = userOne;
  }

  // const lastMessage = match.messages[match.messages.length - 1]?.content;

  // set fn that gets a random number between 0-3 and retrieve a random message to display
  const getRandomMessageIndex = () => {
    return Math.floor(Math.random() * Math.floor(4));
  };

  return (
    <ChatContainer>
      <ImageContainer>
        <Image
          source={{ uri: userToDisplay.profile.profilePicture }}
          style={{ width: 60, height: 60 }}
        />
      </ImageContainer>
      <InformationContainer>
        <InformationContainerTop>
          <ChatPersonName>{userToDisplay.profile.name}</ChatPersonName>
          <DateTime>Today</DateTime>
        </InformationContainerTop>
        <LastMessageSent>
          {lastMessage}
        </LastMessageSent>
      </InformationContainer>
    </ChatContainer>
  );
};

const ChatContainer = styled.View`
  background-color: white;
  flex-direction: row;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: ${boxShadow};

`;

const ImageContainer = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 260px;
  margin: 5px;
  overflow: hidden;
`;

const ChatPersonName = styled.Text`
  font-size: 18px;
  color: ${colors.violet};
  font-weight: bold;
`;

const InformationContainer = styled.View`
  flex: 1;

  justify-content: space-around;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const InformationContainerTop = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const DateTime = styled.Text`
  color: ${colors.violet};
  margin-right: 10px;
`;

const LastMessageSent = styled.Text`
  color: gray;
`;

export default Chat;
