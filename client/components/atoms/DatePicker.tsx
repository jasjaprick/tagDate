import React, { useState } from 'react';
import { View, Button, Platform } from 'react-native';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';

interface IProps {
  showMode: () => void;
  onAgeChange: (_: Event, selectedAge: Date | undefined) => void;
  minAge: Date;
  show: boolean;
  age: Date;
}

export const DatePicker: React.FunctionComponent<IProps> = ({
  showMode,
  onAgeChange,
  minAge,
  show,
  age,
}) => {
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
          maximumDate={minAge}
        />
      )}
    </View>
  );
};
