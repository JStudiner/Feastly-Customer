import React from "react";
import { Text } from "react-native";

import Header from "../components/Header";

const Explore = () => {
  return (
    <>
      <Header bgColor="#DEEFEF" title="Find a Vendor" searchBar={true} />
      <Text>Explore</Text>
    </>
  );
};

export default Explore;
