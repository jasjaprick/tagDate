import React, { useState } from 'react';
import { View, StyleSheet, Button, Image, ImageBackground } from 'react-native';
import InputFieldShort from '../atoms/InputFieldShort';

interface IPropsImage {
  source: string;
}

//TODO: FIX IMAGE ISSUE + ADD BUTTON "NEXT"
const LocationPage: React.FC<IPropsImage> = ({ source }: IPropsImage) => {
  const [location, setLocation] = useState(''); //Name

  const image = {
    uri: require('../../images/location.png'),
  };

  return (
    <View style={styles.locationPageContainer}>
      <InputFieldShort
        onChangeText={(location: string) => {
          setLocation(location);
        }}
        placeholder={'Enter your Address'}
        value={location}></InputFieldShort>
    </View>
  );
};

const styles = StyleSheet.create({
  locationPageContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationLogo: {
    width: 350,
    height: 350,
  },
});

export default LocationPage;
