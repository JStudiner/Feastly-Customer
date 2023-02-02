import React from "react";

import { Text, View, StyleSheet } from "react-native";

interface PriceDetailProps {
  price: number;
}
const PriceDetail: React.FC<PriceDetailProps> = (props) => {
  return (
    <View style={styles.priceContainer}>
      <View style={styles.row}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "300",
          }}
        >
          Subtotal
        </Text>
        <View style={styles.right}>
          <Text style={{ fontSize: 15, fontWeight: "300" }}>
            ${Math.round(props.price)}
          </Text>
        </View>
      </View>
      <View style={styles.row}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "300",
          }}
        >
          Tax
        </Text>
        <View style={styles.right}>
          <Text style={{ fontSize: 15, fontWeight: "300" }}>
            ${Math.round(0.13 * props.price * 100) / 100}
          </Text>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={{ fontSize: 15, fontWeight: "700" }}>Total Price</Text>
        <View style={styles.right}>
          <Text style={{ fontSize: 15, fontWeight: "700" }}>
            ${Math.round(1.13 * props.price * 100) / 100}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PriceDetail;
const styles = StyleSheet.create({
  row: {
    paddingBottom: 10,
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",

    alignItems: "center",
  },
  right: {
    flex: 1,
    alignSelf: "center",
    alignItems: "flex-end",
  },

  priceRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceContainer: {
    display: "flex",
    borderTopColor: "black",
    justifyContent: "flex-start",
  },
});
