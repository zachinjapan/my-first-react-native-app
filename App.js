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
  const [timer, setTimer] = React.useState(null);

  const startTimer = () => {
    setTimer(
      setInterval(() => {
        setCount;
      }, 1000)
    );
  };

  return (
    <View
      style={[combineStyles.container, { backgroundColor: backgroundColor1 }]}
    >
      <Text style={styles.title}>
        click the button 10 times in 10 seconds to change the background color
      </Text>
      <Text style={styles.count}>{count}</Text>

      <Button
        onPress={() => {
          if (count === 10) {
            setBackgroundColor1(randomHexColor());
            setCount(0);
          } else {
            setCount(count + 1);
          }
        }}
        title="click me"
        color="#841584"
        style={styles.button}
        accessibilityLabel="Learn more about this purple button"
      />
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
