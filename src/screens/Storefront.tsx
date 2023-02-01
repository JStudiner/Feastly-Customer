import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import Button from "../components/Button";
export type hours = {
  day: string;
  open: number;
  close: number;
};

export type Storefront = {
  weeklyHours: hours[];
  rating: number;
  description: string;
  name: string;
  products: Product[];
};

export type Product = {
  name: string;
  description: string;
  imageURL: string;
  price: number;
  count: number;
  id: number;
};

import { Order } from "./Cart";

const storefronts: Storefront[] = [
  {
    weeklyHours: [
      { day: "Monday", open: 9, close: 17 },
      { day: "Tuesday", open: 9, close: 17 },
      { day: "Wednesday", open: 9, close: 17 },
      { day: "Thursday", open: 9, close: 17 },
      { day: "Friday", open: 9, close: 17 },
      { day: "Saturday", open: 10, close: 16 },
      { day: "Sunday", open: 11, close: 15 },
    ],
    rating: 4.5,
    description: "A trendy clothing store with a focus on sustainable fashion.",
    name: "Connor's Cookies",
    products: [
      {
        name: "Chocolate Chip Cookies",
        description: "Delicious, soft and chewy chocolate chip cookies.",
        imageURL: "https://www.example.com/chocolate_chip.jpg",
        price: 3.99,
        count: 20,
        id: 1,
      },
      {
        name: "Oatmeal Raisin Cookies",
        description: "Crunchy oatmeal cookies with plump raisins.",
        imageURL: "https://www.example.com/oatmeal_raisin.jpg",
        price: 4.99,
        count: 15,
        id: 2,
      },
      {
        name: "Peanut Butter Cookies",
        description: "Creamy peanut butter cookies with a hint of salt.",
        imageURL: "https://www.example.com/peanut_butter.jpg",
        price: 4.5,
        count: 25,
        id: 3,
      },
      {
        name: "Sugar Cookies",
        description: "Classic sugar cookies with a sweet, buttery flavor.",
        imageURL: "https://www.example.com/sugar.jpg",
        price: 2.99,
        count: 30,
        id: 4,
      },
      {
        name: "Snickerdoodle Cookies",
        description:
          "Soft and chewy snickerdoodle cookies with a cinnamon sugar coating.",
        imageURL: "https://www.example.com/snickerdoodle.jpg",
        price: 3.5,
        count: 18,
        id: 5,
      },
    ],
  },
];

const getCurrentDay = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysOfWeek[new Date().getDay()];
};

interface StorefrontProps {
  navigation: any;
}
const Storefront: React.FC<StorefrontProps> = (props) => {
  const currentStoreFront = storefronts[0];
  const currentDay = getCurrentDay();
  const maxRating = [1, 2, 3, 4, 5];
  const currentHours = currentStoreFront.weeklyHours.find(
    (hours) => hours.day === currentDay
  );

  const initialCounts = Array.from(
    { length: currentStoreFront.products.length },
    () => 0
  );

  const [productCounts, setProductCounts] = useState(initialCounts);

  const renderInfo = () => {
    return (
      <View style={{ display: "flex", paddingHorizontal: "7%" }}>
        <View style={styles.infoContainer}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingRight: 10,
            }}
          >
            {maxRating.map((item, key) => {
              return (
                <TouchableOpacity activeOpacity={0.7} key={item}>
                  <Image
                    style={styles.starImage}
                    source={
                      item <= currentStoreFront.rating
                        ? require("../../assets/fullStar.png")
                        : require("../../assets/Star.png")
                    }
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <Text
            style={{
              fontWeight: "300",
            }}
          >
            Open until {currentHours?.close}:00 pm
          </Text>
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Text>{currentStoreFront.description}</Text>
        </View>
      </View>
    );
  };

  const renderProduct = (product: any, index: number) => {
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

  const createOrder = () => {
    const products = currentStoreFront.products;
    let currentTotal: number = 0;
    for (let i = 0; i < products.length; i++) {
      currentTotal = currentTotal + products[i].price * products[i].count;
    }
    const activeOrder: Order = {
      products: products.filter((product, index) => {
        if (productCounts[index] > 0) return product;
      }),

      createdTime: Date.now(),
      completedTime: Date.now(),
      active: true,
      subTotal: currentTotal,
      storefront: currentStoreFront,
    };
    activeOrder.products.length > 0
      ? props.navigation.navigate("Cart", {
          activeOrder,
        })
      : console.log("Must add products to order");
  };
  return (
    <>
      <Header
        bgColor="#F2BCBC"
        searchBar={false}
        title={currentStoreFront.name}
        type="storefront"
        height="20%"
      />
      <ScrollView style={{ top: 30 }}>
        {renderInfo()}
        <View style={{ paddingHorizontal: "7%" }}>
          {currentStoreFront.products.map((product, index) => {
            return renderProduct(product, index);
          })}
        </View>
      </ScrollView>
      <View style={{ display: "flex", alignItems: "center" }}>
        <Button
          text="View Cart"
          backgroundColor="#F09441"
          textColor="black"
          width="80%"
          onPress={() => {
            createOrder();
          }}
        />
      </View>
    </>
  );
};

export default Storefront;

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
