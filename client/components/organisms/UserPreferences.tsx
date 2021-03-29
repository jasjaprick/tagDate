import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { AgePrefSelector } from '../atoms/AgePrefSelector';
import { colors } from '../../helpers/styles';
import InputAge from '../atoms/InputAge';
import useAppState from '../interfaces/AppState';
import styled from 'styled-components/native';



const UserPreferences: React.FC = () => {
  const [appState, updateState] = useAppState();

  const Container = styled.View`
    width: 80%;
    margin: 5px auto;
  `;

  return (
    <Container>
      <View>
        <Text>Interested in</Text>

        <View>
          <View>
            <RadioButton
              value='male'
              status={appState.userGender === 'male' ? 'checked' : 'unchecked'}
              onPress={() => updateState({ ...appState, userGender: 'male' })}
            />
            <Text>Male</Text>
          </View>
          <View>
            <RadioButton
              value='female'
              status={
                appState.userGender === 'female' ? 'checked' : 'unchecked'
              }
              onPress={() => updateState({ ...appState, userGender: 'female' })}
            />
            <Text>Female</Text>
          </View>
        </View>
      </View>
      <Text>Age range</Text>
      <View>
        <InputAge
          title={'From'}
          onChangeText={(minAge: string) =>
            updateState({ ...appState, minAge: +minAge })
          }
          placeholder={''}
          value={appState.minAge?.toString()}></InputAge>

        <InputAge
          title={'to'}
          onChangeText={(maxAge: string) =>
            updateState({ ...appState, maxAge: +maxAge })
          }
          placeholder={''}
          value={appState.maxAge?.toString()}></InputAge>
      </View>
    </Container>
  );
};


export default UserPreferences;
