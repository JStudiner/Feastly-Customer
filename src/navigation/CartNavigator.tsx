import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const CartStackNav = createNativeStackNavigator();

import Cart from "../screens/Cart";
import OrderHistory from "../screens/Order";

import { Order } from "../screens/Cart";
import { Storefront, hours } from "../screens/Storefront";

interface CartNavigatorProps {
  route: any;
}
const CartNavigator: React.FC<CartNavigatorProps> = (props) => {
  return (
    <CartStackNav.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <CartStackNav.Screen name="cart" component={Cart} />
      <CartStackNav.Screen name="order" component={OrderHistory} />
    </CartStackNav.Navigator>
  );
};

export default CartNavigator;
