import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  name: string,
  age: number,
  location: string,
  activity: number
}

const MatchUserInfo: React.FC<Props> = ({name, age, location, activity}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}, {age}</Text>
      <Text style={styles.text}>{location}</Text>
      <Text style={styles.text}>Do you want to {activity}?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
    minWidth: '90%',
    backgroundColor: 'rgba(114,90,193, 0.4)',
    opacity: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    color: 'white',
    opacity: 1,
    fontSize: 18
    // fontFamily: 'Roboto'
  }
});

export default MatchUserInfo;