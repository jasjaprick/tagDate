import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../atoms/PrimaryButton';


function MatchSuccessPage(props) {
  return (
    <View style={styles.MatchSuccessPageContainer}>
      <Text style={styles.MatchSuccessPageTitle}>Match!</Text>
      <View style={styles.imageContainer}></View>
      <PrimaryButton
      isPrimary={true}
        title="Let's Talk!"
        action={() => console.log('Let\'s talk!')}
      />
      <PrimaryButton isPrimary={false} title='Later' action={() => console.log('Later')} />
    </View>
  );
}

const styles = StyleSheet.create({
  MatchSuccessPageContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  MatchSuccessPageTitle: {
    fontSize: 40,
    marginBottom: 20,
  },
  imageContainer: {
    width: 200,
    height: 200,
    backgroundColor: 'dodgerblue',
    marginBottom: 20,
  },
});

export default MatchSuccessPage;
