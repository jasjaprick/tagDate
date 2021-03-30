import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TextTitle from '../atoms/TextTitle';
import { useNavigation } from '@react-navigation/core';
import MainLogo from '../../assets/img/logo-only-color.svg';
import MainLogoWhite from '../../assets/img/logo-only-white.svg';
import Hamburger from '../../assets/img/hamburger-purple.svg';
import HamburgerWhite from '../../assets/img/hamburger-purple.svg';
import styled from 'styled-components/native';

interface IProps {
  title: string;
  isPrimary: boolean;
}

const Header = styled.View`
  padding: 4px 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TextTitleWhite = styled.Text`
  font-size: 30px;
  color: #fff;
`;

const TitleHeader: React.FC<IProps> = ({ isPrimary, title }) => {
  const navigation = useNavigation();

  if (isPrimary)
    return (
      <Header>
        <MainLogo />
        <TextTitle>{title}</TextTitle>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Hamburger />
        </TouchableOpacity>
      </Header>
    );
  return (
    <Header>
      <MainLogoWhite />
      <TextTitleWhite>{title}</TextTitleWhite>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <HamburgerWhite />
      </TouchableOpacity>
    </Header>
  );
};


export default TitleHeader;
