import { render, fireEvent } from "@testing-library/react-native";

import { EvolutionButton } from "./EvolutionButton";

describe("Evolution Button", () => {
  test("it should be able to click it", async () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <EvolutionButton testID="button" onPress={onPress} />
    );
    const button = getByTestId("button");
    fireEvent.press(button);
    expect(onPress).toBeCalled();
  });
});
