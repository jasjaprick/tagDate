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

const ChatPage: React.FunctionComponent = () => {
  const userId = currentUserRegistrationId();
  const { loading, error, data } = useQuery(GET_CONFIRMED_CHATS, {
    variables: { id: userId }, //HARD CODED VALUE, NEEDS TO BE REPLACED BY THE LOGGEDIN USER ID
  });

  if (userId) {
    if (data && data.getChatByUserId.length > 0) {
      return (
        <QueryResult error={error} loading={loading} data={data}>
          <View style={styles.chatPageContainer}>
            <TitleHeader isPrimary={true} title={'Chats'} />
            <ChatList matches={data.getChatByUserId} />
          </View>
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
};

const styles = StyleSheet.create({
  chatPageContainer: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
});

export default ChatPage;

//IAM KEEPING THIS COMMENTED OUT CODE HERE JUST IN CASE MY IMPLEMENTATION IS LACKING SOMETHING
// const { loading, error, data } = useQuery(GET_MATCHES, {
//   variables: { id: 1 },
// });
// const GET_MATCHES = gql`
//   query Query($id: Float!) {
//     getConfirmedMatches(id: $id) {
//       id
//       userOne {
//         id
//         profile {
//           name
//           dateOfBirth
//         }
//       }
//       userTwo {
//         id
//         profile {
//           name
//           dateOfBirth
//         }
//       }
//       userOneActivity {
//         tag
//       }
//       userTwoActivity {
//         tag
//       }
//     }
//   }
// `;
