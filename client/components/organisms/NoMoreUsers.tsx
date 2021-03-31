import React from 'react';
import { Image, View } from 'react-native';
import styled from 'styled-components/native';
import { boxShadow } from '../../helpers/styles';
import Background from '../../assets/img/bcg.svg';
import { colors } from '../../helpers/styles';
import PrimaryButton from '../atoms/PrimaryButton';
import TitleHeader from '../molecules/TitleHeader';

const OuterContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: white;
`;

const Container = styled.SafeAreaView`
  margin: 30px auto 0 auto;
  position: absolute;
  bottom: 0;
  left: 5%;
  right: 5%;
  background: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 85%;
  padding-top: 10px;
  box-shadow: ${boxShadow};
`;

const InnerContainer = styled.View`
  padding: 15px 0;
  height: 100%;
  margin: 30% 0;
`;

const Heading = styled.Text`
  font-size: 30px;
  color: ${colors.violet};
  margin-top: 90%;
  text-align: center;
`;

const NoMoreUsers: React.FC = () => {
  return (
    <OuterContainer>
      <Background
        style={{
          position: 'absolute',
          width: '100%',
          bottom: 0,
          right: 0,
          left: 7,
          margin: 0,
        }}
      />
      <TitleHeader title={'Oh no...'} isPrimary={true} />
      <InnerContainer>
        <Image
          style={{
            position: 'absolute',
            top: -120,
            width: '90%',
            margin: '5%',
          }}
          source={require('../../assets/img/giphy.gif')}
        />
        <Heading>No more users...</Heading>
        <View>
          <PrimaryButton title={'Next'} isPrimary={true} action={} />
        </View>
      </InnerContainer>
    </OuterContainer>
  );
};

export default NoMoreUsers;
