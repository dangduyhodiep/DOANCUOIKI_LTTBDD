import { StyleSheet } from "react-native";

const StylesSceenRegister = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    justifyContent: "center", // Center content vertically
    alignItems: "center",    // Center content horizontally
  },
  container01: {
    justifyContent: "center",
    marginTop: 10,
  },
  container02: {
    width: 450,
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 150,
    marginLeft: 100,
    resizeMode: "contain",
  },
  text01: {
    fontFamily: "Roboto",
    color: "#CCFFFF",
    fontSize: 35,
    fontWeight: 400, // Use "bold" for better compatibility
    marginBottom: 20, // Add spacing below the title
    textAlign: "center",
  },
  text02: {
    fontFamily: "Roboto",
    color: "#CCFFFF",
    fontSize: 20,
    fontWeight: 400,
    margin: 5,
  },
  btn01: {
    height: 40,
    width: 250,
    backgroundColor: "#FFF",
    borderRadius: 20,
    paddingLeft: 15,
  },
  container3_1: {
    marginTop: 20,
    marginLeft: 50,
  },
  text03: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: 700,
  },
  button1: {
    backgroundColor: "#000",
    marginTop: 30,
    marginLeft: 60,
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 70,
    borderRadius: 30,
  },
  container05: {
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 50,
  },
  text04: {
    color: "#000",
    fontSize: 16,
    fontWeight: 400,
    fontFamily: "Roboto",
  },
  text05: {
    fontSize: 18,
    fontFamily: "Roboto",
    color: "#FFF",
  },
  img1: {
    height: 24,
    width: 24,
    tintColor: "#000",
  },
});

export default StylesSceenRegister;
