import { DatePicker } from '../atoms/DatePicker';
import React from 'react';
import { View, Text } from 'react-native';
import { Event } from '@react-native-community/datetimepicker';
import InputFieldShort from '../atoms/InputFieldShort';
import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';
// import { useNavigation } from '@react-navigation/native';

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
  // const navigation = useNavigation();

  // const handleOnPress = () => {
  //   navigation.navigate('UserPreferences');
  // };

  return (
    <Container>
      <InputFieldShort
        onChangeText={setName}
        placeholder={'Name'}
        isFluid={true}
        value={name}
      ></InputFieldShort>

      <View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              marginTop: 20,
              marginBottom: -60,
              color: '#147EFB',
            }}
          >
            What&apos;s your gender?
          </Text>
          <Picker
            selectedValue={userGender}
            onValueChange={(itemValue, itemIndex) => setUserGender(itemValue)}
          >
            <Picker.Item label='Male' value='male' />
            <Picker.Item label='Female' value='female' />
          </Picker>
        </View>
      </View>

      <View>
        <InputFieldShort
          onChangeText={setBio}
          placeholder={'Describe yourself in 140 characters'}
          isFluid={true}
          value={bio}
        />
      </View>

      <View>
        <InputFieldShort
          onChangeText={setLocation}
          placeholder={'Where do you live?'}
          isFluid={true}
          value={location}
        />
      </View>
      <View>
        <DatePicker
          showMode={showMode}
          onAgeChange={onAgeChange}
          show={show}
          age={age}
        ></DatePicker>
      </View>
    </Container>
  );
};

export default PersonalDetails;
