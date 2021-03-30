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

  const UpdateMaxAge = (value: number): void =>
    updateState({ ...appState, maxAge: value });

  const updateMinAge = (value: number):void => 
    updateState({...appState, minAge: value});

  const Container = styled.View`
    width: 80%;
    margin: 5px auto;
  `;

  return (
    <Container>
      <View>
        <Text>Interested in</Text>

        <View>
          {/* <View>
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
          </View> */}
        </View>
      </View>
      <Text>Age range</Text>
      <View>
        <AgePrefSelector
          initialValue={65}
          age={appState.maxAge}
          title={'Minimum age'}
          setAge={updateMinAge}
        />
      </View>
    </Container>
  );
};

export default UserPreferences;
