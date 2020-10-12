import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import colors from "./app/config/colors";
import WelcomeScreen from "./app/screens/welcomeScreen";
import SpeciesListScreen from "./app/screens/speciesListScreen";
import { navigationRef } from "./app/config/RootNavigation";
import data from "./app/data/dummySpecies";
import SpeciesDataContext from "./app/context/SpeciesDataContext";
import SpecieDetailScreen from "./app/screens/specieDetailScreen";

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="WelcomeScreen">
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SpeciesListScreen"
        component={SpeciesListScreen}
        options={{
          title: "Especies",
          headerStyle: {
            backgroundColor: colors.superiorBandGreen,
          },
          headerTitleStyle: {
            color: 'white',
            fontSize: 23
          },
          headerTitleAlign: 'center',
          headerTintColor: 'white'
        }}
      />
      <Stack.Screen name="VistaDetalleEspecie" component={SpecieDetailScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  const [speciesData, changeSpeciesData] = useState(data);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.statusBarGreen}
      />
      <SpeciesDataContext.Provider
        value={{ data: speciesData, changeData: changeSpeciesData }}
      >
        <NavigationContainer ref={navigationRef}>
          <StackNavigator />
        </NavigationContainer>
      </SpeciesDataContext.Provider>
    </>
  );
}
