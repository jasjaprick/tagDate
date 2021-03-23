import React, { useState} from 'react';
import { View, Text, StyleSheet, TextInput, } from 'react-native';
import colors from '../../helpers/colors';

import InputFieldShort from '../atoms/InputFieldShort';
import InputFieldLarge from '../atoms/InputFieldLarge';

function RegisterPage() {
  const [text, onChangeText] = useState(''); //Name
  const [number, onChangeNumber] = useState(''); //Age
  const [bio, onChangeBio] = useState(''); //Bio

  return (
    <View style={styles.registerPageContainer}>
  
      <InputFieldShort
        onChange={onChangeText}
        placeholder={'Name'}
      >
     </InputFieldShort>


     <InputFieldShort
        onChange={onChangeNumber}
        placeholder={'Age'}
      >
     </InputFieldShort>

  

   <Text style={styles.font}>Gender</Text>


   <InputFieldLarge
        onChange={onChangeText}
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






  





