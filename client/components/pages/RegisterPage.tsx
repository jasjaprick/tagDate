import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../helpers/colors';

import InputFieldShort from '../atoms/InputFieldShort';
import InputFieldLarge from '../atoms/InputFieldLarge';

function RegisterPage() {
  const [name, setName] = useState(''); //Name
  const [age, setAge] = useState<number | null>(null); //Age
  const [bio, setBio] = useState(''); //Bio

  return (
    <View style={styles.registerPageContainer}>
      <InputFieldShort
        onChangeText={(name: string) => {
          setName(name);
        }}
        placeholder={'Name'}
        value={name}></InputFieldShort>

      <InputFieldShort
        onChangeText={(age: string) => {
          setAge(+age);
        }}
        placeholder={'Age'}
        value={age?.toString()}></InputFieldShort>

      <View style={styles.genderContainer}>
        <Text style={styles.font}>Gender</Text>
        <View style={styles.genderItemsContainer}>
          <TouchableOpacity style={styles.genderItem}>
            <View style={styles.genderItem}>
              <Ionicons
                name='male-outline'
                label='User'
                size={24}
                color='black'
              />
              <Text style={styles.fontGender}>Male</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.genderItem}>
            <View style={styles.gender}>
              <Ionicons name='female-outline' size={24} color='black' />
              <Text style={styles.fontGender}>Female</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <InputFieldLarge
        onChangeText={(bio: string) => {
          setBio(bio);
        }}
        placeholder={'Tell us about yourself...'}
        value={bio}></InputFieldLarge>

      <View style={styles.pictureContainer}>
        <Text style={styles.font}>Add picture</Text>
        <TouchableOpacity style={styles.camera}>
          <View style={styles.genderItem}>
            <MaterialCommunityIcons
              name='camera-plus-outline'
              size={24}
              color='black'
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.genderContainer}>
        <Text style={styles.font}>Interested in</Text>
        <View style={styles.genderItemsContainer}>
          <TouchableOpacity style={styles.genderItem}>
            <View style={styles.genderItem}>
              <Ionicons
                name='male-outline'
                label='User'
                size={24}
                color='black'
              />
              <Text style={styles.fontGender}>Male</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.genderItem}>
            <View style={styles.gender}>
              <Ionicons name='female-outline' size={24} color='black' />
              <Text style={styles.fontGender}>Female</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.font}>Age range</Text>
      {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  registerPageContainer: {
    flex: 1,
    width: '90%',
    alignItems: 'stretch',
    justifyContent: 'center',
    // alignContent: 'stretch',
    alignSelf: 'center',
    flexDirection: 'column',
    backgroundColor: colors.white,
    position: 'relative',
  },
  font: { fontSize: 20, color: colors.grey },
  genderItemsContainer: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    flexDirection: 'row',
    marginRight: '8%',
  },
  fontGender: { fontSize: 10, color: colors.grey },
  genderItem: {
    display: 'flex',
    // flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: '5%',
  },
  gender: {},
  genderContainer: {},
  pictureContainer: {},
});

export default RegisterPage;
