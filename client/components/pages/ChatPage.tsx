import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ChatList from '../organisms/ChatList';
import { useQuery, gql } from '@apollo/client';
import QueryResult from '../organisms/QueryResult';
import TitleHeader from '../molecules/TitleHeader';
import Background from '../../assets/img/chat-bcg.svg';
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


const ChatPage: React.FC = () => {
  const userId = currentUserRegistrationId();
  const { loading, error, data } = useQuery(GET_CONFIRMED_CHATS, {
    variables: { id: userId },
    fetchPolicy: "network-only"
  });


  if (userId) {
    if (data && data.getChatByUserId.length > 0) {
      return (
        <QueryResult error={error} loading={loading} data={data}>
          <View style={styles.chatPageContainer}>
            <Background
              style={{
                position: 'absolute',
                width: '100%',
                bottom: 0,
                margin: 0,
              }}
            />
            <TitleHeader isPrimary={true} title={'Chat'} />
            <ChatList matches={data.getChatByUserId} />
          </View>
        </QueryResult>
      );
    }

    return (
      <QueryResult error={error} loading={loading} data={data}>
        <View style={styles.chatPageContainer}>
          <Background
            style={{
              position: 'absolute',
              width: '100%',
              bottom: 0,
              margin: 0,
            }}
          />
          <TitleHeader title={'Chat'} isPrimary={true} />
          <Text>No matches for you...</Text>
        </View>
      </QueryResult>
    );
  }
};

const styles = StyleSheet.create({
  chatPageContainer: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
});

export default ChatPage;
