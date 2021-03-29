import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { AgePrefSelector } from '../atoms/AgePrefSelector';
import { colors } from '../../helpers/styles';
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
        <AgePrefSelector
          initialValue={18}
          age={minAge}
          title={'Minimum Age'}
          onChange={setMinAge}
        />
        <AgePrefSelector
          initialValue={70}
          age={maxAge}
          title={'Maximum Age'}
          onChange={setMaxAge}
        />
      </View>
    </Container>
  );
};


export default UserPreferences;
