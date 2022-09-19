import React from "react";
import { Pressable, Text, ViewProps } from "react-native";

import { EvolutionButton as Button, EvolutionText } from "./styles";

import Pokeball from "../../assets/images/pokeball.svg";

interface EvolutionButtonProps extends ViewProps {
  onPress: () => void;
}

export const EvolutionButton: React.FC<EvolutionButtonProps> = ({
  onPress,
  testID,
  style,
}) => {
  return (
    <Pressable testID={testID} onPress={onPress}>
      <Button style={style}>
        <Pokeball />
        <EvolutionText>Evoluir pokemon</EvolutionText>
      </Button>
    </Pressable>
  );
};
