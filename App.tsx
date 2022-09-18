import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { SearchRoutes } from "./src/screens/Search/SearchRoutes";

import HomeIcon from "./src/assets/images/home.svg";
import SearchIcon from "./src/assets/images/search.svg";
import FavoritesIcon from "./src/assets/images/favorites.svg";
import SettingsIcon from "./src/assets/images/settings.svg";
import { theme } from "./src/theme";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={SearchRoutes}
          options={{
            title: "Início",
            headerShown: false,
            tabBarStyle: { backgroundColor: theme.brand.blue },
            tabBarLabelStyle: { color: theme.white },
            tabBarInactiveTintColor: theme.white,
            tabBarIcon: () => <HomeIcon />,
          }}
        />
        <Tab.Screen
          name="Buscar"
          component={SearchRoutes}
          options={{
            tabBarStyle: { backgroundColor: theme.brand.blue },
            tabBarLabelStyle: { color: theme.white },
            tabBarInactiveTintColor: theme.white,
            tabBarIcon: () => <SearchIcon />,
          }}
        />
        <Tab.Screen
          name="Favoritos"
          component={SearchRoutes}
          options={{
            tabBarStyle: { backgroundColor: theme.brand.blue },
            tabBarLabelStyle: { color: theme.white },
            tabBarInactiveTintColor: theme.white,
            tabBarIcon: () => <FavoritesIcon />,
          }}
        />
        <Tab.Screen
          name="Ajuste"
          component={SearchRoutes}
          options={{
            tabBarStyle: { backgroundColor: theme.brand.blue },
            tabBarLabelStyle: { color: theme.white },
            tabBarInactiveTintColor: theme.white,
            tabBarIcon: () => <SettingsIcon />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
