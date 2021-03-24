import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../helpers/colors';

const AddPicture = () => {
  return (
    <View style={styles.pictureContainer}>
      <Text style={styles.font}>Add picture</Text>
      <TouchableOpacity>
        <View>
          <MaterialCommunityIcons
            name='camera-plus-outline'
            size={24}
            style={styles.icons}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  pictureContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  font: { fontSize: 20, color: colors.grey },
  icons: {
    color: colors.grey,
  },
});

export default AddPicture;
