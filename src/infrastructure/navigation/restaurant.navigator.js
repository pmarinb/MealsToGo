import React from "react";
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
        name="RestaurantsStack"
        component={RestaurantsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
