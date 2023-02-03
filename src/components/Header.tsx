import { useNavigation } from "@react-navigation/native";

import Ionicons from "react-native-vector-icons/Ionicons";

import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

import Searchbar from "./Searchbar";

interface HeaderProps {
  bgColor: string;
  title: string;
  searchBar: boolean;
  type: string;
  height: string;
  navigation?: any;
}
const Header: React.FC<HeaderProps> = (props) => {
  const { bgColor, title, type, height, searchBar, navigation } = props;

  const handleType = () => {
    if (type === "storefront") {
      return (
        <>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons name="chevron-back-outline" size={27} />
          </TouchableOpacity>
          <View style={styles.textBoxPosition}>
            <View style={styles.textBox}>
              <Text style={styles.text}>{title}</Text>
            </View>
          </View>
        </>
      );
    } else if (type === "explore") {
      return (
        <>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{title}</Text>
          </View>
          {searchBar ? <Searchbar /> : <></>}
        </>
      );
    } else if (type === "cart") {
      return (
        <View style={styles.cartContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{title}</Text>
          </View>
          <View style={styles.shadow}>
            <TouchableOpacity
              style={styles.cartButton}
              onPress={() => {
                navigation.navigate("order");
              }}
            >
              <Text style={{ fontWeight: "700" }}>Past Orders</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else if (type === "orders") {
      return (
        <View
          style={{
            width: "100%",
            marginLeft: "20%",
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Map");
            }}
          >
            <Ionicons name="chevron-back-outline" size={27} />
          </TouchableOpacity>
          <View>
            <View style={styles.orderPosition}>
              <Text style={styles.text}>{title}</Text>
            </View>
          </View>
        </View>
      );
    }
  };
  return (
    <View
      style={[styles.container, { backgroundColor: bgColor, height: height }]}
    >
      {handleType()}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000000",
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  cartContainer: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  cartButton: {
    backgroundColor: "#F2C49B",
    padding: 2,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
  },
  container: {
    width: "100%",
    height: "25%",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderBottomColor: "black",
    borderBottomWidth: 3,
    display: "flex",
  },

  text: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
  },

  textContainer: {
    zIndex: 3,
    textAlign: "left",
    width: "80%",
  },
  textBox: {
    backgroundColor: "white",
    padding: 5,
    paddingVertical: 10,
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 5,
    textAlign: "center",
  },
  textBoxPosition: {
    position: "absolute",
    bottom: -25,
    left: "10%",
  },
  orderPosition: {
    position: "absolute",
    top: 20,
  },
  button: {
    backgroundColor: "#F09441",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderColor: "#000",
    borderWidth: 3,
    width: 40,
    height: 40,
  },
});
