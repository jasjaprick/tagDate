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
  const initialDate: Date = new Date('12-10-1992');
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

  const showMode = () => {
    updateState({ ...appState, show: true });
  };

  function getMaximumDate(): Date {
    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setTime(
      eighteenYearsAgo.valueOf() - 18 * 365 * 24 * 60 * 60 * 1000
    );

    return new Date(eighteenYearsAgo);
  }

  const navigation = useNavigation();

  const handleOnPress = () => {
    addUser();
    navigation.navigate('TagDatePage');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.registerPageContainer}>
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
              placeholder={'Location'}
              value={location}></InputFieldShort>
          </View>
          <TouchableOpacity onPress={handleOnPress} style={styles.nextButton}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  registerPageContainer: {
    flex: 1,
    width: '90%',
    height: 'auto',
    alignItems: 'stretch',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
    backgroundColor: colors.white,
    position: 'relative',
    marginTop: 20,
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: colors.violet,
    padding: 20,
    borderRadius: 20,
    justifyContent: 'center',
    width: '60%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttonText: { fontSize: 20, color: 'white' },
});

export default RegisterPage;
