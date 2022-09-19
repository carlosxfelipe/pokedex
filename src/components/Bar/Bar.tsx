import React from "react";
import { Text, View, ViewProps } from "react-native";

// import { Container } from './styles';

interface BarProps extends ViewProps {
  label: string;
  value: number;
}

export const Bar: React.FC<BarProps> = ({ label, value, style, testID }) => {
  return (
    <View
      testID={testID}
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          paddingVertical: 10,
        },
        style,
      ]}
    >
      <Text style={{ flex: 1 }}>{label}</Text>
      <View
        style={{
          marginHorizontal: 8,
          height: 8,
          backgroundColor: "#D9D9D9",
          width: "70%",
          borderRadius: 8,
        }}
      >
        <View
          style={{
            height: 8,
            borderRadius: 8,
            backgroundColor: "#FF7D7D",
            width: `${(value / 200) * 100}%`,
          }}
        />
      </View>
      <Text style={{ marginLeft: 10 }}>{value}</Text>
    </View>
  );
};
