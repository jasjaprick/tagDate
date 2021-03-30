import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TextTitle from '../atoms/TextTitle';
import { useNavigation } from '@react-navigation/core';

function TitleHeader(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.TitleHeaderContainer}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <TextTitle>{props.children}</TextTitle>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  TitleHeaderContainer: {
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default TitleHeader;
