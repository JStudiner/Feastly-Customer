import React from "react";
import { ScrollView } from "react-native";

import Header from "../components/Header";
import HorizontalList from "../components/HorizontalList";

const Explore = () => {
  return (
    <>
      <Header bgColor="#DEEFEF" title="Find a Vendor" searchBar={true} />
      <ScrollView>
        <HorizontalList title={"Nearby"} />
        <HorizontalList title={"Favourites"} />
        <HorizontalList title={"Picked For You"} />
      </ScrollView>
    </>
  );
};

export default Explore;
