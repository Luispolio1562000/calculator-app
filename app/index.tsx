import CalculatorButton from "@/components/CalculatorButton";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { View } from "react-native";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Result */}
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <ThemeText numberOfLines={1} variant="h1">
          Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </ThemeText>
        <ThemeText numberOfLines={1} variant="h2">
          SubResult
        </ThemeText>

        {/* Buttons */}
        {/* Row 1 */}
        <View style={globalStyles.row}>
          <CalculatorButton
            label="C"
            onPress={() => {
              console.log("C");
            }}
            blackText
            color={Colors.lightGray}
          />
          <CalculatorButton
            label="+/-"
            onPress={() => {
              console.log("+/-");
            }}
            blackText
            color={Colors.lightGray}
          />
          <CalculatorButton
            label="del"
            onPress={() => {
              console.log("%");
            }}
            blackText
            color={Colors.lightGray}
          />
          <CalculatorButton
            label="÷"
            onPress={() => {
              console.log("÷");
            }}
            color={Colors.orange}
            blackText={false}
          />
        </View>
        {/* Row 2 */}
        <View style={globalStyles.row}>
          <CalculatorButton
            label="7"
            onPress={() => {
              console.log("7");
            }}
            blackText={false}
            color={Colors.darkGray}
          />
          <CalculatorButton
            label="8"
            onPress={() => {
              console.log("8");
            }}
            blackText={false}
            color={Colors.darkGray}
          />
          <CalculatorButton
            label="9"
            onPress={() => {
              console.log("9");
            }}
            blackText={false}
            color={Colors.darkGray}
          />
          <CalculatorButton
            label="x"
            onPress={() => {
              console.log("x");
            }}
            color={Colors.orange}
            blackText={false}
          />
        </View>
        <View style={globalStyles.row}>
          <CalculatorButton
            label="4"
            onPress={() => {
              console.log("4");
            }}
            blackText={false}
            color={Colors.darkGray}
          />
          <CalculatorButton
            label="5"
            onPress={() => {
              console.log("5");
            }}
            blackText={false}
            color={Colors.darkGray}
          />
          <CalculatorButton
            label="6"
            onPress={() => {
              console.log("6");
            }}
            blackText={false}
            color={Colors.darkGray}
          />
          <CalculatorButton
            label="-"
            onPress={() => {
              console.log("-");
            }}
            color={Colors.orange}
            blackText={false}
          />
        </View>
        <View style={globalStyles.row}>
          <CalculatorButton
            label="1"
            onPress={() => {
              console.log("1");
            }}
            blackText={false}
            color={Colors.darkGray}
          />
          <CalculatorButton
            label="2"
            onPress={() => {
              console.log("2");
            }}
            blackText={false}
            color={Colors.darkGray}
          />
          <CalculatorButton
            label="3"
            onPress={() => {
              console.log("3");
            }}
            blackText={false}
            color={Colors.darkGray}
          />
          <CalculatorButton
            label="+"
            onPress={() => {
              console.log("+");
            }}
            color={Colors.orange}
            blackText={false}
          />
        </View>
        <View style={globalStyles.row}>
          <CalculatorButton
            label="0"
            onPress={() => {
              console.log("0");
            }}
            blackText={false}
            color={Colors.darkGray}
            doubleWidth
          />
          <CalculatorButton
            label="."
            onPress={() => {
              console.log(".");
            }}
            blackText={false}
            color={Colors.darkGray}
          />
          <CalculatorButton
            label="="
            onPress={() => {
              console.log("=");
            }}
            color={Colors.orange}
            blackText={false}
          />
        </View>
      </View>
    </View>
  );
};

export default CalculatorApp;
