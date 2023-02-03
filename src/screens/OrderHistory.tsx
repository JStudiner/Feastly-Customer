import React, { useState, useContext, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import Header from "../components/Header";

import { Order } from "./Cart";
import { Storefront, Product } from "./Storefront";

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
  {
    weeklyHours: [
      { day: "Monday", open: 9, close: 17 },
      { day: "Tuesday", open: 9, close: 17 },
      { day: "Wednesday", open: 9, close: 17 },
      { day: "Thursday", open: 9, close: 17 },
      { day: "Friday", open: 9, close: 17 },
      { day: "Saturday", open: 9, close: 17 },
      { day: "Sunday", open: 9, close: 17 },
    ],
    rating: 4.5,
    description: "A bakery specializing in artisan bread and pastries.",
    name: "The Bread Basket",
    products: [
      {
        name: "Sourdough Bread",
        description: "",
        imageURL: "",
        price: 5.99,
        count: 10,
        id: 1,
      },
      {
        name: "Croissant",
        description: "",
        imageURL: "",
        price: 2.99,
        count: 20,
        id: 2,
      },
      {
        name: "Pain Au Chocolat",
        description: "",
        imageURL: "",
        price: 3.49,
        count: 15,
        id: 3,
      },
    ],
  },
  {
    weeklyHours: [
      { day: "Monday", open: 11, close: 22 },
      { day: "Tuesday", open: 11, close: 22 },
      { day: "Wednesday", open: 11, close: 22 },
      { day: "Thursday", open: 11, close: 22 },
      { day: "Friday", open: 11, close: 23 },
      { day: "Saturday", open: 11, close: 23 },
      { day: "Sunday", open: 11, close: 22 },
    ],
    rating: 4.2,
    description:
      "A gourmet burger restaurant with a variety of toppings and sauces.",
    name: "Burger Bliss",
    products: [
      {
        name: "Classic Burger",
        description: "",
        imageURL: "",
        price: 10.99,
        count: 10,
        id: 4,
      },
      {
        name: "Veggie Burger",
        description: "",
        imageURL: "",
        price: 12.49,
        count: 15,
        id: 5,
      },
      {
        name: "BBQ Bacon Burger",
        description: "",
        imageURL: "",
        price: 13.99,
        count: 8,
        id: 6,
      },
    ],
  },
];

const initialOrders: Order[] = [
  {
    products: [
      {
        name: "Veggie Burger",
        description: "",
        imageURL: "",
        price: 12.49,
        count: 15,
        id: 5,
      },
      {
        name: "BBQ Bacon Burger",
        description: "",
        imageURL: "",
        price: 13.99,
        count: 8,
        id: 6,
      },
    ],
    createdTime: 5,
    completedTime: 10,
    active: false,
    subTotal: 100,
    storefront: storefronts[2],
  },
  {
    products: [
      {
        name: "Croissant",
        description: "",
        imageURL: "",
        price: 2.99,
        count: 20,
        id: 2,
      },
      {
        name: "Pain Au Chocolat",
        description: "",
        imageURL: "",
        price: 3.49,
        count: 15,
        id: 3,
      },
    ],
    createdTime: 10,
    completedTime: 10,
    active: false,
    subTotal: 50,
    storefront: storefronts[1],
  },
  {
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
    ],
    createdTime: 50,
    completedTime: 50,
    active: false,
    subTotal: 25,
    storefront: storefronts[0],
  },
];
const colors = [
  "#CF9AE8",
  "#F09441",
  "#44B4B2",
  "#CE7777",
  "#F2BCBC",
  "#ECBA58",
  "#F09441",
  "#F5D6B8",
];

import { ActiveOrderContext } from "../context/activeOrder";

interface OrderHistoryProps {
  navigation: any;
}
const OrderHistory = ({ navigation }: OrderHistoryProps) => {
  const { activeOrder } = useContext(ActiveOrderContext);
  const [orders, setOrders] = useState<Order[]>(
    activeOrder.active ? [activeOrder, ...initialOrders] : initialOrders
  );

  useEffect(() => {
    setOrders(
      activeOrder.active ? [activeOrder, ...initialOrders] : initialOrders
    );
  }, [activeOrder]);
  const renderItem = (item: Order, index: number) => {
    let currentSum = 0;
    currentSum = item.products
      .map((item) => item.count)
      .reduce((prev, next) => prev + next);

    return (
      <View
        style={[
          styles.orderBox,
          { backgroundColor: `${item.active ? "green" : "#FFF7F1"}` },
        ]}
        key={index}
      >
        <View style={styles.shadow}>
          <View style={[styles.image, { backgroundColor: colors[index] }]}>
            <View style={{ flex: 3 }}></View>
            <View style={styles.textBox}>
              <Text style={styles.text}>{item.storefront.name}</Text>
            </View>
          </View>
        </View>
        <View style={styles.right}>
          <Text style={{ fontWeight: "300" }}>
            {currentSum} Items * {item.completedTime}{" "}
          </Text>
          <Text style={{ fontWeight: "300", textDecorationLine: "underline" }}>
            See Reciept
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={{ fontWeight: "bold" }}>
              {item.active ? "View Order" : "Reorder"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <>
      <Header
        bgColor="#ECBA5880"
        height="20%"
        title="Past Orders"
        type="orders"
        searchBar={false}
        navigation={navigation}
      />
      <FlatList
        data={orders}
        renderItem={({ item, index }) => renderItem(item, index)}
      />
    </>
  );
};

export default OrderHistory;

const styles = StyleSheet.create({
  button: {
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    top: 20,
    width: "90%",
    height: 30,
    alignSelf: "center",
    backgroundColor: "#F09441",
  },
  activeButton: {
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    top: 20,
    width: "90%",
    height: 30,
    alignSelf: "center",
    backgroundColor: "#44B4B2",
  },
  container: {
    flex: 4,
    marginHorizontal: 40,
  },
  right: {
    flex: 1,
    alignItems: "flex-start",
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  orderBox: {
    borderBottomWidth: 3,
    paddingVertical: 10,
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    flex: 1,
    left: 5,
    width: 120,
    height: 120,
    borderRadius: 10,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    backgroundColor: "#44B4B2",
  },
  shadow: {
    shadowColor: "#000000",
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  textBox: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: "#FFF",
    width: "100%",
    flex: 1,
    borderTopColor: "#000",
    borderTopWidth: 2,
    flexShrink: 1,
  },
  text: {
    fontWeight: "400",
    textAlign: "center",

    fontSize: 12,
  },
});
