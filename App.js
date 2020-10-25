import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StatusBar, ActivityIndicator, LogBox } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import * as MediaLibrary from "expo-media-library";
import * as Permissions from "expo-permissions";
import { AppLoading } from "expo";
import { loadAsync } from "expo-font";

import colors from "./app/config/colors";
import WelcomeScreen from "./app/screens/welcomeScreen";
import SpeciesListScreen from "./app/screens/speciesListScreen";
import { navigationRef } from "./app/config/RootNavigation";
import {
  getSpeciesData,
  getSpeciesKeyData,
  getDb,
  createDbFolder,
} from "./app/data/speciesData";
import SpeciesDataContext from "./app/context/SpeciesDataContext";
import SpecieDetailScreen from "./app/screens/specieDetailScreen";
import SpecieKeyScreen from "./app/screens/speciesKeyScreen";

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const Stack = createStackNavigator();

const StackNavigator = (props) => {
  return (
    <SpeciesDataContext.Consumer>
      {(context) => {
        if ((context.keyData.length === 0) || (context.data.length === 0)) {
          return <ActivityIndicator style={{flex:1}} size="large" color="#00ff00" />;

        } else {
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
                    color: "white",
                    fontSize: 23,
                  },
                  headerTitleAlign: "center",
                  headerTintColor: "white",
                }}
              />
              <Stack.Screen
                name="VistaDetalleEspecie"
                component={SpecieDetailScreen}
              />
              <Stack.Screen
                name="SpeciesKeyScreen"
                component={SpecieKeyScreen}
                options={{ title: "Clave", headerTitleAlign:'center' }}
                initialParams={{
                  keyData: context.keyData,
                  data: context.data
                }}
              />
            </Stack.Navigator>
          );
        }
      }}
    </SpeciesDataContext.Consumer>
  );
};

export default function App() {
  const [isReady, changeIsReady] = useState(false);
  const [backgroundImage, changeBG] = useState(null);

  loadAssetsAsync = async () => {
    // Load a font SedanSC and Background image
    changeBG(require("./app/assets/portada2-op.png"));

    await loadAsync({
      SedanSC: require("./app/assets/fonts/SedanSC-Regular.ttf"),
    });

    await createDbFolder();
    await getDb();
    changeSpeciesData(await getSpeciesData());
    changeSpeciesKeyData(await getSpeciesKeyData());
  };

  const [speciesData, changeSpeciesData] = useState([]);
  const [speciesKeyData, changeSpeciesKeyData] = useState([]);

  // useEffect(() => {
  //   actualizeData = async () => {
  //     await createDbFolder();
  //     await getDb();
  //     changeSpeciesData(await getSpeciesData());
  //     changeSpeciesKeyData(await getSpeciesKeyData());
  //   };

  //   actualizeData();
  // }, []);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadAssetsAsync}
        onFinish={() => changeIsReady(true)}
        onError={console.warn}
      />
    );
  } else {
    return (
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.statusBarGreen}
        />
        <SpeciesDataContext.Provider
          value={{
            data: speciesData,
            keyData: speciesKeyData,
            changeData: changeSpeciesData,
            backgroundImage: backgroundImage,
          }}
        >
          <NavigationContainer ref={navigationRef}>
            <StackNavigator/>
          </NavigationContainer>
        </SpeciesDataContext.Provider>
      </>
    );
  }
}
