import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../helpers/styles';
import MainLogo from '../../assets/img/logo-only-color.svg';
import HamburgerWhite from '../../assets/img/hamburger-white.svg';
import styled from 'styled-components/native';

interface IProps {
  title: string;
}

const Header = styled.View`
  padding: 4px 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Heading = styled.Text`
font-size: 30px;
color: ${colors.violet};`;

const RegisterHeader: React.FC<IProps> = ({ title }) => {
  return (
    <Header>
      <MainLogo />
      <Heading>Register</Heading>
      <TouchableOpacity onPress={() => console.log('Easter Egg')}>
        <HamburgerWhite />
      </TouchableOpacity>
    </Header>
  );
};

const styles = StyleSheet.create({
  TitleHeaderContainer: {
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default RegisterHeader;
