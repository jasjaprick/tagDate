import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { useMutation, gql } from '@apollo/client';
import { currentUserRegistrationId } from '../interfaces/AppState';
import PrimaryButton from '../atoms/PrimaryButton';
import Camera from '../../assets/img/camera.svg';
import { colors } from '../../helpers/styles';

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

const ImageUserPage: React.FC<IPropsImage> = ({ isPrimary, title, action }) => {
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
        <Text style={styles.text}>You look amazing! 🤩 </Text>
        <Image source={{ uri: selectedImage }} style={styles.thumbnail} />
        {/* <PrimaryButton action={onPressNext} title={'Next'} isPrimary={true} /> */}

        <TouchableOpacity onPress={onPressNext} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.icon} />
      <PrimaryButton
        action={openImagePickerAsync}
        title={'Pick a photo!'}
        isPrimary={true}
      />
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
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
  },
  icon: {
    marginBottom: 10,
  },
  text: {
    marginBottom: 10,
    color: colors.violet,
    fontSize: 20,
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
});

export default ImageUserPage;
