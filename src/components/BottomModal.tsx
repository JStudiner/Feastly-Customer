import { Modal, StyleSheet, View, Text } from "react-native";

import React, { useState } from "react";

interface BottomModalProps {
  visible: boolean;
  children: any;
  height: string;
}
const BottomModal = ({ visible, children, height }: BottomModalProps) => {
  return (
    <View style={[styles.container, { height: height }]}>
      {visible && children}
    </View>
  );
};

export default BottomModal;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",

    marginTop: "auto",
    backgroundColor: "#FFF4DF",
    borderTopWidth: 3,
    borderTopColor: "#000",
    justifyContent: "flex-start",
  },
});
