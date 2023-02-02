import React from "react";
import { useFonts } from "expo-font";
import * as Font from "expo-font";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

interface ButtonProps {
  text: string;
  textColor?: string;
  backgroundColor?: string;
  onPress?: () => void;
  width?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { text, textColor, backgroundColor, onPress, width } = props;

  const color = textColor || "white";
  return (
    <View style={[styles.shadow, { width }]}>
      <TouchableOpacity
        onPress={() => {
          onPress && onPress();
        }}
        style={[
          styles.wrapper,
          { backgroundColor: backgroundColor || "transparent" },
        ]}
      >
        <View style={styles.buttonTextWrapper}>
          <Text style={[{ color }, styles.buttonText]}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000000",
    shadowOffset: { width: -3, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  wrapper: {
    padding: 15,
    display: "flex",
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "#000000",
    marginBottom: 15,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
    width: "100%",
    textAlign: "center",
    fontStyle: "normal",
  },
  buttonTextWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
