import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { AgePrefSelector } from '../atoms/AgePrefSelector';
import InputAge from '../atoms/InputAge';
import styled from 'styled-components/native';

interface IPropsPreferences {
  minAge: number;
  setMinAge: React.Dispatch<React.SetStateAction<number>>;
  maxAge: number;
  setMaxAge: React.Dispatch<React.SetStateAction<number>>;
  genderPreference: string;
  setGenderPreference: React.Dispatch<React.SetStateAction<string>>;
}

const Container = styled.View`
  width: 80%;
  margin: 5px auto;
`;

const UserPreferences: React.FC<IPropsPreferences> = ({
  minAge,
  setMinAge,
  maxAge,
  setMaxAge,
  genderPreference,
  setGenderPreference,
}) => {
  return (
    <Container>
      <View>
        <Text>Interested in</Text>

        <View>
          <View>
            <RadioButton
              value='male'
              status={genderPreference === 'male' ? 'checked' : 'unchecked'}
              onPress={() => setGenderPreference('male')}
            />
            <Text>Male</Text>
          </View>
          <View>
            <RadioButton
              value='female'
              status={genderPreference === 'female' ? 'checked' : 'unchecked'}
              onPress={() => setGenderPreference('female')}
            />
            <Text>Female</Text>
          </View>
        </View>
      </View>

      <Text>Age range</Text>
      <View>
        <AgePrefSelector title={'Minimum age'} age={minAge} setAge={setMinAge}  />
        <AgePrefSelector title={'Maximum age'} age={maxAge} setAge={setMaxAge}  />
      </View>
    </Container>
  );
};

export default UserPreferences;
