import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../helpers/styles';
import ChatList from '../organisms/ChatList';
import TagList from '../organisms/TagList';
import { useQuery, gql } from '@apollo/client';
import QueryResult from '../organisms/QueryResult';
import TextTitle from '../atoms/TextTitle';
import TitleHeader from '../molecules/TitleHeader';

// GQL Query definition
const GET_MATCHES = gql`
  query Query($id: Float!) {
    getConfirmedMatches(id: $id) {
      id
      userOne {
        id
        profile {
          name
          dateOfBirth
        }
      }
      userTwo {
        id
        profile {
          name
          dateOfBirth
        }
      }
      userOneActivity {
        tag
      }
      userTwoActivity {
        tag
      }
    }
  }
`;

const ChatPage: React.FunctionComponent = () => {
  const { loading, error, data } = useQuery(GET_MATCHES, {
    variables: { id: 1 },
  });

  console.log(data);

  return (
    <QueryResult error={error} loading={loading} data={data}>
      {data && data.getConfirmedMatches.length > 0 ? (
        <View style={styles.chatPageContainer}>
          <TitleHeader>Chat</TitleHeader>
          <ChatList matches={data.getConfirmedMatches} />
        </View>
      ) : (
        <View style={styles.chatPageContainer}>
          <TitleHeader>Chat</TitleHeader>
          <Text>No matches for you</Text>
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
