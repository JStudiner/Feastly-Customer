import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ExploreNavigator from "./ExploreNavigator";
import CartNavigator from "./CartNavigator";

import Map from "../screens/Map";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#CF9AE8",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Explore" component={ExploreNavigator} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Cart" component={CartNavigator} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
