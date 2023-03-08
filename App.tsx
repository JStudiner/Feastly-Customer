import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import RootNavigator from "./src/navigation/RootNavigator";
//Random Idea: a current status notion element that is mutable and stores history

import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports"
import { withAuthenticator ,AmplifyTheme} from "aws-amplify-react-native";

Amplify.configure(awsconfig)

function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const signUpConfig = {
  header: "Welcome to Feastly",
  hideAllDefaults: true,
  signUpFields: [
    {
      label: "Phone Number",
      key: "phone_number",
      required: true,
      displayOrder: 1,
      type: "string",
    },
    {
      label: "Full Name",
      key: "name",
      required: true,
      displayOrder: 2,
      type: "string",
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 3,
      type: "password",
    },
  ],
};

const customTheme = {
  ...AmplifyTheme,
  container: {
    ...AmplifyTheme.container,
    backgroundColor: "#FFF4DF",
  },
  button: {
    ...AmplifyTheme.button,
    backgroundColor: "#F5D6B8",
    borderRadius: 10,
    borderWidth: 3,
  },
  buttonText: {
    ...AmplifyTheme.buttonText,
    color: "black",
  },
  buttonDisabled: {
    ...AmplifyTheme.buttonDisabled,
    backgroundColor: "#F5D6B8",
    borderRadius: 10,
    borderWidth: 3,
  },
  phoneInput: {
    ...AmplifyTheme.phoneInput,
    borderColor: "#000",
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: "#FFF",
  },
  input: {
    ...AmplifyTheme.input,
    borderColor: "#000",
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: "#FFF",
  },
  sectionHeaderText: {
    ...AmplifyTheme.sectionHeaderText,
    fontWeight: "700",
  },
  sectionFooterLink: {
    alignItems: "baseline",
    color: "#000",
    fontSize: 14,
    textAlign: "center",
  },
};

export default withAuthenticator(App, {
  signUpConfig,
  theme: customTheme,
  usernameAttributes: "phone_number",
});