import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import * as MediaLibrary from "expo-media-library";
import * as Permissions from "expo-permissions";
import { AppLoading } from "expo";
import { loadAsync } from "expo-font";
import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";

import colors from "./app/config/colors";
import WelcomeScreen from "./app/screens/welcomeScreen";
import SpeciesListScreen from "./app/screens/speciesListScreen";
import { navigationRef } from "./app/config/RootNavigation";
import getData from "./app/data/realData";
import {dbData} from "./app/config/dbData"
import SpeciesDataContext from "./app/context/SpeciesDataContext";
import SpecieDetailScreen from "./app/screens/specieDetailScreen";

const Stack = createStackNavigator();

const StackNavigator = (props) => {

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
  const [isReady, changeIsReady] = useState(false);
  const [backgroundImage, changeBG] = useState(null);

  loadAssetsAsync = async () => {
    // Load a font SedanSC and Background image
    console.log("loading assets------------------------------------------------------------");
    changeBG(require("./app/assets/portada2-op.png"));

    await loadAsync({
      SedanSC: require("./app/assets/fonts/SedanSC-Regular.ttf"),
    });

    console.log("assets loaded------------------------------------------------------------");
  };


  const [speciesData, changeSpeciesData] = useState([]);

  useEffect(() => {
    // getData().then((data) => {
    //   changeSpeciesData(data);
    //   console.log('################# datos cargados ######################');
    //   console.log(data);
    // }).catch((ex)=> {
    //   console.log('DATOS NO SE PUDIERON CARGAR');

    // })
      actualizeData = async () => {
        if (!(await FileSystem.getInfoAsync(dbData.dbDir)).exists) {
          const dbTest = SQLite.openDatabase("dummy.db");
          // Create dummy db to make SQlite folder
          try {
            dbTest.transaction((tx) => tx.executeSql(""));

            // console.log("Se creó directorio de base de datos: ", dbTest);
      
          } catch (e) {
            console.log("error while executing SQL in dummy DB: ", e);
            
          } 
    
          Console.log('Directorio de db creado');
        }

        changeSpeciesData(await getData());
      }

      actualizeData();
  },[])

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
          value={{ data: speciesData, changeData: changeSpeciesData, backgroundImage: backgroundImage}}
        >
          <NavigationContainer ref={navigationRef}>
            <StackNavigator/>
          </NavigationContainer>
        </SpeciesDataContext.Provider>
      </>
    );
  }
}
