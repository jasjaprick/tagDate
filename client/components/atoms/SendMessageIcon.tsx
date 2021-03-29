import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../../helpers/styles';

function SendMessageIcon() {
  const sendMessage = () => {
    console.log('sending message...');
  };
  return (
    <View style={styles.SendMessageIconContainer}>
      <TouchableOpacity onPress={sendMessage}>
        <FontAwesome name='send-o' size={24} color='white' />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  SendMessageIconContainer: {
    // backgroundColor: 'green',
    marginLeft: 10,
    justifyContent: 'center',
  },
});

export default SendMessageIcon;
