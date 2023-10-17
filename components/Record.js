import { View, Text } from "react-native";
import React from "react";
import { styles } from "./Styles";

const Record = (props) => {
  const formatSingleTime = (milliseconds) => {
    const secondsTotal = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(secondsTotal / 60);
    const remainingSeconds = secondsTotal % 60;
    const formattedSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;
    return `${minutes}:${formattedSeconds}`;
  };

  const formatTimeList = () => {
    return props.record.map((time, index) => (
      <View style={styles.record} key={index}>
        <Text>
          Record {index + 1}: {formatSingleTime(time)}
        </Text>
      </View>
    ));
  };

  return <View style={styles.recordContainer}>{formatTimeList()}</View>;
};

export default Record;
