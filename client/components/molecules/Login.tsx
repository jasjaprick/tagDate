import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppButton from "../atoms/AppButton";
import AppTextInput from "../atoms/AppTextInput";

function Login(props) {
  console.log(`props`, props);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log("username", username, "password", password);

  const handleLogin = () => {
    // console.log("pressing login button");
    props.navigation.replace("LoginSuccessPage");
  };

  return (
    <View style={styles.loginContainer}>
      <AppTextInput placeholder="username" handler={setUsername} />
      <AppTextInput
        placeholder="password"
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <AppButton title="Login" action={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

export default Login;
