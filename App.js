import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  StatusBar,
  View
} from "react-native";

import colors from './app/config/colors'
import WelcomeScreen from './app/screens/welcomeScreen'
import SpeciesListScreen from './app/screens/speciesListScreen';

export default function App() {

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusBarGreen} />
      <View style={styles.container}>
        {/* <WelcomeScreen /> */}
        <SpeciesListScreen/>
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
