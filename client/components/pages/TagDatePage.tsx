import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import InputFieldLarge from '../atoms/InputFieldLarge';
import InputFieldShort from '../atoms/InputFieldShort';

const TagDatePage = (props) => {
  const [dateDescription, setDateDescription] = useState(''); //Date description
  const [tag, setTag] = useState(''); //Tag

  const HandleOnPress = () => {
    console.log('dateDescription', dateDescription);
    console.log('tag', tag);
    props.navigation.replace('MatchPage');
  };

  return (
    <View>
      <InputFieldLarge
        onChangeText={setDateDescription}
        placeholder={'I want to...'}
        value={dateDescription}></InputFieldLarge>

      <InputFieldShort
        onChangeText={setTag}
        placeholder={'Choose your tag'}
        value={tag}></InputFieldShort>

      <TouchableOpacity onPress={HandleOnPress} style={styles.confirmButton}>
        <Ionicons name='md-checkmark-circle' size={32} color='green' />
        {/* <Text>Confirm</Text> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  confirmButton: {},
});

export default TagDatePage;
