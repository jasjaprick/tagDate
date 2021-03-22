import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

function AppTextInput({ placeholder, handler }) {
  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={handler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "red",
    margin: 10,
    textAlign: "center",
  },
});

export default AppTextInput;
