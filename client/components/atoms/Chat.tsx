import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Chat(props) {
  return (
    <View style={styles.chatContainer}>
      <View style={styles.photoContainer}></View>
      <View style={styles.infoContainer}>
        <Text style={styles.chatInfoName}>First Name</Text>
        <Text>Hello, how are you?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chatContainer: {
    backgroundColor: 'white',
    margin: 10,
    borderColor: 'lightgray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  photoContainer: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: 'dodgerblue',
  },
  infoContainer: {
    flex: 1,
    padding: 10,
  },
  chatInfoName: {
    marginBottom: 10,
    fontSize: 18,
  },
});

export default Chat;
