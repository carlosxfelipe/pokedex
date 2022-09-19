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
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = async () => {
    const result = await api.get(search.toLocaleLowerCase()).catch(() => {
      console.log("no pokemon available");
    });

    if (result && result.data) {
      const data = result.data;
      if (!pokemon) {
        setPokemon([data]);
        saveOnStorage([data]);
      } else {
        if (pokemon.length === MAX_RECENT_SEARCHES) {
          pokemon.shift();
          const newArray = [...pokemon, data];
          setPokemon(newArray);
          saveOnStorage(newArray);
        } else {
          setPokemon([...pokemon, data]);
          saveOnStorage([...pokemon, data]);
        }
      }
    }
  };

  useEffect(() => {
    // clearStorage();
    const loadPokemons = async () => {
      const pokemons = await getDataFromStorage();
      console.log("meus pokemons => ", pokemons);
      setPokemon(pokemons);
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
          columnWrapperStyle={{ justifyContent: "space-between" }}
          numColumns={2}
          data={pokemon}
          ItemSeparatorComponent={() => <View style={{ height: 40 }} />}
          renderItem={({ item }) => (
            <PokeCard
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
          style={{ flex: 1 }}
        />
      </SafeAreaView>
    </Container>
  );
};
