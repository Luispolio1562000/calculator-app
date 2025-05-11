import { globalStyles } from "@/styles/global-styles";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

//? Todos los componentes que esten en la carpeta (app) se renderizaran en este componente
const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={globalStyles.background}>
      <Slot />

      <StatusBar style="auto" />
    </View>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
