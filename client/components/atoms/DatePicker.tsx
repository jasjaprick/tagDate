import React, { useState } from 'react';
import { View, Button, Platform } from 'react-native';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';

interface IProps {
  showMode: () => void;
  onAgeChange: (_: Event, selectedAge: Date | undefined) => void;
  //minAge: Date;
  show: boolean;
  age: Date;
}

export const DatePicker: React.FunctionComponent<IProps> = ({
  showMode,
  onAgeChange,
  //minAge,
  show,
  age,
}) => {
  // Getting the age of 18 years ago so only 18+ users can register
  function getMaximumDate(): Date {
    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setTime(
      eighteenYearsAgo.valueOf() - 18 * 365 * 24 * 60 * 60 * 1000
    );

    return new Date(eighteenYearsAgo);
  }

  // Maximum age
  function getMinimumDate(): Date {
    const eightyYearsAgo = new Date();
    eightyYearsAgo.setTime(
      eightyYearsAgo.valueOf() - 80 * 365 * 24 * 60 * 60 * 1000
    );

    return new Date(eightyYearsAgo);
  }

  return (
    <View>
      <View>
        <Button onPress={showMode} title="What's your date of birth?" />
      </View>
      {show && (
        <DateTimePicker
          value={age}
          mode={'date'}
          display='default'
          onChange={onAgeChange}
          minimumDate={getMinimumDate()}
          maximumDate={getMaximumDate()}
        />
      )}
    </View>
  );
};
