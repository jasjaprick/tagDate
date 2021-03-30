import React, { ChangeEvent, useState } from 'react';
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
import AddPicture from '../organisms/AddPicture';
import UserAccessData from '../organisms/UserAccessData';
import UserPreferences from '../organisms/UserPreferences';
import InputFieldShort from '../atoms/InputFieldShort';
import { Event } from '@react-native-community/datetimepicker';
import { currentUserRegistrationId } from '../interfaces/AppState';

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
  const [renderPageIndex, setRenderPageIndex] = useState<number>(0);
  const [email, setEmail] = useState(''); //Email
  const [password, setPassword] = useState(''); //Password
  const [name, setName] = useState(''); //Name
  const [bio, setBio] = useState(''); //Bio
  const [age, setAge] = useState<Date | string>('1992-12-10T00:00:00.000Z');
  const [show, setShow] = useState(false);
  const [minAge, setMinAge] = useState<number | null>(null); //Minimun age
  const [maxAge, setMaxAge] = useState<number | null>(null); //Minimun age
  const [userGender, setUserGender] = React.useState('male');
  const [genderPreference, setGenderPreference] = React.useState('male');
  const [location, setLocation] = useState(''); //Name

  const [addUser] = useMutation(ADD_USER, {
    variables: {
      addUserData: {
        email: email,
        password: password,
        name: name,
        dateOfBirth: age.toString(),
        bio: bio,
        gender: userGender,
        interestedIn: genderPreference,
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
    const currentAge: Date | string = selectedAge || age;
    setShow(Platform.OS === 'ios');
    setAge(currentAge);
    console.log(age);
  };

  const showMode = () => {
    setShow(true);
  };

  function getMaximumDate(): Date {
    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setTime(
      eighteenYearsAgo.valueOf() - 18 * 365 * 24 * 60 * 60 * 1000
    );

    return new Date(eighteenYearsAgo);
  }

  const navigation = useNavigation();

  const handleOnPress = async () => {
    if (renderPageIndex < 2)
      setRenderPageIndex((prevRenderPageIndex) => prevRenderPageIndex + 1);
    else if (renderPageIndex === 2) {
      const result = await addUser();
      console.log('result', result);
      currentUserRegistrationId(+result?.data.addUser.id);
      navigation.navigate('ImageUserPage');
    } else setRenderPageIndex(0);
  };

  function renderPage() {
    switch (renderPageIndex) {
      case 0:
        return (
          <UserAccessData
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        );
      case 1:
        return (
          <PersonalDetails
            name={name}
            setName={setName}
            userGender={userGender}
            setUserGender={setUserGender}
            showMode={showMode}
            onAgeChange={onAgeChange}
            show={show}
            age={age}
            bio={bio}
            setBio={setBio}
            location={location}
            setLocation={setLocation}
          />
        );
      case 2:
        return (
          <UserPreferences
            minAge={minAge}
            setMinAge={setMinAge}
            maxAge={maxAge}
            setMaxAge={setMaxAge}
            genderPreference={genderPreference}
            setGenderPreference={setGenderPreference}
          />
        );

      default:
        return (
          <UserAccessData
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        );
    }
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.registerPageContainer}>
          {renderPage()}
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
