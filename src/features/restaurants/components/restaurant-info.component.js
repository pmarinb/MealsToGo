import React from "react";
import { Text } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card>
      <Card.Title title={name} />
      <Card.Cover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <Paragraph>{address}</Paragraph>
      </Card.Content>
    </Card>
  );
};
