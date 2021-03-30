
import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, Text } from 'react-native';
import { Activities } from '../interfaces/activities.interface';
import SwipeUserInfo from '../molecules/SwipeUserInfo';

interface IProps {
  target: Activities;
  tag: string;
  onLike: () => void;
  onDislike: () => void;
}

const Swipe: React.FC<IProps> = ({ target, tag, onLike, onDislike }: IProps) => {
  const  birthday = (new Date()).getFullYear() - (new Date(target.user.profile.dateOfBirth)).getFullYear();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: target.user.profile.profilePicture }}
        style={styles.image}
      >
        <Text style={styles.text}>
        {target.user.profile.name}, {birthday}
      </Text>
        <View style={styles.infobox}>
          <SwipeUserInfo
            tag={tag}
            onLike={onLike}
            onDislike={onDislike}
            name={target.user.profile.name}
            dateOfBirth={target.user.profile.dateOfBirth}
            location={target.user.profile.location}
            activity={target.description}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
const windowWidth = Math.round(Dimensions.get('window').width); 

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  text: {
    color: 'white',
    opacity: 1,
    fontSize: 40,
    alignSelf: 'center',
    bottom: 340
  },
  image: {
    flex: 1,
    width: windowWidth,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  infobox: {
    flex: 1,
    width: '90%',
    minHeight: 180,
    position: 'absolute',
    bottom: 0,
    borderRadius: 20,
    color: '#ffffff',
    marginLeft: '4%',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default Swipe;
