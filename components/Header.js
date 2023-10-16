import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./Styles";

function Header(props) {
  const formatTime = (time) => {
    if (time !== undefined) {
      const seconds = Math.floor(time / 1000);
      const minutes = Math.floor(seconds / 60);

      const formattedSeconds =
        seconds % 60 < 10 ? `0${seconds % 60}` : `${seconds % 60}`;
      return `${minutes}:${formattedSeconds}`;
    } else {
      return "0";
    }
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startText} onPress={props.start}>
          {!props.isRunning ? "Start" : "Stop"}
        </Text>
      </TouchableOpacity>
      <View style={styles.result}>
        <Text style={styles.resultText}>{props.result}</Text>
      </View>
      <View style={styles.time}>
        <Text style={styles.timeText}>{formatTime(props?.time)}</Text>
      </View>
    </View>
  );
}

export default Header;
