import React, { cloneElement } from "react";
import { View, Text, ViewProps } from "react-native";

// import { Container } from './styles';

import Pokeball from "../../assets/images/pokeball.svg";
import { shadow } from "../../helpers/utils";
import { Bar } from "../Bar/Bar";

interface StatusProps extends ViewProps {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  speed: number;
}

export const Status: React.FC<StatusProps> = ({
  hp,
  attack,
  defense,
  specialAttack,
  speed,
}) => {
  return (
    <View
      style={[
        {
          padding: 16,
          marginHorizontal: 16,
          marginTop: 24,
          backgroundColor: "white",
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
        <Text style={{ fontWeight: "700", fontSize: 22 }}>Status</Text>
        <Pokeball />
      </View>
      <Bar label="HP" value={hp} />
      <Bar label="Attack" value={attack} />
      <Bar label="Defense" value={defense} />
      <Bar label="Sp. Att." value={specialAttack} />
      <Bar label="Speed" value={speed} />
    </View>
  );
};
