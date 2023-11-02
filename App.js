import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Animated } from "react-native";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import Cards from "./components/Cards";
import Record from "./components/Record";
import React, { useState, useRef, useEffect } from "react";
import { styles } from "./components/Styles";
import { Audio } from "expo-av";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import app from "./components/firebaseConfig";

export default function App() {
  const [time, setTime] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);
  const [calculations, setCalcuations] = React.useState([]);
  const [result, setResult] = React.useState([]);
  const [record, setRecord] = React.useState([]);

  //Save score

  const db = getFirestore();

  // Save a score
  function saveScore(userId, score) {
    const scoresCollection = collection(db, "scores");
    addDoc(scoresCollection, {
      userId: userId,
      score: score,
      timestamp: serverTimestamp(),
    });
  }

  // Get top scores
  function getTopScores() {
    const scoresCollection = collection(db, "scores");
    const q = query(scoresCollection, orderBy("score", "desc"), limit(10));
    return q;
  }

  function saveRecord() {
    const newRecords = [...record, time];
    newRecords.sort((a, b) => a - b); // Sorts from best (shortest) time to worst (longest)
    setRecord(newRecords.slice(0, 5)); // Keeps only the top 5 times
  }
  let oldTime = new Date();

  function populate() {
    let temp = [];

    for (let i = 1; i < 2; i++) {
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
    if (isRunning) {
      const startTime = Date.now() - time;
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
      setTime(0);
    }
    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, [isRunning]);

  const start = () => {
    if (isRunning) {
      setTime(0);
      setCalcuations([]);
    } else {
      setCalcuations(shuffle(populate()));
    }
    setIsRunning(!isRunning);
  };

  function renderCards() {
    if (isRunning) {
      return <Cards calculations={calculations} isRunning={isRunning} />;
    } else {
      console.log(record);
      return <Record record={record}></Record>;
    }
  }

  //Animation

  const colorAnimation = useRef(new Animated.Value(0)).current;

  const backgroundColor = colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["#ddd", "#f00"],
  });

  const triggerWrongResultAnimation = () => {
    // First animate to red
    Animated.timing(colorAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      // Then animate back to original after a brief pause
      Animated.sequence([
        Animated.delay(1000), // Pause for 1 second
        Animated.timing(colorAnimation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
      ]).start();
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header start={start} time={time} isRunning={isRunning} result={result} />
      {renderCards()}
      <Keyboard
        setResult={setResult}
        result={result}
        calculations={calculations}
        setCalcuations={setCalcuations}
        setRecord={setRecord}
        setIsRunning={setIsRunning}
        isRunning={isRunning}
        saveRecord={saveRecord}
      />
    </SafeAreaView>
  );
}
