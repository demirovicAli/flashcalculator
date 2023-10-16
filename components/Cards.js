import { View, Text } from "react-native";
import React from "react";
import { styles } from "./Styles";

const Cards = (props) => {
  return (
    <View style={styles.cards}>
      <View style={styles.card}>
        <Text style={styles.cardText}>
          {props.isRunning ? props.calculations[0][0] : ""}
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardText}>
          {props.isRunning ? props.calculations[0][1] : ""}
        </Text>
      </View>
    </View>
  );
};

export default Cards;
