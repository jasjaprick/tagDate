import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ChatList from '../organisms/ChatList';
import { useQuery, gql } from '@apollo/client';
import QueryResult from '../organisms/QueryResult';
import TitleHeader from '../molecules/TitleHeader';
import { currentUserRegistrationId } from '../interfaces/AppState';

// GQL Query definition

const GET_CONFIRMED_CHATS = gql`
  query Query($id: Float!) {
    getChatByUserId(id: $id) {
      id
      messages {
        content
        senderId
      }
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
    }
  }
`;

<<<<<<< HEAD
const ChatPage: React.FC = () => {
=======
const ChatPage: React.FunctionComponent = () => {
>>>>>>> b7a0a3b684a36c7d297dc9cb1e28671e5ea67a5e
  const userId = currentUserRegistrationId();
  const { loading, error, data } = useQuery(GET_CONFIRMED_CHATS, {
    variables: { id: userId },
  });

<<<<<<< HEAD
  if (userId)
    return (
      <QueryResult error={error} loading={loading} data={data}>
        {data && data.getChatByUserId.length > 0 ? (
=======
  if (userId) {
    if (data && data.getChatByUserId.length > 0) {
      return (
        <QueryResult error={error} loading={loading} data={data}>
>>>>>>> b7a0a3b684a36c7d297dc9cb1e28671e5ea67a5e
          <View style={styles.chatPageContainer}>
            <TitleHeader isPrimary={true} title={'Chats'} />
            <ChatList matches={data.getChatByUserId} />
          </View>
<<<<<<< HEAD
        ) : (
          <View style={styles.chatPageContainer}>
            <TitleHeader title={'Chat'} isPrimary={true} />
            <Text>No matches for you...</Text>
          </View>
        )}
      </QueryResult>
    );
=======
        </QueryResult>
      );
    }

    return (
      <QueryResult error={error} loading={loading} data={data}>
        <View style={styles.chatPageContainer}>
          <TitleHeader title={'Chat'} isPrimary={true} />
          <Text>No matches for you...</Text>
        </View>
      </QueryResult>
    );
  }
>>>>>>> b7a0a3b684a36c7d297dc9cb1e28671e5ea67a5e
};

const styles = StyleSheet.create({
  chatPageContainer: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
});

export default ChatPage;
