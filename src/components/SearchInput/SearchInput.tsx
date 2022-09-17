import React from "react";
import { Pressable, TextInput, View } from "react-native";
import { theme } from "../../theme";

import SearchIcon from "../../assets/images/SearchIcon.svg";

type SearchInputProps = {
  onPress: () => void;
  value: string;
  onChangeText: (text: string) => void;
};

export const SearchInput: React.FC<SearchInputProps> = ({
  onPress,
  value,
  onChangeText,
}) => {
  return (
    <View>
      <TextInput
        placeholder="Pesquisar pelo título ou ID"
        value={value}
        onChangeText={onChangeText}
        style={{
          height: 48,
          backgroundColor: theme.gray[100],
          borderRadius: 36,
          padding: 16,
        }}
      />
      <Pressable
        style={{
          width: 52,
          height: 48,
          position: "absolute",
          right: 0,
        }}
        onPress={onPress}
      >
        <View
          style={{
            width: 52,
            height: 48,
            backgroundColor: theme.brand.blue,
            position: "absolute",
            right: 0,
            borderTopRightRadius: 36,
            borderBottomRightRadius: 36,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SearchIcon />
        </View>
      </Pressable>
    </View>
  );
};
