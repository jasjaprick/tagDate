import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import colors from "../../helpers/colors";

function AppTextInput(props: any) {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      secureTextEntry={props.secureTextEntry}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    margin: 10,
    textAlign: "center",
    borderBottomColor: colors.violet,
    borderBottomWidth: 2,
    width: "80%",
  },
});

export default AppTextInput;
