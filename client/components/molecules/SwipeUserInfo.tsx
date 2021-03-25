import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  name: string,
  age: number,
  location: string,
  activity: number,
  onLike: () => void,
  onNoLike: () => void
}

const MatchUserInfo: React.FC<Props> = ({name, age, location, activity, onLike, onNoLike}: Props) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}, {age}</Text>
      <Text style={styles.text}>{location}</Text>
      <Text style={styles.text}>Do you want to {activity}?</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          onLike();
         }}
        >
        <Text style={styles.text}>Likey!</Text>
    </TouchableOpacity>
    <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          onNoLike();
         }}
        >
        <Text style={styles.text}>No Likey</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
    minWidth: '90%',
    backgroundColor: 'rgba(114,90,193, 0.4)',
    // opacity: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    color: 'white',
    opacity: 1,
    fontSize: 18
    // fontFamily: 'Roboto'
  },
  btn: {
    backgroundColor: 'blue'
  }
});

export default MatchUserInfo;