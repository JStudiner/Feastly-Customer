import React, { useState } from "react";

import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
const options = ["4:15", "4:30", "4:45", "5:00"];
const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [currentOption, setCurrentOption] = useState(options[0]);

  return (
    <>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => {
          setOpen(!open);
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "700" }}>{currentOption}</Text>
        <Image
          source={require("../../assets/downarrow.png")}
          style={{ position: "absolute", right: "5%", top: "50%" }}
        />
      </TouchableOpacity>
      <View style={styles.listContainer}>
        {open ? (
          options.map((option, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.listItem}
                onPress={() => {
                  setCurrentOption(option);
                  setOpen(false);
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: "700" }}>
                  {option}
                </Text>
              </TouchableOpacity>
            );
          })
        ) : (
          <></>
        )}
      </View>
    </>
  );
};

export default Dropdown;
const styles = StyleSheet.create({
  optionContainer: {
    padding: 5,
    backgroundColor: "white",
    display: "flex",
    marginRight: "7%",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 7,
    marginTop: 5,
  },
  listItem: {
    backgroundColor: "white",
    paddingVertical: 1,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  listContainer: {
    marginRight: "7%",
    position: "relative",
  },
});
