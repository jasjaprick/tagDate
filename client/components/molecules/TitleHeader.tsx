import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TextTitle from '../atoms/TextTitle';
import { useNavigation } from '@react-navigation/core';
import MainLogo from '../../assets/img/logo-only-color.svg';

interface IProps {
  title: string,
  isPrimary: boolean
}

const TitleHeader: React.FC<IProps> = ({isPrimary, title}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.TitleHeaderContainer}>
        <MainLogo />
        <TextTitle>{title}</TextTitle>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  TitleHeaderContainer: {
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default TitleHeader;
