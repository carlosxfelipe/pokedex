import React from "react";
import { View, Text } from "react-native";

import { capitalizeFirstLetter, shadow } from "../../helpers/utils";

import NormalType from "../../assets/images/normal.svg";
import GrassType from "../../assets/images/grass.svg";
import FireType from "../../assets/images/fire.svg";
import WaterType from "../../assets/images/water.svg";
import BugType from "../../assets/images/bug.svg";
import ElectricType from "../../assets/images/electric.svg";
import GhostType from "../../assets/images/ghost.svg";
import GroundType from "../../assets/images/ground.svg";
import IceType from "../../assets/images/ice.svg";
import FairyType from "../../assets/images/fairy.svg";
import FlyingType from "../../assets/images/flying.svg";
import PoisonType from "../../assets/images/poison.svg";
import RockType from "../../assets/images/rock.svg";
import SteelType from "../../assets/images/steel.svg";
import PsychicType from "../../assets/images/psychic.svg";
import FightingType from "../../assets/images/fighting.svg";
import DarkType from "../../assets/images/dark.svg";
import DragonType from "../../assets/images/dragon.svg";

// import { Container } from './styles';

import { theme } from "../../theme";

interface PokenameProps {
  name: string;
  id: number;
  type: string;
}

export const Pokename: React.FC<PokenameProps> = ({ name, id, type }) => {
  const getTypeIcon = () => {
    switch (type) {
      case "grass":
        return <GrassType width={31} height={31} style={{ marginTop: 10 }} />;
      case "fire":
        return <FireType width={31} height={31} style={{ marginTop: 10 }} />;
      case "water":
        return <WaterType width={31} height={31} style={{ marginTop: 10 }} />;
      case "bug":
        return <BugType width={31} height={31} style={{ marginTop: 10 }} />;
      case "electric":
        return (
          <ElectricType width={31} height={31} style={{ marginTop: 10 }} />
        );
      case "ghotst":
        return <GhostType width={31} height={31} style={{ marginTop: 10 }} />;
      case "groud":
        return <GroundType width={31} height={31} style={{ marginTop: 10 }} />;
      case "ice":
        return <IceType width={31} height={31} style={{ marginTop: 10 }} />;
      case "fairy":
        return <FairyType width={31} height={31} style={{ marginTop: 10 }} />;
      case "flying":
        return <FlyingType width={31} height={31} style={{ marginTop: 10 }} />;
      case "poison":
        return <PoisonType width={31} height={31} style={{ marginTop: 10 }} />;
      case "rock":
        return <RockType width={31} height={31} style={{ marginTop: 10 }} />;
      case "steel":
        return <SteelType width={31} height={31} style={{ marginTop: 10 }} />;
      case "psychic":
        return <PsychicType width={31} height={31} style={{ marginTop: 10 }} />;
      case "fighting":
        return (
          <FightingType width={31} height={31} style={{ marginTop: 10 }} />
        );
      case "dark":
        return <DarkType width={31} height={31} style={{ marginTop: 10 }} />;
      case "dragon":
        return <DragonType width={31} height={31} style={{ marginTop: 10 }} />;
      default:
        return <NormalType width={31} height={31} style={{ marginTop: 10 }} />;
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
      }}
    >
      <View>
        <Text
          style={{ fontWeight: "700", fontSize: 32, color: theme.gray[700] }}
        >
          {capitalizeFirstLetter(name)}
        </Text>
        <Text
          style={{
            fontWeight: "500",
            fontSize: 18,
            color: theme.gray[600],
            marginTop: 20,
          }}
        >
          ID: {id}
        </Text>
      </View>

      <View
        style={[
          {
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            width: 75,
            height: 75,
            borderRadius: 8,
          },
          shadow,
        ]}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {getTypeIcon()}
        </View>
        <Text
          style={{
            fontWeight: "500",
            fontSize: 14,
            color: theme.gray[700],
            marginTop: 3,
          }}
        >
          {capitalizeFirstLetter(type)}
        </Text>
      </View>
    </View>
  );
};
