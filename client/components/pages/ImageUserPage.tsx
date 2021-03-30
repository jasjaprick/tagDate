import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { useMutation, gql } from '@apollo/client';
import { currentUserRegistrationId } from '../interfaces/AppState';

interface IPropsImage {
  selectedImage: string | null;
  setSelectedImage: React.Dispatch<React.SetStateAction<string | null>>;
}

const ADD_PROFILE_PICTURE = gql`
  mutation Mutation($changePictureData: changePictureInput!) {
    changePicture(data: $changePictureData) {
      profilePicture
      name
    }
  }
`;

const ImageUserPage: React.FC<IPropsImage> = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const userId = currentUserRegistrationId();

  const [changePicture] = useMutation(ADD_PROFILE_PICTURE, {
    variables: {
      changePictureData: {
        id: userId,
        profilePic: selectedImage,
      },
    },
  });

  const openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage(pickerResult.uri);
  };

  const navigation = useNavigation();

  const onPressNext = async () => {
    const result = await changePicture();
    navigation.navigate('TagDatePage');
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: selectedImage }} style={styles.thumbnail} />
        <TouchableOpacity onPress={onPressNext} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.imgur.com/TkIrScD.png' }}
        style={styles.logo}
      />
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button
        below!
      </Text>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'stretch',
  },
});

export default ImageUserPage;
