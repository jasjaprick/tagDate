import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../helpers/colors';

import InputFieldLarge from '../atoms/InputFieldLarge';
import InputAge from '../atoms/InputAge';
import PersonalDetails from '../organisms/PersonalDetails';
import BioInfo from '../organisms/BioInfo';
import AddPicture from '../organisms/AddPicture';
import UserAccessData from '../organisms/UserAccessData';
import UserPreferences from '../organisms/UserPreferences';
import InputFieldShort from '../atoms/InputFieldShort';

interface Iprops {
  onPress: (text: string) => void;
}

//TODO: FIX SCROLLVIEW
//TODO: ADD STYLE
//TODO: CHECK TYPE PASSWORD

function RegisterPage() {
  const [email, setEmail] = useState(''); //Email
  const [password, setPassword] = useState(''); //Password
  const [name, setName] = useState(''); //Name
  const [age, setAge] = useState<number | null>(null); //Age
  const [bio, setBio] = useState(''); //Bio
  const [minAge, setMinAge] = useState<number | null>(null); //Minimun age
  const [maxAge, setMaxAge] = useState<number | null>(null); //Minimun age
  const [userGender, setUserGender] = React.useState('male');
  const [interestGender, setInterestGender] = React.useState('male');
  const [location, setLocation] = useState(''); //Name

  const handleOnPress = () => {
    console.log('email:', email);
    console.log('password:', password);
    console.log('name:', name);
    console.log('age:', age);
    console.log('bio:', bio);
    console.log('minAge:', minAge);
    console.log('maxAge:', maxAge);
    console.log('userGender:', userGender);
    console.log('interestGender:', interestGender);
    console.log('location:', location);
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
            interestGender={interestGender}
            setInterestGender={setInterestGender}
          />

          <View style={styles.locationPageContainer}>
            <InputFieldShort
              onChangeText={(location: string) => {
                setLocation(location);
              }}
              placeholder={'Location'}
              value={location}></InputFieldShort>

            {/* <ImageBackground
        source={image}
        style={styles.locationLogo}></ImageBackground> */}
          </View>

          <TouchableOpacity onPress={handleOnPress} style={styles.nextButton}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  registerPageContainer: {
    flex: 1,
    width: '90%',
    alignItems: 'stretch',
    justifyContent: 'center',
    // alignContent: 'stretch',
    alignSelf: 'center',
    flexDirection: 'column',
    backgroundColor: colors.white,
    position: 'relative',
  },
  nextButton: {
    backgroundColor: colors.violet,
    padding: 20,
    borderRadius: 20,
    margin: 20,
    width: '60%',
    alignItems: 'center',
  },
  buttonText: { fontSize: 20, color: 'white' },
});

export default RegisterPage;
