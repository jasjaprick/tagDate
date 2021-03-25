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

          <Button
            onPress={console.log(
              'email;',
              email,
              'pass:',
              password,
              'name:',
              name,
              'age:',
              age,
              'bio:',
              bio,
              'minAge:',
              minAge,
              'maxAge:',
              maxAge
            )}
            title='Next'
            color='#841584'
          />
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
});

export default RegisterPage;
