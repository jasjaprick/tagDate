import React from "react";
import { Text, View, StyleSheet } from "react-native";
// import MapView from "react-native-maps";

function locationView(props) {
  return (
    <View>
      {/* <MapView style={styles.mapStyle} /> */}
      <Text>locationview</Text>;
    </View>
  );
}

const styles = StyleSheet.create({
  mapStyle: {
    width: 300,
    height: 300,
  },
});

export default locationView;
