import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppButton from "../atoms/AppButton";
import AppTextInput from "../atoms/AppTextInput";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log("username", username, "password", password);

  return (
    <View>
      <AppTextInput placeholder="username" handler={setUsername} />
      <AppTextInput placeholder="password" handler={setPassword} />
      <AppButton title="Log-In" />
    </View>
  );
}

const styles = StyleSheet.create({});

export default Login;
