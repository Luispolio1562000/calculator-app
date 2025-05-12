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
    fontWeight: "400",
    //fontFamily: "SpaceMono",
  },
  subResult: {
    color: Colors.textSecondary,
    fontSize: 40,
    textAlign: "right",
    fontWeight: "300",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  button: {
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.darkGray,
    borderRadius: 100,
    marginHorizontal: 10,
  },
  buttonText: {
    color: Colors.textPrimary,
    fontSize: 30,
    fontWeight: "300",
    textAlign: "center",
    padding: 10,
    fontFamily: "SpaceMono",
  },
});
