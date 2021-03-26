import  React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import SwipeUserInfo from '../molecules/SwipeUserInfo';

interface IProps {
  target: any;
  onLike: () => void;
  onNoLike: () => void;
}

const Swipe: React.FC<IProps> = ({target, onLike, onNoLike}: IProps) => {
  console.log(target);
  return (
    <View style={styles.container}>
      <ImageBackground source={ {uri: target.user.profile.profilePicture} } style={styles.image}>
      <View style={styles.infobox}>
      <SwipeUserInfo  
      onLike={onLike}
      onNoLike={onNoLike}
      name={target.user.profile.name}
      age={target.user.profile.age}
      location={target.user.profile.location}
      activity={target.description}
      />
      </View>
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
  },
  infobox: {
    flex: 1,
    height: '25%',
    width: '90%',
    position: 'absolute',
    bottom: 0,
    borderRadius: 20,
    color: '#ffffff',
    // justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Swipe;
