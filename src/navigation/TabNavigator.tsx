import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'

import Explore from "../screens/Explore";
import Map from "../screens/Map";
import Order from "../screens/Order";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor:"#FFF4DF"}}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Explore') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Map') {
            iconName = focused ? 'map' : 'map-outline';
          }else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          }else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: '#CF9AE8',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
