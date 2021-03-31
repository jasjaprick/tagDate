import React from 'react';
import { View, StyleSheet } from 'react-native';
import Chat from '../atoms/Chat';

interface IProps {
  matches: any[];
}

const ChatList: React.FunctionComponent<IProps> = ({ matches }) => {
  return (
    <View style={styles.chatListContainer}>
      {matches.map((match) => (
        <Chat key={match.id} match={match} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  chatListContainer: {
    width: '90%',
    marginTop: 10,
  },
});

export default ChatList;
