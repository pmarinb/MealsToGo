import React from "react";
import { Platform } from "react-native";
import {
  createNativeStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/native-stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";

const SettingsStack = createNativeStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      //   screenOptions={{
      //     cardStyleInterpolator:
      //       Platform === "IOS"
      //         ? CardStyleInterpolators.forHorizontalIOS
      //         : CardStyleInterpolators.forRevealFromBottomAndroid,
      //   }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
    </SettingsStack.Navigator>
  );
};
