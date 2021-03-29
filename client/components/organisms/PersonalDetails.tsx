import { DatePicker } from '../atoms/DatePicker';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Event } from '@react-native-community/datetimepicker';
import colors from '../../helpers/colors';
import InputFieldShort from '../atoms/InputFieldShort';
import useAppState from '../interfaces/AppState';

interface IProps {
  showMode: () => void;
  onAgeChange: (_: Event, selectedAge: Date | undefined) => void;
}

const PersonalDetails: React.FC<IProps> = ({ showMode, onAgeChange }) => {
  const [appState, updateState] = useAppState();

  return (
    <View>
      <InputFieldShort
        onChangeText={(name: string) =>
          updateState({ ...appState, name: name })
        }
        placeholder={'Name'}
        value={appState.name}></InputFieldShort>

      <View>
        <DatePicker
          showMode={showMode}
          onAgeChange={onAgeChange}
          show={appState.show}
          age={appState.age}></DatePicker>
      </View>

      <View style={styles.genderContainer}>
        <Text style={styles.font}>Gender</Text>
        <View style={styles.iconContainer}>
          <View>
            <RadioButton
              value='male'
              status={appState.userGender === 'male' ? 'checked' : 'unchecked'}
              onPress={() => updateState({ ...appState, userGender: 'male' })}
            />
            <Text style={styles.fontBtn}>Male</Text>
          </View>
          <View>
            <RadioButton
              value='female'
              status={
                appState.userGender === 'female' ? 'checked' : 'unchecked'
              }
              onPress={() => updateState({ ...appState, userGender: 'female' })}
            />
            <Text style={styles.fontBtn}>Female</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  genderContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  font: { fontSize: 20, color: colors.grey },
  fontBtn: { fontSize: 12, color: colors.grey },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: '18%',
    flex: 1,
  },
});

export default PersonalDetails;
