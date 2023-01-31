import React from "react";
import { Text, View } from "react-native";

import Header from "../components/Header";

type hours = {
  day: string;
  open: number;
  close: number;
};

type storefront = {
  weeklyHours: hours[];
  rating: number;
  description: string;
  name: string;
};

const storefronts: storefront[] = [
  {
    weeklyHours: [
      { day: "Monday", open: 9, close: 17 },
      { day: "Tuesday", open: 9, close: 17 },
      { day: "Wednesday", open: 9, close: 17 },
      { day: "Thursday", open: 9, close: 17 },
      { day: "Friday", open: 9, close: 17 },
      { day: "Saturday", open: 10, close: 16 },
      { day: "Sunday", open: 11, close: 15 },
    ],
    rating: 4.5,
    description: "A trendy clothing store with a focus on sustainable fashion.",
    name: "Connor's Cookies",
  },
];

const getCurrentDay = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysOfWeek[new Date().getDay()];
};

const Storefront = () => {
  const currentStoreFront = storefronts[0];
  const currentDay = getCurrentDay();

  const currentHours = currentStoreFront.weeklyHours.find(
    (hours) => hours.day === currentDay
  );
  const renderInfo = () => {
    return (
      <>
        <Text></Text>
      </>
    );
  };

  return (
    <>
      <Header
        bgColor="#F2BCBC"
        searchBar={false}
        title={currentStoreFront.name}
        type="storefront"
        height="20%"
      />
      {renderInfo()}
    </>
  );
};

export default Storefront;
