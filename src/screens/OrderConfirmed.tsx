import React from "react";

import { Text, StyleSheet, View, Image } from "react-native";
import Button from "../components/Button";

interface OrderConfirmedProps {
  navigation: any;
}
const OrderConfirmed = ({ navigation }: OrderConfirmedProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/feastly.png")}
        style={{ width: 300, resizeMode: "stretch", height: 140 }}
      />
      <View style={{ top: 50 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          Your order for Connor's Cookies has been placed!{" "}
        </Text>
      </View>
      <View style={{ top: 70, left: -23 }}>
        <Text style={{ fontSize: 25 }}>Pick up at 12:25 pm </Text>
      </View>
      <View style={{ top: 100 }}>
        <Button
          text="Back to Home"
          backgroundColor="#F09441"
          textColor="#000"
          width="90%"
          onPress={() => {
            navigation.navigate("order");
          }}
        />
      </View>
      <Image
        source={require("../../assets/bottomCornerBowl.png")}
        style={{
          width: 300,
          resizeMode: "stretch",
          height: 140,
          top: 170,
          right: -50,
        }}
      />
    </View>
  );
};

export default OrderConfirmed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7F1",
    alignItems: "center",
    paddingTop: 100,
    paddingHorizontal: 50,
  },
  image: {
    width: "100%",
    height: 130,
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 5,
    top: 10,
  },
  textGroup: {
    paddingTop: 30,
  },
  prices: {
    width: "100%",
    paddingVertical: 20,
  },
  row: {
    paddingVertical: 7,

    flexDirection: "row",
    justifyContent: "space-between",
  },
  right: {
    alignItems: "flex-end",
  },
  payment: {
    paddingVertical: 15,
  },
});
