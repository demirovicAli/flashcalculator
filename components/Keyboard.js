import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./Styles";

const Keyboard = (props) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  function handlePress(i) {
    props.setResult((old) => {
      return [...old, i];
    });
  }

  function checkResult() {
    let card1 = props.calculations[0][0];
    let card2 = props.calculations[0][1];
    if (
      card1 * card2 == props.result.join("") &&
      props.calculations.length > 1
    ) {
      console.log("correct");
      console.log(props.result + " " + card1 + " " + card2);
      removeCard();
      props.setResult("");
    } else {
      console.log("incorect");
      console.log(props.result + " " + card1 + " " + card2);
    }
  }

  function removeCard() {
    console.log(props.calculations);
    const restofcards = props.calculations;
    restofcards.shift();
    props.setCalcuations(restofcards);
    console.log(props.calculations);
  }

  function deleteResult() {
    props.setResult(props.result.slice(0, -1));
  }

  function generateKeyboard() {
    const temp = numbers.map((num) => {
      return (
        <TouchableOpacity
          style={styles.number}
          key={num}
          onPress={() => handlePress(num)}
        >
          <Text style={styles.numText}> {num}</Text>
        </TouchableOpacity>
      );
    });
    return temp;
  }

  return (
    <View style={styles.keyboard}>
      {generateKeyboard()}

      <TouchableOpacity style={styles.number} onPress={checkResult}>
        <Text style={styles.numText}>Send</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.number} onPress={deleteResult}>
        <Text style={styles.numText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Keyboard;
