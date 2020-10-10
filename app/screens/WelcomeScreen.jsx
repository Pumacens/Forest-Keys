import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableNativeFeedback,
  Dimensions,
} from "react-native";

import TopMenu from '../components/topMenu';
import MenuClaves from '../components/menuClaves'

const { width, height } = Dimensions.get("screen");

function WelcomeScreen() {

  const handleButtonPress = () => {
    console.log('boton oprimido');
  }

  return (
    <ImageBackground
      style={styles.portada}
      source={require("../assets/portada2-op.png")}
    >
      <View style={styles.hero}>
        <TopMenu style={styles.botonMenuSuperior}/>
        <Text style={[styles.texto, styles.titulo]}>ForestKeys</Text>
        <Text style={[styles.subTitulo]}>Seleccione la clave a utilizar</Text>
        <MenuClaves styles={styles.menuClaves}/>
      </View>

      <View style={styles.seccionPortadaBotones}>
        <TouchableNativeFeedback onPress={handleButtonPress} title="IDENTIFICAR PLANTA">
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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  portada: {
    width: width,
  },

  botonMenuSuperior: {
    color: "white",
    alignSelf: "flex-end",
    right: 10,
    bottom: 8,
  },

  test:{
    width: '100%',
  },

  hero: {
    height: "50%",
    justifyContent: "center",
    backgroundColor: "#000000BB",
    alignItems: "center",
    paddingBottom: 15,
  },

  titulo: {
    fontSize: 40,
    color: "white",
  },
  
  subTitulo: {
    color: "white",
    marginBottom: 45,
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
    backgroundColor: "#00000066",
    paddingVertical: 30,
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
    fontFamily: 'Roboto'
  },

  iconImportarClave: {
    bottom: 10,
    right: 30,
    color: "white",
  },
});

export default WelcomeScreen;
