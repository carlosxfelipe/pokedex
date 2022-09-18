import React from "react";
import { Pressable } from "react-native";

import { Container, SearchTextInput, SearchIconView } from "./styles";

import MagnifyingGlass from "../../assets/images/magnifyingglass.svg";

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
    <Container>
      <SearchTextInput
        placeholder="Pesquisar pelo título ou ID"
        value={value}
        onChangeText={onChangeText}
      ></SearchTextInput>
      <Pressable
        style={{
          width: 52,
          height: 48,
          position: "absolute",
          right: 0,
        }}
        onPress={onPress}
      >
        <SearchIconView>
          <MagnifyingGlass />
        </SearchIconView>
      </Pressable>
    </Container>
  );
};
