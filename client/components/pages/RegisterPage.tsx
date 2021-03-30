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
import BioInfo from '../organisms/BioInfo';
import AddPicture from '../organisms/AddPicture';
import UserAccessData from '../organisms/UserAccessData';
import PrimaryButton from '../atoms/PrimaryButton';
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
  const initialDate: Date = getDate(28);
  // States
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

  // fn passed down to datepicker through personal details that handles the DOB select event
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

  // fn passed down to datepicker through personal details that handles the visibility of the
  const showMode = () => {
    setShow(true);
  };


  const navigation = useNavigation();

  const handleOnPress = async () => {
    const result = await addUser();
    console.log('result', result);
    currentUserRegistrationId(+result?.data.addUser.id);
    navigation.navigate('TagDatePage');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.registerPageContainer}>
          <UserAccessData
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />

          <PersonalDetails
            name={name}
            setName={setName}
            userGender={userGender}
            setUserGender={setUserGender}
            showMode={showMode}
            onAgeChange={onAgeChange}
            //minAge={getMaximumDate()}
            show={show}
            age={age}
          />

          <BioInfo bio={bio} setBio={setBio} />

          <AddPicture />

          <UserPreferences
            minAge={minAge}
            setMinAge={setMinAge}
            maxAge={maxAge}
            setMaxAge={setMaxAge}
            genderPreference={genderPreference}
            setGenderPreference={setGenderPreference}
          />

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
