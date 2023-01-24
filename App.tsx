import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react"

import { NavigationContainer } from '@react-navigation/native';

import LoginNavigator from "./src/navigation/LoginNavigator"
//Random Idea: a current status notion element that is mutable and stores history

import { Amplify } from 'aws-amplify';

export default function App() {
  return (
    <NavigationContainer>
      <LoginNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
