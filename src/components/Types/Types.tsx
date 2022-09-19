import React from "react";
import { View, Text } from "react-native";

// import { Container } from './styles';

export const Types: React.FC = ({ types, abilities }) => {
  console.log("abilities", abilities);
  console.log("types", types);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "red",
        }}
      >
        <Text>Types</Text>
        <Text>Abilities</Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{}}>
          {types.map(({ type }) => (
            <Text>{type.name}</Text>
          ))}
        </View>

        <View style={{}}>
          {abilities.map(({ ability }) => (
            <Text>{ability.name}</Text>
          ))}
        </View>
      </View>
    </View>
  );
};
