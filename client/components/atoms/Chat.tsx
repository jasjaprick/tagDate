import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface IProps {
  match: any
}

const Chat: React.FunctionComponent<IProps> = ({match})  => {
  // Retrieving both users from the match prop, where on is loggin in user and other is target user
  const { userOne, userTwo } = match;

  //TODO: TS def
  // Set empty var as user that is the target user that we want to display
  let userToDisplay;

  // filter for the target user and display that user in the chat
  if (userOne.id === 1) {
    userToDisplay = userTwo;
  } else {
    userToDisplay = userOne;
  }

  // Set array of random messages
  //TODO: remove and replace with chat function when it is ready
    const randomMessages = [
    'Hello, how are you?',
    'Let\'s meet up later!',
    'Cool that you also want to go fishing!',
    'Our date was amazing!'
  ];

  // set fn that gets a random number between 0-3 and retrieve a random message to display
  const getRandomMessageIndex = () => {
    return Math.floor(Math.random() * Math.floor(4));
  };


  return (
    <View style={styles.chatContainer}>
      <View style={styles.photoContainer}></View>
      <View style={styles.infoContainer}>
        <Text style={styles.chatInfoName}>{userToDisplay.profile.name}</Text>
        <Text>{randomMessages[getRandomMessageIndex()]}</Text>
      </View>
    </View>
  );
};

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
