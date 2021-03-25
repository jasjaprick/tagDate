import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import colors from '../../helpers/colors';
import ChatList from '../organisms/ChatList';
import TagList from '../organisms/TagList';
import { useQuery, gql } from '@apollo/client';

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

  if (error) {
    return (
      <View style={styles.chatPageContainer}>
        <Text style={styles.chatTitle}>Chat</Text>
        <Text>{error.message}</Text>
      </View>
    );
  } else if (loading) {
    return (
      <View style={styles.chatPageContainer}>
        <Text style={styles.chatTitle}>Chat</Text>
        <Text>Loading Matches</Text>
      </View>
    );
  } else if (data && data.length > 0) {
    const tags = [...data.userOneActivity.tag];
    return (
      <View style={styles.chatPageContainer}>
        <Text style={styles.chatTitle}>Chat</Text>
        {/* <Searchbar style={styles.searchbarContainer} /> */}
        <TagList tags={tags} />
        <ChatList matches={data} />
      </View>
    );
  } else  {
    return (
      <View style={styles.chatPageContainer}>
        <Text style={styles.chatTitle}>Chat</Text>
        <Text>No matches for you</Text>
      </View>
    );
  } 
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
