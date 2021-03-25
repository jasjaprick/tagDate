import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import InputFieldLarge from '../atoms/InputFieldLarge';
import InputFieldShort from '../atoms/InputFieldShort';
import { useMutation, gql } from '@apollo/client';
const ADD_ACTIVITY = gql`
  mutation AddActivityMutation($addActivityData: AddActivityInput!) {
    addActivity(data: $addActivityData) {
      tag
      description
      user {
        id
      }
    }
  }
`;

const TagDatePage = (props) => {
  const [dateDescription, setDateDescription] = useState(''); //Date description
  const [tag, setTag] = useState(''); //Tag
  const [addActivity, { error, data }] = useMutation(ADD_ACTIVITY, {
    variables: {
      addActivityData: {
        description: dateDescription,
        tag: tag,
        postedBy: 7,
      },
    },
  });


  const navigation = useNavigation();



  const HandleOnPress = () => {
    console.log('dateDescription', dateDescription);
    console.log('tag', tag);
    addActivity();

    navigation.navigate('SwipePage');

  };

  return (
    <View>
      <InputFieldLarge
        onChangeText={setDateDescription}
        placeholder={'I want to...'}
        value={dateDescription}
      ></InputFieldLarge>

      <InputFieldShort
        onChangeText={setTag}
        placeholder={'Choose your tag'}
        value={tag}
      ></InputFieldShort>

      <TouchableOpacity onPress={HandleOnPress} style={styles.confirmButton}>
        <Ionicons name='md-checkmark-circle' size={32} color='green' />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  confirmButton: {},
});

export default TagDatePage;
