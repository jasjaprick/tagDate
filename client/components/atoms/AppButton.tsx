import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../../helpers/colors";

function AppButton({ title }) {
  return (
    <TouchableOpacity
      onPress={() => console.log("hi")}
      style={styles.mainButton}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainButton: {
    backgroundColor: colors.violet,
    padding: 20,
    paddingLeft: 60,
    paddingRight: 60,
    borderRadius: 10,
  },
  buttonText: { fontSize: 20 },
});

export default AppButton;
