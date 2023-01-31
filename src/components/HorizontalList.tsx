import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

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

type Vendor = {
  id: string;
};

const values: Vendor[] = [{ id: "1" }, { id: "2" }, { id: "3" }];

interface HorizontalListProps {
  title: string;
}

const HorizontalList: React.FC<HorizontalListProps> = (props) => {
  const navigation = useNavigation();

  const renderItem = (item: Vendor, index: number) => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 4,
        }}
      >
        <View style={[styles.shadow]}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("storefront");
            }}
          >
            <View
              style={[styles.container, { backgroundColor: colors[index] }]}
            >
              <View style={styles.image}></View>
              <View style={styles.textBox}>
                <Text style={styles.text}>Storefront</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingVertical: 20,
      }}
    >
      <View style={{ left: 25 }}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={{ left: 15 }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={values}
          renderItem={({ item, index }) => renderItem(item, index)}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default HorizontalList;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {
    margin: 5,
    flex: 1,
    borderColor: "#000",
    borderWidth: 4,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 125,
  },

  textBox: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: "#FFF",
    width: "100%",
    flex: 1,
    borderTopColor: "#000",
    borderTopWidth: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 15,
    textAlign: "center",
  },

  image: {
    width: "100%",
    flex: 4,
  },
  shadow: {
    shadowColor: "#000000",
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
});
