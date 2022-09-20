import React from "react";
import { Pressable, TextInputProps } from "react-native";

import { Container, SearchTextInput, SearchIconView } from "./styles";

import MagnifyingGlass from "../../assets/images/magnifyingglass.svg";

interface SearchInputProps extends TextInputProps {
  onPress: () => void;
  value: string;
  onChangeText: (text: string) => void;
}

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
        onSubmitEditing={onPress}
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
