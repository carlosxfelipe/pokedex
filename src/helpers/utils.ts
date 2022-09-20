import { Platform, ViewStyle } from "react-native";

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const shadow =
  Platform.OS === "android"
    ? ({
        elevation: 4,
        shadowColor: "rgba(0, 0, 0, 0.2)",
      } as ViewStyle)
    : ({
        shadowColor: "rgba(0, 0, 0, 0.2);",
        shadowOffset: {
          width: 5,
          height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 17,
      } as ViewStyle);
