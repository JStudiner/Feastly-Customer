import React from "react";
import { Text, StyleSheet, View } from "react-native";

import Searchbar from "./Searchbar";

interface HeaderProps {
  bgColor: string;
  title: string;
  searchBar: boolean;
}
const Header: React.FC<HeaderProps> = (props) => {
  const { bgColor, title, searchBar } = props;
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
      {searchBar ? <Searchbar /> : <></>}
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
});
