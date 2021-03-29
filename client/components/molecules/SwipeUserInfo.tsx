import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  name: string;
  dateOfBirth: string;
  location: string;
  activity: number;
  onLike: () => void;
  onDislike: () => void;
}

const SwipeUserInfo: React.FC<Props> = ({
  name,
  dateOfBirth,
  location,
  activity,
  onLike,
  onDislike,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {name}, {dateOfBirth}
      </Text>
      <Text style={styles.text}>{location}</Text>
      <Text style={styles.text}>Do you want to {activity}?</Text>
      <View style={styles.btnFlex}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            onDislike();
          }}
        >
          <Text style={styles.text}>Nope!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            console.log("LIKE onpress");
            onLike();
          }}
        >
          <Text style={styles.text}>Yep!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(114,90,193, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
  },
  text: {
    color: 'white',
    opacity: 1,
    fontSize: 18,
    alignSelf: 'center',
  },
  btn: {
    backgroundColor: '#725AC1',
    borderRadius: 5,
    padding: 10,
    minWidth: 70,
    marginLeft: 10,
    marginRight: 10,
  },
  btnFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default SwipeUserInfo;
