import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import XButton from '../../assets/img/xButton.svg';
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
      <View style={styles.topContainer}>
            <Text style={styles.tag}>#{tag}</Text> 
            <Text style={styles.topCorner}><Location style={styles.location} /> {location}</Text>
      </View>
            <Text style={styles.text}> {activity}?</Text>
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
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2%',
    width: '100%',
    color: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(114,90,193, 0.6)',
    alignItems: 'center',
    borderRadius: 10,
    padding: 5,
  },
  text: {
    color: 'white',
    opacity: 1,
    fontSize: 18,
    alignSelf: 'center',
    top: 30
  },
  topCorner: {
    color: 'white',
    opacity: 1,
    fontSize: 18,
    // alignSelf: 'center',
    fontWeight: '700'
  },
  svg: {
    
  },
  location: {
    marginLeft:40
  },
  tag: {
    flex: 1,
    alignItems: 'flex-start',
    fontSize: 18,
    fontWeight: '700',
    color: 'white'
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
    top: 10
    },
  btnFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default SwipeUserInfo;
