import CalculatorButton from "@/components/CalculatorButton";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/Colors";
import { useCalculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { View } from "react-native";

const CalculatorApp = () => {
  const {
    formula,
    prevNumber,
    buildNumber,
    clean,
    toggleSign,
    deleteLast,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Result */}
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <ThemeText numberOfLines={1} variant="h1">
          {formula}
        </ThemeText>
        <ThemeText numberOfLines={1} variant="h2">
          {formula === prevNumber ? (
            <ThemeText>Sin numero</ThemeText>
          ) : (
            <ThemeText variant="h2">{prevNumber}</ThemeText>
          )}
        </ThemeText>

        {/* Buttons */}
        {/* Row 1 */}
        <View style={globalStyles.row}>
          <CalculatorButton
            label="C"
            onPress={clean}
            blackText
            color={Colors.lightGray}
          />
          <CalculatorButton
            label="+/-"
            onPress={toggleSign}
            blackText
            color={Colors.lightGray}
          />
          <CalculatorButton
            label="del"
            onPress={deleteLast}
            blackText
            color={Colors.lightGray}
          />
          <CalculatorButton
            label="÷"
            onPress={divideOperation}
            color={Colors.orange}
            blackText={false}
          />
        </View>
        {/* Row 2 */}
        <View style={globalStyles.row}>
          <CalculatorButton
            label="7"
            onPress={() => {
              buildNumber("7");
            }}
            blackText={false}
            color={Colors.darkGray}
          />
          <CalculatorButton
            label="8"
            onPress={() => {
              buildNumber("8");
            }}
            blackText={false}
            color={Colors.darkGray}
          />
          <CalculatorButton
            label="9"
            onPress={() => {
              buildNumber("9");
            }}
            blackText={false}
            color={Colors.darkGray}
          />
          <CalculatorButton
            label="x"
            onPress={multiplyOperation}
            color={Colors.orange}
            blackText={false}
          />
        </View>
        <View style={globalStyles.row}>
          <CalculatorButton
            label="4"
            onPress={() => {
              buildNumber("4");
            }}
            blackText={false}
            color={Colors.darkGray}
          />
          <CalculatorButton
            label="5"
            onPress={() => {
              buildNumber("5");
            }}
            blackText={false}
            color={Colors.darkGray}
          />
          <CalculatorButton
            label="6"
            onPress={() => {
              buildNumber("6");
            }}
            blackText={false}
            color={Colors.darkGray}
          />
          <CalculatorButton
            label="-"
            onPress={subtractOperation}
            color={Colors.orange}
            blackText={false}
          />
        </View>
        <View style={globalStyles.row}>
          <CalculatorButton
            label="1"
            onPress={() => {
              buildNumber("1");
            }}
            blackText={false}
            color={Colors.darkGray}
          />
          <CalculatorButton
            label="2"
            onPress={() => {
              buildNumber("2");
            }}
            blackText={false}
            color={Colors.darkGray}
          />
          <CalculatorButton
            label="3"
            onPress={() => {
              buildNumber("3");
            }}
            blackText={false}
            color={Colors.darkGray}
          />
          <CalculatorButton
            label="+"
            onPress={addOperation}
            color={Colors.orange}
            blackText={false}
          />
        </View>
        <View style={globalStyles.row}>
          <CalculatorButton
            label="0"
            onPress={() => {
              buildNumber("0");
            }}
            blackText={false}
            color={Colors.darkGray}
            doubleWidth
          />
          <CalculatorButton
            label="."
            onPress={() => {
              buildNumber(".");
            }}
            blackText={false}
            color={Colors.darkGray}
          />
          <CalculatorButton
            label="="
            onPress={() => {
              console.log("Calcular resultado");
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
