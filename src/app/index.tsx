import React from "react";
import { View, Text, StyleSheet, Alert, Button } from "react-native";

export default function Index() {
  function handleMessage() {
      const name = "mano";
      console.log("Testing");
    return Alert.alert(`Olá, ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá Davi!</Text>
      <Button title="Send" onPress={handleMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 32,
  },

  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
