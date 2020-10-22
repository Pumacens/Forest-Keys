import React, { Component } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableNativeFeedback,
} from "react-native";
import { loadAsync } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import * as Permissions from "expo-permissions";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";

import TopMenu from "../components/topMenu";
import KeysDropdown from "../components/keysDropdown";
import data from "../config/deviceData";

const db = SQLite.openDatabase("chinook.db");

class WelcomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dbDir: `${FileSystem.documentDirectory}SQLite/chinook.db`,
    };

    this.state.isReady = false;
  }

  loadAssetsAsync = async () => {
    // Load a font SedanSC and Background image
    (this.state.backgroundImage = require("../assets/portada2-op.png")),
      await loadAsync({
        SedanSC: require("../assets/fonts/SedanSC-Regular.ttf"),
      });

    // Create dummy db to make SQlite folder
    const dbTest = SQLite.openDatabase("dummy.db");

    try {
      await dbTest.transaction((tx) => tx.executeSql(""));
      // console.log("Se creó directorio de base de datos: ", dbTest);
      FileSystem.deleteAsync(`${FileSystem.documentDirectory}SQLite/dummy.db`);
    } catch (e) {
      console.log("error while executing SQL in dummy DB: ", e);
    }

    //Import db chinook from assets

    let dbAssetdir = Asset.fromModule(require("../assets/db/chinook.db")).uri;

    try{
      await FileSystem.downloadAsync(dbAssetdir, this.state.dbDir)
      this.db = SQLite.openDatabase("chinook.db");
      // console.log(db);

    } catch(e){
      console.log("Excepcion reading chinook.db");
      console.log(ex);
      FileSystem.deleteAsync(this.state.dbDir);
    }
  };


  handleChangeToKeyScreen = async () => {
    // db.transaction(tx => {
    //   tx.executeSql(
    //     `SELECT * FROM genres;`,
    //     [],
    //     (result) => console.log(result)
    //   );
    // });

    this.db.transaction((tx) => {
      tx.executeSql("select * from media_types", [], (trans, result) => { 
        console.log(".......................................................");
        result.rows._array.map(item => console.log(item));
      });
    });
  };

  handleChangeToSpeciesScreen = () => {
    this.props.navigation.navigate("SpeciesListScreen");
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <ImageBackground
        style={styles.portada}
        source={this.state.backgroundImage}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.85)", "rgba(0,0,0,0.20)", "rgba(0,0,0,1)"]}
          locations={[0.5, 0.8, 1]}
        >
          <View style={styles.hero}>
            <TopMenu style={styles.botonMenuSuperior} />
            <Text
              style={[
                styles.texto,
                styles.titulo,
                {
                  fontFamily: "SedanSC",
                },
              ]}
            >
              ForestKeys
            </Text>
            <Text style={[styles.subTitulo]}>
              Seleccione la clave a utilizar
            </Text>
            <KeysDropdown styles={styles.menuClaves} />
          </View>

          <View style={styles.seccionPortadaBotones}>
            <TouchableNativeFeedback
              onPress={this.handleChangeToKeyScreen}
              title="IDENTIFICAR PLANTA"
            >
              <View style={styles.botonPortada}>
                <Text style={styles.textoBoton}>IDENTIFICAR PLANTA</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              title="LISTA DE ESPECIES DE LA CLAVE"
              onPress={() => this.handleChangeToSpeciesScreen(this.props)}
            >
              <View style={styles.botonPortada}>
                <Text style={styles.textoBoton}>
                  LISTA DE ESPECIES DE LA CLAVE
                </Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback title="IMPORTAR CLAVE">
              <View style={styles.botonPortada}>
                <FontAwesome5
                  size={20}
                  style={styles.iconImportarClave}
                  name="file-import"
                />
                <Text style={[styles.textoBoton, { right: 7 }]}>
                  IMPORTAR CLAVE
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </LinearGradient>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  portada: {
    width: data.width,
  },

  botonMenuSuperior: {
    color: "white",
    alignSelf: "flex-end",
    right: 10,
    bottom: 8,
  },

  test: {
    width: "100%",
  },

  hero: {
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },

  titulo: {
    fontSize: 54,
    color: "white",
    marginBottom: -12,
  },

  subTitulo: {
    color: "white",
    marginBottom: 45,
    fontSize: 18,
  },

  menuClaves: {
    borderBottomColor: "#FFF",
    borderBottomWidth: 2,
    marginTop: 25,
    width: "85%",
    flexDirection: "row",
    borderLeftColor: "#FFFFFF33",
    borderLeftWidth: 1,
    borderRightColor: "#FFFFFF33",
    borderRightWidth: 1,
    paddingHorizontal: 7,
  },

  seccionPortadaBotones: {
    height: "50%",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 35,
    marginTop: 5,
  },

  botonPortada: {
    paddingTop: 20,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    height: 50,
    width: "75%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },

  textoBoton: {
    color: "white",
    bottom: 11,
    fontFamily: "Roboto",
    fontWeight: "bold",
  },

  iconImportarClave: {
    bottom: 10,
    right: 30,
    color: "white",
  },
});

export default WelcomeScreen;
