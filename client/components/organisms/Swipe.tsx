import  React, { useState, useEffect, Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { IUsers } from '../../db';
import SwipeUserInfo from '../molecules/SwipeUserInfo';

interface Props {
  user: IUsers;
  onLike: () => void;
  onNoLike: () => void;
}

const Match: React.FC<Props> = ({user, onLike, onNoLike}: Props) => {
 
  return (
    <View style={styles.container}>
      <ImageBackground source={ {uri: user.pictures[0]} } style={styles.image}>
      <View style={styles.infobox}>
      <SwipeUserInfo  
      onLike={onLike}
      onNoLike={onNoLike}
      name={user.name}
      age={user.age}
      location={user.location}
      activity={user.activity}
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

export default Match;
