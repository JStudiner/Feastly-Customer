import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

import { Product, Storefront } from "./Storefront";

import Header from "../components/Header";
import { RouteProp } from "@react-navigation/native";

export type Order = {
  products: Product[];
  createdTime: number;
  completedTime: number;
  active: boolean;
  subTotal: number;
  storefront: Storefront;
};

interface CartProps {
  activeOrder?: Order;
}
const Cart: React.FC<CartProps> = (props) => {
  console.log(props);
  const decrement = (index: number) => {};

  const increment = (index: number) => {};

  const renderProducts = (product: any, index: number) => {
    return (
      <View style={styles.row}>
        <View style={{ flex: 3 }}>
          <Text style={styles.text} numberOfLines={1}>
            {product.name}
          </Text>
          <Text style={styles.description} numberOfLines={2}>
            {product.description}
          </Text>
          <View style={styles.row}>
            <Text style={styles.description}>${product.price}</Text>
            <View style={styles.right}>
              <View style={styles.row}>
                <View style={styles.shadow}>
                  <TouchableOpacity
                    style={styles.counterButton}
                    onPress={() => {
                      decrement(index);
                    }}
                  >
                    <Text>-</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                  <Text>0</Text>
                </View>
                <View style={styles.shadow}>
                  <TouchableOpacity
                    style={styles.counterButton}
                    onPress={() => {
                      increment(index);
                    }}
                  >
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.right]}>
          <View style={styles.image}></View>
        </View>
      </View>
    );
  };

  return (
    <>
      <Header
        bgColor="#F5D9A5"
        title="Cart"
        searchBar={false}
        type="cart"
        height="15%"
      />
      {}
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({
  infoContainer: {
    display: "flex",
    flexDirection: "row",
  },
  starImage: {},
  row: {
    flex: 1,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  right: {
    flex: 1,
    alignSelf: "center",
    alignItems: "flex-end",
  },
  title: {
    fontsize: 16,
    fontWeight: "500",
  },
  description: {
    color: "rgba(0,0,0,0.5)",
    fontSize: 12,
    fontWeight: "500",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: "black",
  },
  text: {
    fontSize: 14,
  },
  counterRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  counterButton: {
    backgroundColor: "#F09441",

    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "#000",
    borderWidth: 1,
    width: 20,
    height: 20,
  },
  shadow: {
    shadowColor: "#000000",
    shadowOffset: { width: -0.5, height: 0.5 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
});
