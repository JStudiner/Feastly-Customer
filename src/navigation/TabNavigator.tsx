import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ExploreNavigator from "./ExploreNavigator";
import CartNavigator from "./CartNavigator";
import Ionicons from "react-native-vector-icons/Ionicons";
import Map from "../screens/Map";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();
import { ActiveOrderProvider } from "../context/activeOrder";
const TabNavigator = () => {
  return (
    <ActiveOrderProvider>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = "";

            if (route.name === "Explore") {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name === "Map") {
              iconName = focused ? "map" : "map-outline";
            } else if (route.name === "Cart") {
              iconName = focused ? "cart" : "cart-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
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
    </ActiveOrderProvider>
  );
};

export default TabNavigator;
