import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Explore from "../screens/Explore";
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Explore" component={Explore} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
