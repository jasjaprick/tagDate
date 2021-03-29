import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import InputFieldLarge from '../atoms/InputFieldLarge';
import InputFieldShort from '../atoms/InputFieldShort';
import { useMutation, gql } from '@apollo/client';
import PrimaryButton from '../atoms/PrimaryButton';
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

  const handleOnPress = () => {
    console.log('dateDescription', dateDescription);
    console.log('tag', tag);
    addActivity();

    navigation.navigate('MenuNavigator');
  };

  return (
    <View style={styles.TagDateContainer}>
      <InputFieldShort
        onChangeText={setDateDescription}
        placeholder={'I want to...'}
        value={dateDescription}
        isFluid={false}
      ></InputFieldShort>

      <InputFieldShort
        onChangeText={setTag}
        placeholder={'Choose your tag'}
        value={tag}
        isFluid={false}
      ></InputFieldShort>

      <PrimaryButton title='Date!' action={handleOnPress} isPrimary={true} />
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
