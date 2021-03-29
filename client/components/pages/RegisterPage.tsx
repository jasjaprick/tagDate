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
import {colors} from '../../helpers/styles';
import PersonalDetails from '../organisms/PersonalDetails';
import BioInfo from '../organisms/BioInfo';
import AddPicture from '../organisms/AddPicture';
import UserAccessData from '../organisms/UserAccessData';
import UserPreferences from '../organisms/UserPreferences';
import InputFieldShort from '../atoms/InputFieldShort';
import { Event } from '@react-native-community/datetimepicker';

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
//TODO: ADD STYLE
//TODO: CHECK TYPE PASSWORD

const RegisterPage = () => {
  const initialDate: Date = new Date('12-10-1992');
  // States
  const [email, setEmail] = useState(''); //Email
  const [password, setPassword] = useState(''); //Password
  const [name, setName] = useState(''); //Name
  const [bio, setBio] = useState(''); //Bio
  const [age, setAge] = useState<Date>(getDate(28));
  const [show, setShow] = useState(false);
  const [minAge, setMinAge] = useState<number>(18); //Minimun age
  const [maxAge, setMaxAge] = useState<number>(70); //Minimun age
  const [userGender, setUserGender] = React.useState('male');
  const [genderPreference, setGenderPreference] = React.useState('male');
  const [location, setLocation] = useState(''); //Name
  const [addUser, { data }] = useMutation(ADD_USER, {
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

  console.log(data);

  // Maximum age
  function getDate(diff: number): Date {
    const returnDate = new Date();
    returnDate.setTime(returnDate.valueOf() - diff * 365 * 24 * 60 * 60 * 1000);

    return new Date(returnDate);
  }

  const onAgeChange = (_: Event, selectedAge: Date | undefined) => {
    const currentAge: Date = selectedAge || age;
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

  console.log(getMaximumDate());

  const navigation = useNavigation();

  const handleOnPress = () => {
    console.log({
      email: email,
      password: password,
      name: name,
      dateOfBirth: age.toString(),
      bio: bio,
      gender: userGender,
      interestedIn: genderPreference,
      location: location,
    });
    addUser();
    navigation.navigate('TagDatePage');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View >
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
              placeholder={'Location'}
              value={location}
            ></InputFieldShort>
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
