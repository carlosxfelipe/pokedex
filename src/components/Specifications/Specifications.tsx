import React from "react";
import { View, Text, ViewProps } from "react-native";

// import { Container } from './styles';

import Pokeball from "../../assets/images/pokeball.svg";
import { Types } from "../Types/Types";

interface SpecificationsProps extends ViewProps {
  types: [];
  abilities: [];
}

export const Specifications: React.FC<SpecificationsProps> = ({
  types,
  abilities,
  style,
  testID,
}) => {
  return (
    <View style={{ padding: 16 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 16,
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: 22 }}>Specifications</Text>
        <Pokeball />
      </View>
      <Types types={types} abilities={abilities} />
    </View>
  );
};
