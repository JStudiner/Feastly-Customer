import React, { useState, useContext, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Product, Storefront } from "./Storefront";

import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import Button from "../components/Button";
import PriceDetail from "../components/PriceDetail";
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
  navigation: any;
}

import { ActiveOrderContext } from "../context/activeOrder";
const Cart: React.FC<CartProps> = (props) => {
  const { activeOrder, setActiveOrder } = useContext(ActiveOrderContext);
  const initialCounts = activeOrder.products.map((product) => product.count);
  const [productCounts, setProductCounts] = useState(initialCounts);
  const [pickupTime, setPickupTime] = useState("4:15");
  const decrement = (index: number) => {
    setProductCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] = newCounts[index] > 0 ? newCounts[index] - 1 : 0;
      return newCounts;
    });
  };

  const increment = (index: number) => {
    setProductCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] = newCounts[index] + 1;
      return newCounts;
    });
  };

  const renderProducts = (product: any, index: number) => {
    return (
      <View style={styles.row} key={index}>
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
                  <Text>{productCounts[index]}</Text>
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

  const { navigation } = props;

  useEffect(() => {
    const products = activeOrder.products.filter((product, index) => {
      if (productCounts[index] > 0) {
        product.count = productCounts[index];
        return product;
      }
    });
    let currentTotal: number = 0;
    for (let i = 0; i < products.length; i++) {
      currentTotal = currentTotal + products[i].price * products[i].count;
    }
    const finalOrder = { ...activeOrder, subTotal: currentTotal };
    setActiveOrder(finalOrder);
  }, [productCounts]);
  return (
    <>
      <Header
        bgColor="#F5D9A5"
        title="Cart"
        searchBar={false}
        type="cart"
        height="15%"
        navigation={navigation}
      />
      <View style={{ paddingLeft: "7%", paddingVertical: 5 }}>
        <Text style={{ fontWeight: "700" }}>{activeOrder.storefront.name}</Text>

        <Text>309 Princess St, Kingston ON K7L</Text>
        <View style={{ paddingVertical: 10 }}>
          <Text style={{ fontWeight: "700" }}>Pickup Time</Text>
          <Dropdown
            options={["4:15", "4:30", "4:45", "5:00"]}
            setOption={(option: string) => {
              setPickupTime(option);
            }}
          />
        </View>
      </View>
      <ScrollView>
        <View style={{ paddingHorizontal: "7%" }}>
          {activeOrder.products.map((product, index) => {
            return renderProducts(product, index);
          })}
        </View>
        <PriceDetail price={activeOrder.subTotal} />
      </ScrollView>
      <View style={[styles.buttonRow]}>
        <Button
          text="Keep Shopping"
          backgroundColor="#44B4B2"
          width="45%"
          textColor="black"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Button
          text="Checkout"
          backgroundColor="#F09441"
          width="45%"
          textColor="black"
          onPress={() => {
            navigation.navigate("checkout", {
              pickupTime: pickupTime,
            });
          }}
        />
      </View>
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({
  infoContainer: {
    display: "flex",
    flexDirection: "row",
  },
  buttonRow: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  row: {
    paddingBottom: 10,
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",

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
    color: "black",
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
  priceRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceContainer: {
    flex: 1,
    display: "flex",
    marginHorizontal: 60,
    borderTopColor: "black",
    borderTopWidth: 1,
    justifyContent: "flex-start",
  },
});
