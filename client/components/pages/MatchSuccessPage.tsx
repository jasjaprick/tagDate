import React from 'react';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { boxShadow } from '../../helpers/styles';
import Background from '../../assets/img/bcg.svg';
import { colors } from '../../helpers/styles';
import PrimaryButton from '../atoms/PrimaryButton';
import TitleHeader from '../molecules/TitleHeader';

<<<<<<< HEAD
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

const MatchSuccessPage: React.FC = () => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Chat');
  };

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
      <TitleHeader title={'Nice!'} isPrimary={true} />
      <InnerContainer>
        <Image
          style={{
            position: 'absolute',
            top: -120,
            width: '90%',
            margin: '5%',
          }}
          source={require('../../assets/img/giphNice.gif')}
        />
        <Heading>You have a tagDate 💥</Heading>

        <View>
          <PrimaryButton
            isPrimary={true}
            title="Let's Talk!"
            action={handleOnPress}
          />
        </View>
      </InnerContainer>
    </OuterContainer>
=======
function MatchSuccessPage(props) {
  return (
    <View style={styles.MatchSuccessPageContainer}>
      <Text style={styles.MatchSuccessPageTitle}>Match!</Text>
      <View style={styles.imageContainer}></View>
      <PrimaryButton isPrimary={true} title="Let's Talk!" action={} />
      <PrimaryButton isPrimary={false} title='Later' action={} />
    </View>
>>>>>>> b7a0a3b684a36c7d297dc9cb1e28671e5ea67a5e
  );
};

export default MatchSuccessPage;
