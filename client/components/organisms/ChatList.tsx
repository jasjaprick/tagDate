import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Chat from '../atoms/Chat';

interface IProps {
  matches: any[]
}

const ChatList: React.FunctionComponent<IProps> = ({matches}) => {
  return (
    <View style={styles.chatListContainer}>
      <Text style={styles.chatTitle}>Messages</Text>
      {matches.map((match) => (
        <Chat key={match.id} match={match} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  chatListContainer: {
    width: '100%',
  },
  chatTitle: {
    marginLeft: 10,
  },
});

export default ChatList;
