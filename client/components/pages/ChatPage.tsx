import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import colors from '../../helpers/colors';
import ChatList from '../organisms/ChatList';
import TagList from '../organisms/TagList';
import { useQuery, gql } from '@apollo/client';
import QueryResult from '../organisms/QueryResult';

// GQL Query definition
const GET_MATCHES = gql`
  query Query($id: Float!) {
    getConfirmedMatches(id: $id) {
      id
      userOne {
        id
        profile {
          name
          age
        }
      }
      userTwo {
        id
        profile {
          name
          age
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
      {data.length > 0 ? (
        <View style={styles.chatPageContainer}>
          <Text style={styles.chatTitle}>Chat</Text>
          {/* <Searchbar style={styles.searchbarContainer} /> */}
          <TagList tags={data.tags} />
          <ChatList matches={data} />
        </View>
      ) : (
        <View style={styles.chatPageContainer}>
          <Text style={styles.chatTitle}>Chat</Text>
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
  chatTitle: {
    fontSize: 30,
    color: colors.violet,
  },
  searchbarContainer: {
    width: '80%',
    borderRadius: 10,
    margin: 20,
  },
});

export default ChatPage;
