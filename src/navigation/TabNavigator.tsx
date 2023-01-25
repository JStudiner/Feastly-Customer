import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Explore from "../screens/Explore";
import Map from "../screens/Map";
import Order from "../screens/Order";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
