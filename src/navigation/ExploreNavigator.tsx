import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const ExploreStackNav = createNativeStackNavigator();

import Explore from "../screens/Explore";
import Storefront from "../screens/Storefront";

const ExploreNavigator = () => {
  return (
    <ExploreStackNav.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <ExploreStackNav.Screen name="explore" component={Explore} />
      <ExploreStackNav.Screen name="storefront" component={Storefront} />
    </ExploreStackNav.Navigator>
  );
};

export default ExploreNavigator;
