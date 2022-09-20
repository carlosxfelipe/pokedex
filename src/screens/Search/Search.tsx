import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TextInput, View } from "react-native";

import {
  Container,
  SearchContent,
  SearchText,
  RecentSearchesText,
} from "./styles";

import { api } from "../../api/api";

import PokeCard from "../../components/Pokecard/Pokecard";
import UserImage from "../../assets/images/user.png";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  clearStorage,
  getDataFromStorage,
  saveOnStorage,
} from "../../settings/storage";

const MAX_RECENT_SEARCHES = 6;

export const Search: React.FC = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [recentPokemons, setRecentPokemons] = useState([]);

  const getPokemon = async () => {
    const result = await api.get(search.toLocaleLowerCase()).catch(() => {
      console.log("no pokemon available");
    });

    if (result && result.data) {
      const data = result.data;
      if (!recentPokemons) {
        setRecentPokemons([data]);
        saveOnStorage([data]);
      } else {
        if (recentPokemons.length === MAX_RECENT_SEARCHES) {
          recentPokemons.pop();
          const newArray = [data, ...recentPokemons];
          setRecentPokemons(newArray);
          saveOnStorage(newArray);
        } else {
          setRecentPokemons([data, ...recentPokemons]);
          saveOnStorage([data, ...recentPokemons]);
        }
      }
      navigation.navigate("Details", {
        pokemon: data,
      });
    }
  };

  useEffect(() => {
    // clearStorage();
    const loadPokemons = async () => {
      const pokemons = await getDataFromStorage();
      setRecentPokemons(pokemons);
    };

    loadPokemons();
  }, []);

  return (
    <Container>
      <SafeAreaView edges={["top", "left", "right"]} style={{ flex: 1 }}>
        <SearchContent>
          <SearchText>Buscar</SearchText>
          <Image source={UserImage} />
        </SearchContent>
        <SearchInput
          value={search}
          onChangeText={(text) => setSearch(text)}
          onPress={getPokemon}
        />
        <RecentSearchesText>Buscas recentes</RecentSearchesText>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          numColumns={2}
          data={recentPokemons}
          ItemSeparatorComponent={() => <View style={{ height: 40 }} />}
          renderItem={({ item, index }) => (
            <PokeCard
              key={index}
              image={item.sprites.other["official-artwork"]["front_default"]}
              name={item.name}
              types={item.types}
              onPress={() =>
                navigation.navigate("Details", {
                  pokemon: item,
                })
              }
            />
          )}
        />
      </SafeAreaView>
    </Container>
  );
};
