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
  function getDate(diff: number): Date {
    const returnDate = new Date();
    returnDate.setTime(
      returnDate.valueOf() - diff * 365 * 24 * 60 * 60 * 1000
    );

    return new Date(returnDate);
  }



  return (
    <View>
      <View>
        <Button onPress={showMode} title="What's your date of birth?" />
      </View>
      {show && (
        <DateTimePicker
          value={new Date(age)}
          mode={'date'}
          display='default'
          onChange={onAgeChange}
          minimumDate={getDate(80)}
          maximumDate={getDate(18)}
        />
      )}
    </View>
  );
};
