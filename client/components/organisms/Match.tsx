import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import MatchUserInfo from '../molecules/MatchUserInfo';

interface Props {
  name: string,
  age: number,
  location: string,
  pictures: string[],
  activity: number
}



const Match: React.FC<Props> = ({name, age, location, pictures, activity}) => {
  const image = {uri: pictures[0]};
  return (
    <View style={styles.container}>
      <ImageBackground source={ image } style={styles.image}>
      <MatchUserInfo 
      name={name}
      age={age}
      location={location}
      activity={activity}
      />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    // flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    resizeMode: 'contain'
  },
  image: {
    flex: 1,
    // height: '100%',
    width: '100%',
    resizeMode: 'contain',
    justifyContent: 'center',
  }
});

export default Match;