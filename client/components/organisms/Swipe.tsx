import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import SwipeUserInfo from '../molecules/SwipeUserInfo';

interface IProps {
  target: any;
  onLike: () => void;
  onNoLike: () => void;
}

const Swipe: React.FC<IProps> = ({ target, onLike, onNoLike }: IProps) => {
  console.log(target);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: target.user.profile.profilePicture }}
        style={styles.image}
      >
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
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  infobox: {
    flex: 1,
    width: '90%',
    position: 'absolute',
    bottom: 0,
    borderRadius: 20,
    color: '#ffffff',
    marginLeft: '4%',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default Swipe;
