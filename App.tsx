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
  function MyTabBar({ state, descriptors, navigation }) {
    return (
      <View style={{ flexDirection: "row" }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <Pressable
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, backgroundColor: "blue" }}
            >
              <Text style={{ color: isFocused ? "#673ab7" : "red" }}>
                {label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    );
  }

  return (
    <NavigationContainer>
      {/* <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}> */}
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
