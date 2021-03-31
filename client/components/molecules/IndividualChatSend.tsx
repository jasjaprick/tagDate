import React, {useState} from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { colors } from '../../helpers/styles';
import InputFieldLarge from '../atoms/InputFieldLarge';
import SendButton from '../../assets/img/sendbutton.svg';
import InputFieldShort from '../atoms/InputFieldShort';
import { useMutation, gql } from '@apollo/client';

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



const IndividualChatSend: React.FC = () => {
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

  const sendingAMessage = () => {
    sendMessage();
    setTextContent('');
  };

  return (
    <View style={styles.IndividualChatSendContainer}>
      <View style={styles.IndividualChatSendInput}>
        <InputFieldLarge
          onChangeText={(value: string) => setTextContent(value)}
          value={textContent}
          placeholder={'Send message...'}
        />
      </View>
      <TouchableOpacity onPress={() => sendingAMessage()}>
        <SendButton />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  IndividualChatSendContainer: {
    backgroundColor: colors.lightGrey,
    padding: 10,
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  IndividualChatSendInput: { width: '85%' },
});

export default IndividualChatSend;
