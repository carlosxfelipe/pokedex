import React from "react";

import { Image, Pressable, Text, View, ViewProps } from "react-native";

import { capitalizeFirstLetter } from "../../helpers/utils";
import { theme } from "../../theme";

interface PokeCardProps extends ViewProps {
  name: string;
  types: any;
  image: string;
  onPress: () => void;
}

const PokeCard: React.FC<PokeCardProps> = ({
  name,
  types,
  image,
  onPress,
  style,
  testID,
}) => {
  const getPokemonPrimaryType = () => {
    return capitalizeFirstLetter(types[0].type.name);
  };

  const getRespectiveColor = (color) => {
    switch (color) {
      case "Fire":
        return theme.cards.fire;
      case "Grass":
        return theme.cards.grass;
      case "Water":
        return theme.cards.water;
      case "Bug":
        return theme.cards.bug;
      default:
        return theme.cards.normal;
    }
  };

  return (
    <Pressable onPress={onPress}>
      <View testID={testID} style={[style, { width: 164, height: 164 }]}>
        <View
          style={{
            backgroundColor: getRespectiveColor(getPokemonPrimaryType())
              .backgroundColor,
            borderRadius: 14,
            width: 164,
            height: 164,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Image source={{ uri: image }} style={{ width: 142, height: 142 }} />
        </View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "700", marginTop: 8 }}>
            {capitalizeFirstLetter(name)}
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            right: 6,
            top: 6,
            backgroundColor: getRespectiveColor(getPokemonPrimaryType())
              .badgeColor,
            paddingVertical: 4,
            paddingHorizontal: 8,
            borderRadius: 14,
          }}
        >
          <Text style={{ color: theme.white, fontSize: 11 }}>
            {getPokemonPrimaryType()}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PokeCard;
