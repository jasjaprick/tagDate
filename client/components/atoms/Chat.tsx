import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { colors, boxShadow } from '../../helpers/styles';
import TitleHeader from '../molecules/TitleHeader';
import { currentUserRegistrationId } from '../interfaces/AppState';

interface IProps {
  match: any;
}

const Chat: React.FunctionComponent<IProps> = ({ match }) => {
  // Retrieving both users from the match prop, where on is loggin in user and other is target user
  const { userOne, userTwo } = match;

  const userId = currentUserRegistrationId();

  //TODO: TS def
  // Set empty var as user that is the target user that we want to display
  let userToDisplay;

  // filter for the target user and display that user in the chat
  if (userOne.id === userId) {    ////HARD CODED VALUE, NEEDS TO BE REPLACED BY THE LOGGEDIN USER ID
    userToDisplay = userTwo;
  } else {
    userToDisplay = userOne;
  }

  // Set array of random messages
  //TODO: remove and replace with chat function when it is ready
  const randomMessages = [
    'Hello, how are you?',
    'Let\'s meet up later!',
    'Cool that you also want to go fishing!',
    'Our date was amazing!',
  ];

  // set fn that gets a random number between 0-3 and retrieve a random message to display
  const getRandomMessageIndex = () => {
    return Math.floor(Math.random() * Math.floor(4));
  };

  return (
    <ChatContainer>
      <PhotoContainer></PhotoContainer>
      <InformationContainer>
        <InformationContainerTop>
          <ChatPersonName>{userToDisplay.profile.name}</ChatPersonName>
          <DateTime>Today</DateTime>
        </InformationContainerTop>
        <LastMessageSent>
          {randomMessages[getRandomMessageIndex()]}
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
  border-width: 1px;
  border-color: gray;
`;

const PhotoContainer = styled.View`
  background-color: blue;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  margin: 10px;
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
  /* background-color: green; */
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
