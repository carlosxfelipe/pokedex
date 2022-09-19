import React from "react";
import { View, Dimensions, Image } from "react-native";

import { Container } from "./styles";

import { EvolutionButton } from "../../components/EvolutionButton/EvolutionButton";
import { Frame } from "../../components/Frame/Frame";
import { Status } from "../../components/Status/Status";
import { Specifications } from "../../components/Specifications/Specifications";

import Background from "../../assets/images/background.svg";

const { width, height } = Dimensions.get("screen");

export const Details: React.FC = ({ route }) => {
  const { pokemon } = route.params;
  console.log("details => ", pokemon);
  return (
    <Container
      contentContainerStyle={{ backgroundColor: "white" }}
      showsVerticalScrollIndicator={false}
    >
      <View>
        <Background
          width={width}
          style={{ position: "absolute", backgroundColor: "white" }}
        />
        <View
          style={{
            backgroundColor: "#E93457",
            position: "absolute",
            width,
            height: 72,
          }}
        />
        <View
          style={{
            marginTop: 90,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={{
              uri: pokemon.sprites.other["official-artwork"].front_default,
            }}
            style={{ width: width * 0.8, height: 350 }}
          />
        </View>
        <Frame number={4} height={5} weight={6} />
        <Status
          hp={pokemon.stats[0].base_stat}
          attack={pokemon.stats[1].base_stat}
          defense={pokemon.stats[2].base_stat}
          specialAttack={pokemon.stats[3].base_stat}
          speed={pokemon.stats[5].base_stat}
        />
        <Specifications abilities={pokemon.abilities} types={pokemon.types} />
      </View>

      <EvolutionButton
        style={{ marginBottom: 34, marginHorizontal: 16 }}
        onPress={() => {}}
      />
    </Container>
  );
};
