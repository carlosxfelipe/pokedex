import React from "react";
import { View, Text, ViewProps } from "react-native";

import { capitalizeFirstLetter } from "../../helpers/utils";
import { theme } from "../../theme";

interface TypesProps extends ViewProps {
  types: [];
  abilities: [];
}

export const Types: React.FC<TypesProps> = ({ types, abilities }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            marginTop: 4,
            fontWeight: "600",
            fontSize: 20,
            color: theme.gray[500],
          }}
        >
          Types
        </Text>
        {types.map(({ type }) => (
          <Text
            style={{
              marginTop: 8,
              fontWeight: "500",
              fontSize: 16,
              color: theme.gray[700],
              padding: 4,
              backgroundColor: theme.cards.normal.backgroundColor,
            }}
          >
            {capitalizeFirstLetter(type.name)}
          </Text>
        ))}
      </View>
      <View style={{ width: 4 }}></View>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            marginTop: 4,
            fontWeight: "600",
            fontSize: 20,
            color: theme.gray[500],
          }}
        >
          Abilities
        </Text>
        {abilities.map(({ ability }) => (
          <Text
            style={{
              marginTop: 8,
              fontWeight: "500",
              fontSize: 16,
              color: theme.gray[700],
              backgroundColor: theme.cards.normal.backgroundColor,
              padding: 4,
            }}
          >
            {capitalizeFirstLetter(ability.name)}
          </Text>
        ))}
      </View>
    </View>
  );
};
