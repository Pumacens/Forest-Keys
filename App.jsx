import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  View
} from "react-native";
import WelcomeScreen from './app/screens/WelcomeScreen'


export default function App() {
  const handleTextPress = () => {};

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#023829" />
      <View style={styles.container}>
        <WelcomeScreen />
      </View>
    </> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
});
