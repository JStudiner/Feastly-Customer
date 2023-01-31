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
}
const Header: React.FC<HeaderProps> = (props) => {
  const { bgColor, title, type, height } = props;
  const navigation = useNavigation();
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
          <Searchbar />
        </>
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
  container: {
    width: "100%",
    height: "25%",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    display: "flex",
  },

  text: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
  },

  textContainer: {
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

  button: {
    backgroundColor: "#F09441",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderColor: "#000",
    borderWidth: 3,
    width: 40,
    height: 40,
    position: "absolute",
    top: 50,
    left: 30,
  },
});
