import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { yellow100 } from 'react-native-paper/lib/typescript/styles/colors';

import colors from '../../helpers/colors';

import InputAge from '../atoms/InputAge';

//TODO: ADD STYLE
interface IPropsPreferences {
  minAge: number | null;
  setMinAge: React.Dispatch<React.SetStateAction<number | null>>;
  maxAge: number | null;
  setMaxAge: React.Dispatch<React.SetStateAction<number | null>>;
  genderPreference: string;
  setGenderPreference: React.Dispatch<React.SetStateAction<string>>;
}

const UserPreferences: React.FC<IPropsPreferences> = ({
  minAge,
  setMinAge,
  maxAge,
  setMaxAge,
  genderPreference,
  setGenderPreference,
}) => {
  return (
    <View>
      <View style={styles.genderContainer}>
        <Text style={styles.font}>Interested in</Text>

        <View style={styles.iconContainer}>
          <View>
            <RadioButton
              value='male'
              status={genderPreference === 'male' ? 'checked' : 'unchecked'}
              onPress={() => setGenderPreference('male')}
            />
            <Text style={styles.fontBtn}>Male</Text>
          </View>
          <View>
            <RadioButton
              value='female'
              status={genderPreference === 'female' ? 'checked' : 'unchecked'}
              onPress={() => setGenderPreference('female')}
            />
            <Text style={styles.fontBtn}>Female</Text>
          </View>
        </View>
      </View>

      <>
        <Text style={styles.font}>Age range</Text>
        <View style={styles.AgeContainer}>
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
      </>
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
});

export default UserPreferences;
