import React, { useState } from 'react';
import { ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useMutation, gql } from '@apollo/client';
import { boxShadow } from '../../helpers/styles';
import PersonalDetails from '../organisms/PersonalDetails';
import UserAccessData from '../organisms/UserAccessData';
import PrimaryButton from '../atoms/PrimaryButton';
import UserPreferences from '../organisms/UserPreferences';
import RegisterHeader from '../molecules/RegisterHeader';
import { Event } from '@react-native-community/datetimepicker';
import { currentUserRegistrationId } from '../interfaces/AppState';
import styled from 'styled-components/native';
import Background from '../../assets/img/bcg.svg';

interface Iprops {
  onPress: (text: string) => void;
}

const OuterContainer = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: white;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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

const ButtonContainer = styled.View`
  position: relative;
  bottom: 10px;
`;

const InnerContainer = styled.View`
  padding: 20px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
`;

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
  const [renderPageIndex, setRenderPageIndex] = useState<number>(0);
  const [email, setEmail] = useState(''); //Email
  const [password, setPassword] = useState(''); //Password
  const [name, setName] = useState(''); //Name
  const [bio, setBio] = useState(''); //Bio
  const [age, setAge] = useState<Date>(getDate(28));
  const [show, setShow] = useState(false);
  const [minAge, setMinAge] = useState<number>(18); //Minimun age
  const [maxAge, setMaxAge] = useState<number>(65); //Minimun age
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
    if (renderPageIndex < 2)
      setRenderPageIndex((prevRenderPageIndex) => prevRenderPageIndex + 1);
    else if (renderPageIndex === 2) {
      const result = await addUser();
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
    <OuterContainer>
      <Background
        style={{
          position: 'absolute',
          width: '100%',
          bottom: 0,
          margin: 0,
        }}
      />
      <RegisterHeader title={'Register'} />
      <Container>
        <ScrollView>
          <InnerContainer>
            {renderPage()}
            <ButtonContainer>
              <PrimaryButton
                action={handleOnPress}
                title={'Next'}
                isPrimary={true}
              />
            </ButtonContainer>
          </InnerContainer>
        </ScrollView>
      </Container>
    </OuterContainer>
  );
};

export default RegisterPage;
