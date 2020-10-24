import React, { Component } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableNativeFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";

import TopMenu from "../components/topMenu";
import KeysDropdown from "../components/keysDropdown";
import data from "../config/deviceData";
import SpeciesDataContext from "../context/SpeciesDataContext";

class WelcomeScreen extends Component {

  handleChangeToKeyScreen = () => {
     
  };

  handleChangeToSpeciesScreen = () => {
    this.props.navigation.navigate("SpeciesListScreen");
  };

  render() {
    return (
      <SpeciesDataContext.Consumer>
        {context => {return (
          <ImageBackground
            style={styles.portada}
            source={context.backgroundImage}
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

        )}}
      </SpeciesDataContext.Consumer>
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
