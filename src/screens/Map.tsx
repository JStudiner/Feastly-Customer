import React, { useState } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

import Header from "../components/Header";

import MapView, { Marker, Callout } from "react-native-maps";
const dummyData = [
  {
    name: "Connor's Cookies",
    color: "#CF9AE8",
    id: 1,
    description:
      "Connor’s Cookies was founded in 2008 when Connor found that there was a huge market for gourmet cookies. Since then, Connor has sold thousands of cookies out of his home kitchen.",
    latlng: {
      latitude: 44.2342,
      longitude: -76.503,
    },
  },
  {
    name: "Jack's Jerk Chicken",
    color: "#F09441",
    id: 2,
    description:
      "A great place to get delicious chicken. Jack's Jerk Chicken sells the highest quality Caribbean food in all of Kingston!",
    latlng: {
      latitude: 44.2342,
      longitude: -76.49,
    },
  },
  {
    name: "Ben's Burritos",
    color: "#44B4B2",
    id: 3,
    description:
      "A great place to get delicious chicken. Jack's Jerk Chicken sells the highest quality Caribbean food in all of Kingston!",
    latlng: {
      latitude: 44.231,
      longitude: -76.487,
    },
  },
  {
    name: "Manush's Mangos",
    color: "#CE7777",
    id: 4,
    description: "delicious moist mangos in your mouth",
    latlng: {
      latitude: 44.233,
      longitude: -76.485,
    },
  },
];

const Map = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpen = () => {
    const temp = dummyData[0].name;
    const tempd = dummyData[0].description;
    setTitle(temp);
    setDescription(tempd);
    setModalVisible(true);
  };
  return (
    <>
      <Header
        bgColor="#E3CCEE"
        height="25%"
        title="Find a Vendor"
        type="explore"
        searchBar={true}
      />

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 44.2342,
          longitude: -76.503,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {dummyData.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.latlng}
            onPress={(e) => handleOpen()}
          >
            <View>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../assets/orangeMapIcon.png")}
              ></Image>
            </View>
          </Marker>
        ))}
      </MapView>
    </>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#FFF",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {},
  map: {
    width: "100%",
    height: "100%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    position: "absolute",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
