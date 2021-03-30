import { DatePicker } from '../atoms/DatePicker';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Event } from '@react-native-community/datetimepicker';
import { colors } from '../../helpers/styles';
import InputFieldShort from '../atoms/InputFieldShort';
import styled from 'styled-components/native';
import InputFieldLarge from '../atoms/InputFieldLarge';
import AddPicture from './AddPicture';
import { useNavigation } from '@react-navigation/native';


// Props
interface IProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  userGender: string;
  setUserGender: React.Dispatch<React.SetStateAction<string>>;
  showMode: () => void;
  onAgeChange: (_: Event, selectedAge: Date | undefined) => void;
  age: Date;
  show: boolean;
  bio: string;
  setBio: React.Dispatch<React.SetStateAction<string>>;
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const Container = styled.View`
  width: 80%;
  margin: 5px auto;
`;

const PersonalDetails: React.FC<IProps> = ({
  name,
  setName,
  userGender,
  setUserGender,
  showMode,
  onAgeChange,
  show,
  age,
  bio,
  setBio,
  location,
  setLocation,
}) => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('UserPreferences');
  };

  return (
    <Container>
      <InputFieldShort
        onChangeText={setName}
        placeholder={'Name'}
        isFluid={true}
        value={name}></InputFieldShort>

      <View>
        <DatePicker
          showMode={showMode}
          onAgeChange={onAgeChange}
          show={show}
          age={age}></DatePicker>
      </View>

      <View>
        <Text >Gender</Text>

        <View>
          <View>
            <RadioButton
              value='male'
              status={userGender === 'male' ? 'checked' : 'unchecked'}
              onPress={() => setUserGender('male')}
            />
            <Text>Male</Text>
          </View>

          <View>
            <RadioButton
              value='female'
              status={userGender === 'female' ? 'checked' : 'unchecked'}
              onPress={() => setUserGender('female')}
            />
            <Text >Female</Text>
          </View> 
        </View>
      </View>

      <View>
        <InputFieldShort
          onChangeText={setBio}
          placeholder={'Describe yourself in 140 characters'}
          isFluid={true}
          value={bio} />
      </View>

      <View>
        <InputFieldShort
          onChangeText={setLocation}
          placeholder={'Where do you live?'}
          isFluid={true}
          value={location}/>
      </View>
      <AddPicture />
    </Container>
  );
};

export default PersonalDetails;
