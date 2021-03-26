import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useMutation, gql } from '@apollo/client';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../helpers/colors';
import PersonalDetails from '../organisms/PersonalDetails';
import BioInfo from '../organisms/BioInfo';
import AddPicture from '../organisms/AddPicture';
import UserAccessData from '../organisms/UserAccessData';
import UserPreferences from '../organisms/UserPreferences';
import InputFieldShort from '../atoms/InputFieldShort';

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
  const [email, setEmail] = useState(''); //Email
  const [password, setPassword] = useState(''); //Password
  const [name, setName] = useState(''); //Name
  const [age, setAge] = useState<number | null>(null); //Age
  const [bio, setBio] = useState(''); //Bio
  const [minAge, setMinAge] = useState<number | null>(null); //Minimun age
  const [maxAge, setMaxAge] = useState<number | null>(null); //Minimun age
  const [userGender, setUserGender] = React.useState('male');
  const [genderPreference, setGenderPreference] = React.useState('male');
  const [location, setLocation] = useState(''); //Name
  const [addUser, { error, data }] = useMutation(ADD_USER, {
    variables: {
      addUserData: {
        email: email,
        password: password,
        name: name,
        age: age,
        bio: bio,
        gender: userGender,
        interestedIn: genderPreference,
        location: location,
      },
    },
  });

  const navigation = useNavigation();

  const handleOnPress = () => {
    console.log('-------it has been called');
    addUser();
    navigation.navigate('TagDatePage');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
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
            age={age}
            setAge={setAge}
            userGender={userGender}
            setUserGender={setUserGender}
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

          <View style={styles.locationPageContainer}>
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
