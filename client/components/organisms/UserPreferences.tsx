import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { AgePrefSelector } from '../atoms/AgePrefSelector';
import { colors } from '../../helpers/styles';
import InputAge from '../atoms/InputAge';
import useAppState from '../interfaces/AppState';
import styled from 'styled-components/native';

interface IPropsPreferences {
  minAge: number | null;
  setMinAge: React.Dispatch<React.SetStateAction<number | null>>;
  maxAge: number | null;
  setMaxAge: React.Dispatch<React.SetStateAction<number | null>>;
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
          {/* <View>
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
          </View> */}
        </View>
      </View>

      <Text style={styles.font}>Age range</Text>
      <View style={styles.ageContainer}>
        <InputAge
          title={'From'}
          onChangeText={(minAge: string) => {
            setMinAge(+minAge);
          }}
          placeholder={''}
          value={minAge?.toString()}></InputAge>

        <InputAge
          title={'to'}
          onChangeText={(maxAge: string) => {
            setMaxAge(+maxAge);
          }}
          placeholder={''}
          value={maxAge?.toString()}></InputAge>
      </View>
    </Container>
  );
};

export default UserPreferences;
