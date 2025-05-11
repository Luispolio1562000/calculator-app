import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.backgound,
  },
  title: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "100",
    marginBottom: 20,
    fontFamily: "SpaceMono",
    color: Colors.textPrimary,
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  mainResult: {
    color: Colors.textPrimary,
    fontSize: 70,
    textAlign: "right",
    marginHorizontal: 20,
    marginBottom: 10,
    fontWeight: "400",
    //fontFamily: "SpaceMono",
  },
  subResult: {
    color: Colors.textSecondary,
    fontSize: 40,
    textAlign: "right",
    marginHorizontal: 20,
    marginBottom: 20,
    fontWeight: "300",
  },
});
