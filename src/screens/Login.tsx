import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Button from "../components/Button";
import TextInputBox from "../components/TextInput";

interface LoginProps {
  navigation: any;
}
const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [formState, setFormState] = useState({
    login: true,
    phoneNum: "",
    password: "",
  });

  const getPhoneNum = (data: string) => {
    setFormState({
      ...formState,
      phoneNum: data,
    });
  };
  const getPassword = (data: string) => {
    setFormState({
      ...formState,
      password: data,
    });
  };

  const handleLogin = () => {
    formState.login
      ? navigation.navigate("tab")
      : navigation.navigate("userintakev1");
  };

  return (
    <View style={styles.container}>
      <View style={{ top: -20 }}>
        <Text style={styles.text}>
          {formState.login ? "Login to your account" : "Create your account"}
        </Text>
      </View>
      <TextInputBox
        backgroundColor="white"
        width="70%"
        place="Phone Number"
        onEnter={getPhoneNum}
      ></TextInputBox>
      <TextInputBox
        backgroundColor="white"
        width="70%"
        place="Password"
        onEnter={getPassword}
      ></TextInputBox>
      <Button
        text={formState.login ? "Login" : "Create Account"}
        backgroundColor="#F5D6B8"
        textColor="black"
        width="70%"
        onPress={() => {
          handleLogin();
        }}
      />

      <TouchableOpacity
        onPress={() => {
          setFormState({
            ...formState,
            login: !formState.login,
          });
        }}
      >
        <View style={{ alignSelf: "center" }}>
          <Text>
            {formState.login
              ? "Need to create an Account?"
              : "Already have an Account?"}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF4DF",
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 19,
    fontWeight: "bold",
  },
});
