import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import colors from '../../helpers/colors';
import ChatList from '../organisms/ChatList';
import TagList from '../organisms/TagList';

function ChatPage(props) {
  console.log(props);

  return (
    <View style={styles.chatPageContainer}>
      <Text style={styles.chatTitle}>Chat</Text>
      <Searchbar style={styles.searchbarContainer} />
      <TagList />
      <ChatList />
    </View>
  );
}

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
