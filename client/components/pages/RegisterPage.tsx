import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useMutation, gql } from '@apollo/client';
import { colors } from '../../helpers/styles';
import PersonalDetails from '../organisms/PersonalDetails';
import BioInfo from '../organisms/BioInfo';
import AddPicture from '../organisms/AddPicture';
import UserAccessData from '../organisms/UserAccessData';
import PrimaryButton from '../atoms/PrimaryButton';
import UserPreferences from '../organisms/UserPreferences';
import InputFieldShort from '../atoms/InputFieldShort';
import { Event } from '@react-native-community/datetimepicker';
import useAppState from '../interfaces/AppState';

interface Iprops {
  onPress: (text: string) => void;
}

// Create user mutation
// TODO: delete nested returns
const ADD_USER = gql`
  mutation Mutation($addUserData: AddUserInput!) {
    addUser(data: $addUserData) {
      id
      profile {
        name
      }
    }
  }
`;

//TODO: FIX SCROLLVIEWnpm start

const RegisterPage = () => {
  const initialDate: Date = getDate(28);
  // States
  const [location, setLocation] = useState('');

  const [appState, updateState] = useAppState();

  const [addUser] = useMutation(ADD_USER, {
    variables: {
      addUserData: {
        email: appState.email,
        password: appState.password,
        name: appState.name,
        bio: appState.bio,
        dateOfBirth: appState.age,
        gender: appState.userGender,
        interestedIn: appState.genderPreference,
        location: location,
      },
    },
  });

  // fn passed down to datepicker through personal details that handles the DOB select event
  // Maximum age
  function getDate(diff: number): Date {
    const returnDate = new Date();
    returnDate.setTime(returnDate.valueOf() - diff * 365 * 24 * 60 * 60 * 1000);

    return new Date(returnDate);
  }

  const onAgeChange = (_: Event, selectedAge: Date | undefined) => {
    const currentAge: Date | string = selectedAge || appState.age;
    updateState({ ...appState, show: Platform.OS === 'ios' });
    updateState({ ...appState, age: currentAge });
  };

  // fn passed down to datepicker through personal details that handles the visibility of the
  const showMode = () => {
    updateState({ ...appState, show: true });
  };


  const navigation = useNavigation();

  const handleOnPress = () => {
    addUser();
    navigation.navigate('TagDatePage');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View >
          <UserAccessData />
          <PersonalDetails showMode={showMode} onAgeChange={onAgeChange} />
          <BioInfo />
          <AddPicture />
          <UserPreferences />
          <View>
            <InputFieldShort
              onChangeText={(location: string) => {
                setLocation(location);
              }}
              isFluid={false}
              placeholder={'Location'}
              value={location}></InputFieldShort>
          </View>
          <PrimaryButton title='Next' action={handleOnPress} isPrimary={true} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterPage;
