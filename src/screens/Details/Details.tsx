import React from "react";
import { Text, View } from "react-native";

// import { Container } from './styles';

export const Details: React.FC = ({ route }) => {
  const { pokemon } = route.params;
  console.log("details => ", pokemon);
  return (
    <View>
      <Text>teste</Text>
    </View>
  );
};
