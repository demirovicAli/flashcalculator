import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./Styles";

const Keyboard = (props) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [keyColor, setKeyColor] = React.useState("white"); // 'original', 'red', 'green'

  function handlePress(i) {
    props.setResult((old) => {
      return [...old, i];
    });
  }

  function checkResult() {
    let card1 = props.calculations[0][0];
    let card2 = props.calculations[0][1];
    console.log(props.calculations.length);
    console.log(props.isRunning);
    if (
      card1 * card2 == props.result.join("") &&
      props.calculations.length > 1
    ) {
      setKeyColor("green");
      setTimeout(() => setKeyColor("white"), 100); // Reset after 1 second

      console.log("correct");
      console.log(props.result + " " + card1 + " " + card2);
      removeCard();
      props.setResult("");
    } else if (props.calculations.length < 2) {
      props.saveRecord();
      props.setIsRunning(false);
      props.setResult("");
      props.setSound();
    } else {
      setKeyColor("red");
      setTimeout(() => setKeyColor("white"), 100); // Reset after 1 second
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
    const backgroundColor =
      keyColor === "red" ? "red" : keyColor === "green" ? "green" : "white";

    return numbers.map((num) => (
      <TouchableOpacity
        style={[styles.number, { backgroundColor }]}
        key={num}
        onPress={() => handlePress(num)}
      >
        <Text style={styles.numText}> {num}</Text>
      </TouchableOpacity>
    ));
  }

  return (
    <View style={styles.keyboard}>
      {generateKeyboard()}
      <TouchableOpacity style={styles.number} onPress={deleteResult}>
        <Text style={styles.numText}>Delete</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.number} onPress={checkResult}>
        <Text style={styles.numText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Keyboard;
