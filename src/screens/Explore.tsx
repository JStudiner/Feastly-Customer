import React from "react";
import { ScrollView } from "react-native";

import Header from "../components/Header";
import HorizontalList from "../components/HorizontalList";
interface ExploreProps {
  navigation: any;
}

const Explore: React.FC<ExploreProps> = (props) => {
  return (
    <>
      <Header
        bgColor="#DEEFEF"
        title="Find a Vendor"
        searchBar={true}
        type="explore"
        height="25%"
      />
      <ScrollView>
        <HorizontalList title={"Nearby"} navigation={props.navigation} />
        <HorizontalList title={"Favourites"} navigation={props.navigation} />
        <HorizontalList
          title={"Picked For You"}
          navigation={props.navigation}
        />
      </ScrollView>
    </>
  );
};

export default Explore;
