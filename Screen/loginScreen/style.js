import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    justifyContent: "center", // Center content vertically
    alignItems: "center",    // Center content horizontally
  },
  container01: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  container02: {
    width: "90%", // Use percentage for responsiveness
    justifyContent: "center",
    alignItems: "center",
  },
  container03: {
    justifyContent: "center",
    alignItems: "center",
  },
  container04: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 225,
    height: 225,
    marginBottom: 20, // Add spacing below the image
  },
  // logoUser: {
  //   width: 30,
  //   height: 30,
  //   position: "absolute",
  //   top: -10,
  //   right: 120,
  // },
  logoEye: {
    width: 20,
    height: 20,
    position: "absolute",
    top: 19,
    left: 90,
  },
  logoLock: {
    width: 20,
    height: 20,
    position: "absolute",
    top: 40,
    left: 215,
  },
  text01: {
    fontFamily: "Roboto",
    color: "#CCFFFF",
    fontSize: 35,
    fontWeight: "bold", // Use "bold" for better compatibility
    marginBottom: 20, // Add spacing below the title
    textAlign: "center",
  },
  text02: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "400",
    color: "#000",
    margin: 10,
    textAlign: "center", // Center the text horizontally
  },
  btn01: {
    height: 40,
    width: 250,
    backgroundColor: "#FFF",
    borderRadius: 20,
    paddingHorizontal: 20, // Adjust padding for consistent spacing
    marginVertical: 10,    // Add spacing between buttons
  },
  container3_1: {
    marginTop: 20,
    alignItems: "center",
  },
  text03: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
  },
  button1: {
    backgroundColor: "#33CC66",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 70,
    borderRadius: 30,
  },
  container05: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  text04: {
    color: "#ADA3A3",
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Roboto",
    textAlign: "center",
  },
  text05: {
    fontSize: 18,
    fontFamily: "Roboto",
    color: "#FFF",
    textAlign: "center",
  },
});

export default Style;
