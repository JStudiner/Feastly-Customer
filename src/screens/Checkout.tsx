import React, { useContext } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import { RouteProp } from "@react-navigation/core";
import PriceDetail from "../components/PriceDetail";
import Button from "../components/Button";

interface CheckoutProps {
  route: RouteProp<any, "checkout">;
  navigation: any;
}

import { ActiveOrderContext } from "../context/activeOrder";
const Checkout = ({ route, navigation }: CheckoutProps) => {
  const { activeOrder } = useContext(ActiveOrderContext);

  return (
    <View style={{ backgroundColor: "#FFF7F1", height: "100%" }}>
      <View
        style={{
          marginHorizontal: "7%",
          marginTop: "15%",
          backgroundColor: "#FFF7F1",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "700", left: "-3%" }}>
          Checkout
        </Text>
        <View style={{ borderColor: "black", borderWidth: 3, marginTop: 10 }}>
          <Image
            source={require("../../assets/feastlyDemoDummyMap.png")}
            style={{ width: "100%", height: 125 }}
          />
        </View>
        <View style={styles.headerText}>
          <Text style={{ fontWeight: "700", fontSize: 18 }}>
            {activeOrder.storefront.name}
          </Text>
          <Text>Address</Text>
        </View>
        <View>
          <Text style={{ fontWeight: "700", fontSize: 18 }}>Pickup Time</Text>
          <Text>{route.params?.pickupTime}</Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <PriceDetail price={activeOrder.subTotal} />
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
          onPress={() => {
            navigation.navigate("orderconfirmed", {
              pickupTime: route.params?.pickupTime,
            });
          }}
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
