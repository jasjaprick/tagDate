import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../../helpers/colors";

function AppButton({ title, action }) {
  return (
    <TouchableOpacity onPress={action} style={styles.mainButton}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainButton: {
    backgroundColor: colors.violet,
    padding: 20,
    borderRadius: 20,
    margin: 20,
    width: "60%",
    alignItems: "center",
  },
  buttonText: { fontSize: 20, color: "white" },
});

export default AppButton;
