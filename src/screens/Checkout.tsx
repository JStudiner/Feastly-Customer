import React from "react";
import { Text, View, StyleSheet } from "react-native";

//checkout title, restaurant name, address, pickup time, subtotal, payment option, place order button
const Checkout = () => {
  return (
    <>
      <View>
        <Text>Checkout</Text>
      </View>
      <View style={styles.headerText}>
        <Text>Restaurant Name</Text>
        <Text>Address</Text>
      </View>
      <View>
        <Text>Pickup Time</Text>
        <Text>4:45</Text>
      </View>
    </>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  headerText: {
    margin: 2,
  },
});
