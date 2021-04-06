import React from 'react';
import { View, Text } from 'react-native';
import { AgePrefSelector } from '../atoms/AgePrefSelector';
import { Picker } from '@react-native-picker/picker';
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
            Who do you like?
          </Text>
          <Picker
            selectedValue={genderPreference}
            onValueChange={(itemValue, itemIndex) =>
              setGenderPreference(itemValue)
            }
          >
            <Picker.Item label='Male' value='male' />
            <Picker.Item label='Female' value='female' />
            <Picker.Item label='Whatever' value='all' />
          </Picker>
        </View>
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 18,
          marginTop: 10,
          marginBottom: 20,
          color: '#147EFB',
        }}
      >
        How old do you like &apos;em?
      </Text>
      <View>
        <AgePrefSelector
          title={'Minimum age'}
          age={minAge}
          setAge={setMinAge}
        />
        <AgePrefSelector
          title={'Maximum age'}
          age={maxAge}
          setAge={setMaxAge}
        />
      </View>
    </Container>
  );
};

export default UserPreferences;
