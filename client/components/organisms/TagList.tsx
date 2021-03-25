import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Tag from '../atoms/Tag';

function TagList(props) {
  return (
    <View style={styles.tagListContainer}>
      <Text style={styles.tagTitle}>Tags</Text>

      <View style={styles.tagList}>
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tagListContainer: {
    width: '100%',
    // backgroundColor: 'red',
  },
  tagTitle: {
    marginLeft: 10,
  },
  tagList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default TagList;
