import React from "react";
import { View, Text, ViewProps } from "react-native";

import { Types } from "../Types/Types";

import Pokeball from "../../assets/images/pokeball.svg";
import { shadow } from "../../helpers/utils";

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
    <View
      style={[
        {
          padding: 16,
          marginHorizontal: 16,
          backgroundColor: "white",
          marginTop: 24,
          marginBottom: 24,
        },
        shadow,
      ]}
    >
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
