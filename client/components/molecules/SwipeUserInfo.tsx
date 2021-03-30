import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import XButton from '../../assets/img/x-button.svg';
import Like from '../../assets/img/like-btn.svg';
import Location from '../../assets/img/location.svg';

interface Props {
  name: string;
  tag: string;
  dateOfBirth: string;
  location: string;
  activity: string;
  onLike: () => void;
  onDislike: () => void;
}

const SwipeUserInfo: React.FC<Props> = ({
  tag,
  location,
  activity,
  onLike,
  onDislike,
}: Props) => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.topCorner}>#{tag} <Location style={styles.pin}/> {location}</Text>
      <Text style={styles.text}>Do you want to {activity}?</Text>
      <View style={styles.btnFlex}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            onDislike();
          }}
        >
          <XButton style={styles.svg}/>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            onLike();
          }}
        >
          <Like style={styles.svg}/>
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
    borderRadius: 10,
    padding: 10,
  },
  text: {
    color: 'white',
    opacity: 1,
    fontSize: 18,
    alignSelf: 'center',
    top: 20
  },
  topCorner: {
    color: 'white',
    opacity: 1,
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: '700'
  },
  svg: {
    
  },
  pin: {
    marginLeft:40
  },
  imageSize: {
    width: 50,
    height: 35
  },
  btn: {
    borderRadius: 10,
    padding: 10,
    minWidth: 70,
    marginTop: 10,
    marginLeft: 50,
    marginRight: 50,
    top: 40
  },
  btnFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default SwipeUserInfo;
