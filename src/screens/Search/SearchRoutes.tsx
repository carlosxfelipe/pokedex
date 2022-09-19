import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Star from "../../assets/images/favorites.svg";

const Stack = createNativeStackNavigator();

import { Search } from "./Search";
import { Details } from "../Details/Details";
import { theme } from "../../theme";

export const SearchRoutes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        options={{ headerShown: false }}
        component={Search}
      />
      <Stack.Screen
        // options={({ route }) => ({ title: route.params.data })}
        options={({ route }) => ({
          headerBackTitle: "Pokédex",
          title: `ID: ${route.params.pokemon.id}`,
          headerRight: () => <Star />,
          headerTintColor: theme.white,
          headerStyle: {
            backgroundColor: theme.brand.redDark,
          },
        })}
        name="Details"
        component={Details}
      />
    </Stack.Navigator>
  );
};
