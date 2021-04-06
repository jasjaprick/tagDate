import React, {Dispatch, SetStateAction} from 'react';
import Slider from '@react-native-community/slider';
import {View, Text} from 'react-native';

interface IProps {
  title: string;
  age: number | undefined;
  setAge: (value: number) => void;
}

// Component that renders the age range for the user's preferences and sends state up to the register page
export const AgePrefSelector: React.FunctionComponent<IProps> = ({title, age, setAge}) => {

  return (
    <View>
      <Text>
        {title}: {age}
      </Text>
      <Slider
        style={{ width: 280, height: 40 }}
        minimumValue={18}
        maximumValue={70}
        step={1}
        value={age}
        minimumTrackTintColor='#000000'
        maximumTrackTintColor='#000000'
        onValueChange={value => setAge(value)}
      />
    </View>
  );
}; 