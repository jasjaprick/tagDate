import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

import colors from '../../helpers/colors';

import InputAge from '../atoms/InputAge';

//TODO: ADD STYLE
interface IPropsPreferences {
  minAge: number | null;
  setMinAge: React.Dispatch<React.SetStateAction<number | null>>;
  maxAge: number | null;
  setMaxAge: React.Dispatch<React.SetStateAction<number | null>>;
  interestGender: string;
  setInterestGender: React.Dispatch<React.SetStateAction<string>>;
}

const UserPreferences: React.FC<IPropsPreferences> = ({
  minAge,
  setMinAge,
  maxAge,
  setMaxAge,
  interestGender,
  setInterestGender,
}) => {
  return (
    <View>
      <View style={styles.genderContainer}>
        <Text style={styles.font}>Interested in</Text>
        <RadioButton
          value='male'
          status={interestGender === 'male' ? 'checked' : 'unchecked'}
          onPress={() => setInterestGender('male')}
        />
        <RadioButton
          value='female'
          status={interestGender === 'female' ? 'checked' : 'unchecked'}
          onPress={() => setInterestGender('female')}
        />
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
});

export default UserPreferences;
