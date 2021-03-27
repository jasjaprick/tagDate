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
      id
    }
  }
`;

const TagDatePage = () => {
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

    navigation.navigate('MenuNavigator');
  };

  return (
    <View style={styles.TagDateContainer}>
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
  TagDateContainer: {
    marginTop: '5%',
    width: '90%',
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  confirmButton: {
    alignSelf: 'flex-end',
  },
});

export default TagDatePage;
