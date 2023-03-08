import React, { useState } from "react";

import Login from "../screens/Login";
import UserIntakeV1 from "../screens/UserIntakeV1";
import UserIntakeV2 from "../screens/UserIntakeV2";
import TabNavigator from "./TabNavigator";

import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { UserInfo } from "../context/userInfo";

const LoginStackNav = createNativeStackNavigator();

const RootNavigator = () => {
  const [userIntakeData, setUserIntakeData] = useState({
    name: "",
    phoneNum: "",
    password: "",
  });

  return (
    <UserInfo.Provider value={{ userIntakeData, setUserIntakeData }}>
      <LoginStackNav.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "#CF9AE8",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <LoginStackNav.Screen name="tab" component={TabNavigator} />
      </LoginStackNav.Navigator>
    </UserInfo.Provider>
  );
};

export default RootNavigator;
