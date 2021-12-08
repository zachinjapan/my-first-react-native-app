import { StatusBar } from "expo-status-bar";
import React from "react";
import { Header, StyleSheet, Text, View, Button } from "react-native";

const randomHexColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

export default function App() {
  const [count, setCount] = React.useState(0);
  const [backgroundColor1, setBackgroundColor1] = React.useState("#000000");
  const combineStyles = StyleSheet.flatten([styles]);
  const [seconds, setSeconds] = React.useState(5);
  const [isRunning, setIsRunning] = React.useState(false);

  //  looping timer that counts down from 10 seconds and then sets count to 0 and restarts the timer

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
      if (seconds === 0) {
        setCount(0);
        setIsRunning(false);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <View
      style={[combineStyles.container, { backgroundColor: backgroundColor1 }]}
    >
      <Text style={styles.title}>
        {isRunning === false
          ? "click the button 30 times in 5 seconds for a surprise"
          : `${seconds} seconds left`}
      </Text>
      <Text style={styles.count}>{count}</Text>
      {isRunning === false ? (
        <Button
          title="Start"
          onPress={() => {
            setIsRunning(true);
            setSeconds(5);
          }}
        />
      ) : (
        <Button
          onPress={() => {
            if (isRunning === true && count <= 28) {
              setCount(count + 1);
            } else if (isRunning === true && count === 29) {
              setCount(0);
              setIsRunning(false);
              setBackgroundColor1(randomHexColor());
            }
          }}
          title="click me"
          color="#841584"
          style={styles.button}
          accessibilityLabel="Learn more about this purple button"
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(23, 0, 0)",
    color: "white",
    flexDirection: "column",
    justifyContent: "space-around",
    alignContent: "center",
    alignItems: "center",
  },

  count: {
    fontSize: 30,
    color: "white",
  },

  title: {
    fontSize: 40,
    color: "white",
  },

  button: {
    width: 200,
    height: 50,
    backgroundColor: "rgb(0, 0, 0)",
  },
});
