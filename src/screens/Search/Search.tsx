import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TextInput, View } from "react-native";
import { api } from "../../api/api";
import PokeCard from "../../components/Pokecard/Pokecard";

import UserImage from "../../assets/images/user.png";
import { SearchInput } from "../../components/SearchInput/SearchInput";

export const Search: React.FC = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = async () => {
    const result = await api.get(search.toLocaleLowerCase());

    const data = result.data;
    setPokemon([data]);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 16 }}>
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
        data={pokemon}
        renderItem={({ item }) => (
          <PokeCard
            image={item.sprites.other["official-artwork"]["front_default"]}
            name={item.name}
            types={item.types}
          />
        )}
      />
      {/* <PokeCard
        name="Charmander"
        types={[
          {
            slot: 1,
            type: {
              name: "fire",
              url: "https://pokeapi.co/api/v2/type/10/",
            },
          },
        ]}
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
      /> */}
    </View>
  );
};
