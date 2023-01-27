import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";

const Searchbar = () => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search..."
        onChangeText={setText}
        style={styles.textInput}
      >
        {text}
      </TextInput>
      <Image
        style={{ width: 20, height: 20 }}
        source={require("../../assets/search.png")}
      />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: "white",
    width: "80%",
    padding: 5,
    marginVertical: 5,
  },
  textInput: {
    fontSize: 18,
  },
});
