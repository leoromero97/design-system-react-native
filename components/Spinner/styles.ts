import { StyleSheet } from "react-native";
import { ThemeObject } from "../ThemeProvider/types";
import { SpinnerProps } from "./types";

export const spinnerStyles = (
  primaryColor: string,
  secondaryColor: string,
  size: SpinnerProps["size"],
  theme?: ThemeObject
): StyleSheet.NamedStyles<any> => {
  return StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
    spinner: {
      width: size === "extraSmall" ? 24 : 32,
      height: size === "extraSmall" ? 24 : 32,
      borderWidth: 2,
      borderTopColor: secondaryColor,
      borderLeftColor: primaryColor,
      borderBottomColor: primaryColor,
      borderRightColor: primaryColor,
      borderRadius: 25,
    },
  });
};
