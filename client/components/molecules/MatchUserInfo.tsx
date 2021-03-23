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
      <Text>{name}, {age}</Text>
      <Text>{location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: '20%',
    // width: '80%',
    marginBottom: 30,
    backgroundColor: '#725ac1',
    opacity: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  }
});

export default MatchUserInfo;