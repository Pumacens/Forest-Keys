import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Picker } from "@react-native-community/picker";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  ImageBackground,
  TouchableNativeFeedback,
} from "react-native";
import { faSortDown, faFileImport, faBars } from "@fortawesome/free-solid-svg-icons";

const { width, height } = Dimensions.get("screen");

export default function App() {
  const handleTextPress = () => {};

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#023829" />
      <View style={styles.container}>
        <ImageBackground
          style={styles.portada}
          source={require("./assets/portada2-op.png")}
        >
          <View style={styles.hero}>
            <FontAwesomeIcon style={styles.botonHambuergesa} size={25} icon= { faBars } />
            <Text style={[styles.texto, styles.titulo]}>ForestKeys</Text>
            <Text style={[styles.subTitulo]}>
              Seleccione la clave a utilizar
            </Text>
            <View style={styles.dropdown}>
              <Picker
                mode="dropdown"
                style={{height: 50, width: '100%', color: 'white'}}
              >
                <Picker.Item label="Lista de claves..." value="..." />
                <Picker.Item label="a" value="..." />
                <Picker.Item label="b" value="..." />
                <Picker.Item label="c" value="..." />
              </Picker>
              <FontAwesomeIcon
                style={[styles.iconDropClaves]}
                icon={faSortDown}
              />
            </View>
          </View>

          <View style={styles.seccionPortadaBotones}>
            <TouchableNativeFeedback title="IDENTIFICAR PLANTA">
              <View style={styles.botonPortada}>
                <Text style={styles.textoBoton}>IDENTIFICAR PLANTA</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback title="LISTA DE ESPECIES DE LA CLAVE">
              <View style={styles.botonPortada}>
                <Text style={styles.textoBoton}>LISTA DE ESPECIES DE LA CLAVE</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback title="IMPORTAR CLAVE">
              <View style={styles.botonPortada}>
                <FontAwesomeIcon size={20} style={styles.iconImportarClave} icon={ faFileImport } />
                <Text style={[styles.textoBoton, {right: 7}]}>IMPORTAR CLAVE</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </ImageBackground>
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

  portada: {
    width: width,
    height: height,
  },

  hero: {
    height: "50%",
    justifyContent: "center",
    backgroundColor: "#000000BB",
    alignItems: "center",
    paddingBottom: 15,
  },

  botonHambuergesa: {
    color: 'white',
    alignSelf: 'flex-end',
    right: 10
  },

  titulo: {
    fontSize: 40,
    color: "white",
  },

  seccionPortadaBotones: {
    height: "50%",
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: "#00000066",
    paddingVertical: 30
  },

  subTitulo: {
    color: "white",
    marginBottom: 45
  },

  dropdown: {
    borderBottomColor: "#FFF",
    borderBottomWidth: 2,
    marginTop: 20,
    width: "85%",
    flexDirection: "row",
    borderLeftColor: '#FFFFFF33',
    borderLeftWidth: 1,
    borderRightColor: '#FFFFFF33',
    borderRightWidth: 1,
    paddingHorizontal: 7,
  },

  iconDropClaves: {
    color: "white",
    position: "absolute",
    left: "94%",
    top: "30%",
  },

  botonPortada: {
    paddingTop: 20,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    height: 50,
    width: "75%",
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'center',
  },

  textoBoton: {
    color: "white",
    bottom: 11
  },

  iconImportarClave: {
    bottom: 10,
    right: 30,
    color: 'white',
  },
});
