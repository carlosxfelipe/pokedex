import styled from "styled-components/native";
import { theme } from "../../theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.white};
  padding: 16px;
`;

export const SearchContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SearchText = styled.Text`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const RecentSearchesText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin-top: 21px;
  margin-bottom: 33px;
`;
