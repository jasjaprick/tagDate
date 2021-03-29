import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

import colors from '../../helpers/colors';

import InputAge from '../atoms/InputAge';
import useAppState from '../interfaces/AppState';

const UserPreferences: React.FC = () => {
  const [appState, updateState] = useAppState();

  return (
    <View>
      <View style={styles.genderContainer}>
        <Text style={styles.font}>Interested in</Text>

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

      <Text style={styles.font}>Age range</Text>
      <View style={styles.ageContainer}>
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
    marginLeft: '3%',
    flex: 1,
  },
  ageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

export default UserPreferences;
