import { DatePicker } from '../atoms/DatePicker';
import React from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Event } from '@react-native-community/datetimepicker';
import { colors } from '../../helpers/styles';
import InputFieldShort from '../atoms/InputFieldShort';
import styled from 'styled-components/native';
import useAppState from '../interfaces/AppState';


// Props
interface IProps {
  showMode: () => void;
  onAgeChange: (_: Event, selectedAge: Date | undefined) => void;
}

const Container = styled.View`
  width: 80%;
  margin: 5px auto;
`;

const PersonalDetails: React.FC<IProps> = ({ showMode, onAgeChange }) => {
  const [appState, updateState] = useAppState();

  return (
    <Container>
      <InputFieldShort
        onChangeText={(name: string) =>
          updateState({ ...appState, name: name })
        }
        placeholder={'Name'}
        isFluid={true}
        value={appState.name}></InputFieldShort>

      <View>
        <DatePicker
          showMode={showMode}
          onAgeChange={onAgeChange}
          show={appState.show}
          age={appState.age}></DatePicker>
      </View>

      <View>
        <Text >Gender</Text>

        <View >
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
            <Text >Female</Text>
          </View> */}
        </View>
      </View>
    </Container>
  );
};

export default PersonalDetails;
