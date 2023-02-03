import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

const searchOptions = ["jack", "ben", "connor", "manush", "feastly"];
const Searchbar = () => {
  const [filteredOptions, setFilteredOptions] = useState([""]);
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  console.log(filteredOptions);
  useEffect(() => {
    setFilteredOptions(
      searchOptions.filter((option) =>
        option.toLowerCase().includes(text.toLowerCase())
      )
    );
  }, [text]);
  return (
    <>
      <View style={styles.container}>
        <TextInput
          placeholder="Search..."
          onChangeText={setText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={styles.textInput}
        >
          {text}
        </TextInput>
        <TouchableOpacity
          onPress={() => {
            console.log(text);
          }}
        >
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../../assets/search.png")}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: "white",

          width: "80%",
          zIndex: 1,
        }}
      >
        {isFocused &&
          filteredOptions.map((option) => (
            <TouchableOpacity
              style={styles.searchRow}
              onPress={() => {
                setText(option);
                setIsFocused(false);
              }}
            >
              <Text key={option} style={{ fontSize: 18 }}>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
      </View>
    </>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  searchRow: {
    backgroundColor: "white",
    width: "100%",
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
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
    width: "80%",
  },
});
