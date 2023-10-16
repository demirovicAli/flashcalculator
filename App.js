import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import Cards from "./components/Cards";
import React, { useState, useRef, useEffect } from "react";
import { styles } from "./components/Styles";

export default function App() {
  const [time, setTime] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);
  const [calculations, setCalcuations] = React.useState([]);
  const [result, setResult] = React.useState([]);

  let oldTime = new Date();

  function populate() {
    let temp = [];

    for (let i = 1; i < 3; i++) {
      temp.push([i, 5]);
      temp.push([i, 8]);
      temp.push([i, 11]);
      temp.push([i, 17]);
      temp.push([i, 35]);
    }
    return temp;
  }

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => {
      // Component will unmount
      clearInterval(intervalRef.current);
    };
  }, []);

  const start = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      resetStopwatch();
    } else {
      setCalcuations(shuffle(populate()));
      const startTime = Date.now() - time;
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 1000);
    }
    setIsRunning(!isRunning);
  };
  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header start={start} time={time} isRunning={isRunning} result={result} />
      <Cards calculations={calculations} isRunning={isRunning} />
      <Keyboard
        setResult={setResult}
        result={result}
        calculations={calculations}
        setCalcuations={setCalcuations}
      />
    </SafeAreaView>
  );
}
