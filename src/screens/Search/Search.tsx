import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TextInput, View } from "react-native";
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

export const Search: React.FC = () => {
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
        setPokemon([...pokemon, data]);
        saveOnStorage([...pokemon, data]);
      }
    }
  };

  useEffect(() => {
    // clearStorage();
    const loadPokemons = async () => {
      const pokemons = await getDataFromStorage();
      console.log("mis pokemons => ", pokemons);
      setPokemon(pokemons);
    };

    loadPokemons();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 16 }}>
      <SafeAreaView edges={["top", "left", "right"]} style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 32, fontWeight: "700", marginBottom: 16 }}>
            Buscar
          </Text>
          <Image source={UserImage} />
        </View>
        <SearchInput
          value={search}
          onChangeText={(text) => setSearch(text)}
          onPress={getPokemon}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            marginTop: 21,
            marginBottom: 33,
          }}
        >
          Buscas recentes
        </Text>
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
            />
          )}
          style={{ flex: 1 }}
        />
      </SafeAreaView>
    </View>
  );
};
