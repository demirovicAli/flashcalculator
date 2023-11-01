import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  header: {
    width: windowWidth,
    height: windowHeight / 5,
    backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  startButton: {
    width: 60,
    height: 40,
    backgroundColor: "white",
    borderRadius: 20,
    textAlign: "center",
    alignItems: "center",
  },

  startText: {
    alignSelf: "center",
    textAlign: "center",
    alignItems: "center",
    fontSize: 15,
    padding: 5,
  },
  result: {
    backgroundColor: "purple",
    alignSelf: "flex-end",
    height: 50,
    width: 80,
    borderWidth: 2,
    borderBottomColor: "yellow",
  },

  resultText: {
    fontSize: 20,
    justifyContent: "center",
    alignContent: "center",
    color: "white",
    margin: 3,
  },

  time: {
    width: 111,
    height: 50,
    backgroundColor: "white",
  },

  timeText: {
    alignSelf: "center",
    textAlign: "center",
    alignItems: "center",
    padding: 10,
    fontSize: 15,
  },
  cards: {
    width: windowWidth,
    height: windowHeight / 4,
    backgroundColor: "gray",
    flexDirection: "row",
  },

  card: {
    width: windowWidth / 2 - 20,
    margin: 10,
    backgroundColor: "orange",
  },

  cardText: {
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
    marginTop: "20%",
    fontSize: 50,
    fontWeight: "bold",
  },

  keyboard: {
    alignContent: "center",
    flex: 11,
    width: windowWidth,
    height: windowHeight / 2,
    backgroundColor: "purple",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: 3,
  },

  number: {
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "white",
    width: windowWidth / 3 - 26,
    height: windowHeight / 11,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    textAlign: "center",
  },

  numText: {
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
    marginTop: 10,
    fontSize: 20,
  },

  recordContainer: {
    flexDirection: "column",
  },

  record: {
    flexDirection: "column",
  },
});
