import ThemeText from "@/components/ThemeText";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { View } from "react-native";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <ThemeText numberOfLines={1} variant="h1">
        Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </ThemeText>
      <ThemeText numberOfLines={1} variant="h2">
        SubResult
      </ThemeText>
    </View>
  );
};

export default CalculatorApp;
