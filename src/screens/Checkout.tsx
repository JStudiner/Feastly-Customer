import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

//checkout title, restaurant name, address, pickup time, subtotal, payment option, place order button
import { useRoute } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/core";
import PriceDetail from "../components/PriceDetail";
import Button from "../components/Button";

interface CheckoutProps {
  route: RouteProp<any, "checkout">;
}
const Checkout = ({ route }: CheckoutProps) => {
  return (
    <View style={{ backgroundColor: "#FFF7F1", height: "100%" }}>
      <View
        style={{
          marginHorizontal: "7%",
          marginTop: "15%",
          backgroundColor: "#FFF7F1",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "700" }}>Checkout</Text>

        <View style={styles.headerText}>
          <Text style={{ fontWeight: "700", fontSize: 18 }}>
            Restaurant Name
          </Text>
          <Text>Address</Text>
        </View>
        <View>
          <Text style={{ fontWeight: "700", fontSize: 18 }}>Pickup Time</Text>
          <Text>4:45</Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <PriceDetail price={20} />
        </View>

        <View style={styles.paymentInfo}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Payment</Text>
          <View style={{ flexDirection: "row", marginVertical: 10 }}>
            <Image
              style={{ width: 40, height: 20 }}
              source={require("../../assets/visa.png")}
            />
            <Text style={{ fontSize: 15 }}> ****4953</Text>
          </View>
          <Text style={{ fontSize: 10, textDecorationLine: "underline" }}>
            Change Payment Type
          </Text>
        </View>

        <Button
          backgroundColor="#F09441"
          text="Place Order"
          textColor="black"
          width="100%"
        />
      </View>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  headerText: {
    marginVertical: 20,
    paddingVertical: 5,
  },
  paymentInfo: {
    paddingVertical: 15,
  },
});
