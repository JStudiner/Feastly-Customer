import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const CartStackNav = createNativeStackNavigator();

import Cart from "../screens/Cart";
import OrderHistory from "../screens/Order";
import Checkout from "../screens/Checkout";
import OrderConfirmed from "../screens/OrderConfirmed";
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
      <CartStackNav.Screen name="order" component={OrderHistory} />

      <CartStackNav.Screen name="cart" component={Cart} />
      <CartStackNav.Screen name="checkout" component={Checkout} />
      <CartStackNav.Screen name="orderconfirmed" component={OrderConfirmed} />
    </CartStackNav.Navigator>
  );
};

export default CartNavigator;
