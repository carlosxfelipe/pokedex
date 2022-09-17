import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Search } from "./src/screens/Search/Search";

import HomeIcon from "./src/assets/images/home.svg";
import SearchIcon from "./src/assets/images/search.svg";
import FavoritesIcon from "./src/assets/images/favorites.svg";
import SettingsIcon from "./src/assets/images/settings.svg";
import { theme } from "./src/theme";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Início"
          component={Search}
          options={{
            headerShown: false,
            tabBarStyle: { backgroundColor: theme.brand.blue },
            tabBarLabelStyle: { color: theme.white },
            tabBarInactiveTintColor: theme.white,
            tabBarIcon: () => <HomeIcon />,
          }}
        />
        <Tab.Screen
          name="Buscar"
          component={Search}
          options={{
            tabBarStyle: { backgroundColor: theme.brand.blue },
            tabBarLabelStyle: { color: theme.white },
            tabBarInactiveTintColor: theme.white,
            tabBarIcon: () => <SearchIcon />,
          }}
        />
        <Tab.Screen
          name="Favoritos"
          component={Search}
          options={{
            tabBarStyle: { backgroundColor: theme.brand.blue },
            tabBarLabelStyle: { color: theme.white },
            tabBarInactiveTintColor: theme.white,
            tabBarIcon: () => <FavoritesIcon />,
          }}
        />
        <Tab.Screen
          name="Ajuste"
          component={Search}
          options={{
            tabBarStyle: { backgroundColor: theme.brand.blue },
            tabBarLabelStyle: { color: theme.white },
            tabBarInactiveTintColor: theme.white,
            tabBarIcon: () => <SettingsIcon />,
          }}
        />
        {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
