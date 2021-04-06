import React from 'react';
import { colors, boxShadow } from '../../helpers/styles';
import styled from 'styled-components/native';
import { currentUserRegistrationId } from '../interfaces/AppState';

// interface for the ChatBubble element
interface IProps {
  message: any,
  senderId: any
}

// interface for the inner content
interface ITheme {
  sender: boolean
}

// styling for the bubble container with conditional rendering for the background
const Bubble = styled.View<ITheme>`
  padding: 12px 16px;
  margin: 5px 5%;
  background-color: ${props =>  props.sender ? colors.green : colors.lightGrey};
  border-radius: 8px;
  align-self: ${props => props.sender ? 'flex-end' : 'flex-start'};

  text-align: ${props =>  props.sender ? 'left' : 'right'};
  box-shadow: ${boxShadow};
`;

// styling for the inner bubble text with conditional rendering for the textcolor
const BubbleText = styled.Text<ITheme>`
  color: ${props => props.sender ? colors.white : colors.violet};
`;


const ChatBubble: React.FC<IProps> = ({ message, senderId }) => {
const ownId = currentUserRegistrationId();
const isOwnIdCheck = (ownId: any, senderId: any): boolean => senderId === ownId;
console.log(senderId);
return (
  <Bubble sender={isOwnIdCheck(ownId, senderId)}>
    <BubbleText sender={isOwnIdCheck(ownId, senderId)}>{message}</BubbleText>
  </Bubble>
);
};


export default ChatBubble;
