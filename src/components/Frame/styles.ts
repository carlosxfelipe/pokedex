import styled from "styled-components/native";
import { theme } from "../../theme";

export const Container = styled.View`
  flex-direction: row;
  background-color: ${theme.white};
  justify-content: space-around;
  margin-left: 16px;
  margin-right: 16px;
  padding: 9px;
  border-radius: 8px;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
`;

export const BiggerText = styled.Text`
  font-weight: 700;
  font-size: 28px;
  color: ${theme.gray[700]};
`;

export const SmallerText = styled.Text`
  font-weight: 500;
  font-size: 13px;
  color: ${theme.gray[600]};
`;
