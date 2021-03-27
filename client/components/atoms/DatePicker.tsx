import React, { useState } from 'react';
import { View, Button, Platform } from 'react-native';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';

export const DatePicker: React.FunctionComponent = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const onChange = (_: Event, selectedDate: Date | undefined) => {
    const currentDate: Date | undefined = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    console.log(date);
  };

//  const eighteenYearsAgo: Date = new Date(eighteenYearsAgo.setTime(
//    eighteenYearsAgo.valueOf() - ;


  const getMaximumDate = (): Date => {
    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setTime(
      eighteenYearsAgo.valueOf() - 18 * 365 * 24 * 60 * 60 * 1000
    );

    return new Date(eighteenYearsAgo);
  };


  const showMode = () => {
    setShow(true);
  };


  return (
    <View>
      <View>
        <Button onPress={showMode} title="What's your date of birth?" />
      </View>
      {show && (
        <DateTimePicker
          value={date}
          mode={'date'}
          is24Hour={true}
          display='default'
          onChange={onChange}
          maximumDate={getMaximumDate()}
        />
      )}
    </View>
  );
};
