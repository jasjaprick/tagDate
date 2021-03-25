import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Tag from '../atoms/Tag';

interface IProps {
  tags: string[]
}

const TagList: React.FunctionComponent<IProps> = ({tags}) => {
  return (
    <View style={styles.tagListContainer}>
      <Text style={styles.tagTitle}>Tags</Text>

      <View style={styles.tagList}>
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </View>
    </View>
  );
};

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
