import styled from "styled-components/native";
import { theme } from "../../theme";

export const Container = styled.View``;

export const SearchTextInput = styled.TextInput`
  height: 48px;
  background-color: ${theme.gray[100]};
  border-radius: 36px;
  padding: 16px;
`;

export const SearchIconView = styled.View`
  width: 52px;
  height: 48px;
  background-color: ${theme.brand.blue};
  position: absolute;
  right: 0;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 36px;
  justify-content: center;
  align-items: center;
`;
