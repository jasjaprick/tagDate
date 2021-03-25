import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface IProps {
  tag: string
}

const Tag: React.FunctionComponent<IProps> = ({ tag }) => {
  return (
    <View style={styles.tagContainer}>
      <Text>{tag}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tagContainer: {
    borderRadius: 10,
    borderColor: 'lightgray',
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
});

export default Tag;
