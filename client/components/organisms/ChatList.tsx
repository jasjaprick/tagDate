import { useNavigation } from '@react-navigation/core';
import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Chat from '../atoms/Chat';

interface IProps {
  matches: any[];
}

const ChatList: React.FunctionComponent<IProps> = ({ matches }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.chatListContainer}>
      {matches.map((match) => (
        <TouchableOpacity
          key={match.id}
          // matchId={match.id}
          onPress={() => {
            {
              navigation.navigate('IndividualChatPage', {
                matchId: match.id,
              });
            }
          }}
        >
          <Chat match={match} />
        </TouchableOpacity>
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
