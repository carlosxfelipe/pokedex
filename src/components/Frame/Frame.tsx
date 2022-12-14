import React from "react";
import { ViewProps } from "react-native";
import { shadow } from "../../helpers/utils";

import { Container, Content, BiggerText, SmallerText } from "./styles";

interface FrameProps extends ViewProps {
  number: number;
  height: number;
  weight: number;
}

export const Frame: React.FC<FrameProps> = ({
  number,
  height,
  weight,
  style,
  testID,
}) => {
  return (
    <Container style={[style, shadow]} testID={testID}>
      <Content>
        <BiggerText>{number}</BiggerText>
        <SmallerText>Number</SmallerText>
      </Content>

      <Content>
        <BiggerText>{height}</BiggerText>
        <SmallerText>Height</SmallerText>
      </Content>

      <Content>
        <BiggerText>{weight}</BiggerText>
        <SmallerText>Weight</SmallerText>
      </Content>
    </Container>
  );
};
