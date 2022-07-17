import React from "react";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RestaurantsScreen } from "../../../src/features/restaurants/screens/restaurant.screen";

const RestaurantStack = createNativeStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RestaurantStack.Screen
        name="RestaurantsMain"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
