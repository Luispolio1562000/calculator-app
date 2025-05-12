import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { Text, type TextProps } from "react-native";

interface Props extends TextProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const ThemeText = ({ children, variant = "h1", ...res }: Props) => {
  return (
    <Text
      adjustsFontSizeToFit
      {...res}
      style={[
        { color: "white", fontFamily: "SpaceMono" },
        variant === "h1" && globalStyles.mainResult,
        variant === "h2" && globalStyles.subResult,
      ]}
    >
      {children}
    </Text>
  );
};

export default ThemeText;
