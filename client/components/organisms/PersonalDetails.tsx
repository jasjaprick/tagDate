import { DatePicker } from '../atoms/DatePicker';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Event } from '@react-native-community/datetimepicker';
import { colors } from '../../helpers/styles';
import InputFieldShort from '../atoms/InputFieldShort';
import styled from 'styled-components/native';


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
}

// styles
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
}) => {
  return (
    <Container>
      <InputFieldShort
      isFluid={true}
        onChangeText={setName}
        placeholder={'Name'}
        value={name}
      ></InputFieldShort>

      <View>
        <DatePicker
          showMode={showMode}
          onAgeChange={onAgeChange}
          show={show}
          age={age}
        ></DatePicker>
      </View>

      <View>
        <Text >Gender</Text>

        <View >
          {/* <View>
            <RadioButton
              value='male'
              status={userGender === 'male' ? 'checked' : 'unchecked'}
              onPress={() => setUserGender('male')}
            />
            <Text>Male</Text>
          </View>

          <View>
            <RadioButton
              value='female'
              status={userGender === 'female' ? 'checked' : 'unchecked'}
              onPress={() => setUserGender('female')}
            />
            <Text >Female</Text>
          </View> */}
        </View>
      </View>
    </Container>
  );
};

export default PersonalDetails;
