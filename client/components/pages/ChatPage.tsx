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
        profile {
          name
          profilePicture
        }
      }
      userTwo {
        profile {
          name
          profilePicture
        }
      }
    }
  }
`;

const ChatPage: React.FC = () => {
  const userId = currentUserRegistrationId();
  const { loading, error, data } = useQuery(GET_CONFIRMED_CHATS, {
    variables: { id: userId },
  });

  if (userId)
    return (
      <QueryResult error={error} loading={loading} data={data}>
        {data && data.getChatByUserId.length > 0 ? (
          <View style={styles.chatPageContainer}>
            <TitleHeader isPrimary={true} title={'Chats'} />
            <ChatList matches={data.getChatByUserId} />
          </View>
        ) : (
          <View style={styles.chatPageContainer}>
            <TitleHeader title={'Chat'} isPrimary={true} />
            <Text>No matches for you...</Text>
          </View>
        )}
      </QueryResult>
    );
};

const styles = StyleSheet.create({
  chatPageContainer: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
});

export default ChatPage;
