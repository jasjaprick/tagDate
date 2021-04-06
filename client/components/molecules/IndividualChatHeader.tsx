import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TextTitle from '../atoms/TextTitle';
import { useNavigation } from '@react-navigation/core';
import { Image, View } from 'react-native';
import Hamburger from '../../assets/img/hamburger-purple.svg';
import styled from 'styled-components/native';

interface IProps {
  title: string;
  src: any
}

const Header = styled.View`
  padding: 4px 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ImageContainer = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 260px;
  margin: 5px;
  overflow: hidden;
`;

const IndividualChatHeader: React.FC<IProps> = ({ src, title }) => {
  const navigation = useNavigation();

  return (
    <Header>
      <ImageContainer>
        <Image
          source={src}
          style={{ width: 50, height: 50 }}
        />
      </ImageContainer>
      <TextTitle>{title}</TextTitle>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Hamburger />
      </TouchableOpacity>
    </Header>
  );
};

export default IndividualChatHeader;
