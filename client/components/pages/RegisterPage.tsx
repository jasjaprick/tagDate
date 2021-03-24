import React, { useState} from 'react';
import { View, Text, StyleSheet, TextInput,NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import colors from '../../helpers/colors';


import InputFieldShort from '../atoms/InputFieldShort';
import InputFieldLarge from '../atoms/InputFieldLarge';

function RegisterPage() {
  const [name, setName] = useState(''); //Name
  const [age, setAge] = useState(0); //Age
  const [bio, setBio] = useState(''); //Bio

  return (
    <View style={styles.registerPageContainer}>
  
      <InputFieldShort
        onChange={(name: string) => {
          setName(name);
        }}
        placeholder={'Name'}
      >
     </InputFieldShort>


     <InputFieldShort
        onChange={(age: number) => {
        setAge(age);
      }}
        placeholder={'Age'}
      >
     </InputFieldShort>

  

   <Text style={styles.font}>Gender</Text>


   <InputFieldLarge
        onChange={(bio: string) => {
          setBio(bio);
        }}
        placeholder={'Tell us about yourself...'}
      >
  </InputFieldLarge>




   <Text  style={styles.font}>Add picture</Text>

   <Text style={styles.font}>Interested in</Text>

   <Text style={styles.font}>Age range</Text>


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
    backgroundColor: 'blue',
    position: 'relative'
    
  },
    font: { fontSize: 20, color: 'grey' },
});



export default RegisterPage;






  





