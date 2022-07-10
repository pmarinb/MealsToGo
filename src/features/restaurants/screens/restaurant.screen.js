import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.component";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const ListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="Search" />
    </SearchContainer>
    <ListContainer>
      <RestaurantInfo />
    </ListContainer>
  </SafeArea>
);
