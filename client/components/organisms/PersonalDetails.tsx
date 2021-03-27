import { DatePicker } from '../atoms/DatePicker';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

import colors from '../../helpers/colors';
import InputFieldShort from '../atoms/InputFieldShort';

interface IProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  // setAge: (_: Event, date?: Date | undefined) => void;
  userGender: string;
  setUserGender: React.Dispatch<React.SetStateAction<string>>;
}

const PersonalDetails: React.FC<IProps> = ({
  name,
  setName,
  userGender,
  setUserGender,
}) => {
  return (
    <View>
      <InputFieldShort
        onChangeText={setName}
        placeholder={'Name'}
        value={name}
      ></InputFieldShort>

      <View>
        <DatePicker></DatePicker>
      </View>

      <View style={styles.genderContainer}>
        <Text style={styles.font}>Gender</Text>

        <View style={styles.iconContainer}>
          <View>
            <RadioButton
              value='male'
              status={userGender === 'male' ? 'checked' : 'unchecked'}
              onPress={() => setUserGender('male')}
            />
            <Text style={styles.fontBtn}>Male</Text>
          </View>

          <View>
            <RadioButton
              value='female'
              status={userGender === 'female' ? 'checked' : 'unchecked'}
              onPress={() => setUserGender('female')}
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
