import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import colors from "../config/colors";
import TopMenu from "./topMenu";

const SuperiorBand = (props) => {
  const backToIndex = () => {
    console.log("Welcome");
  };

  return (
    <View style={styles.banda}>
      <FontAwesome5
        size={30}
        name="angle-left"
        style={styles.iconoFlecha}
        onPress={backToIndex}
      />
      <Text style={styles.titulo}>{props.title}</Text>
      <TopMenu style={styles.topMenu} />
    </View>
  );
};

const styles = StyleSheet.create({
  banda: {
    height: 50,
    width: "100%",
    backgroundColor: colors.superiorBandGreen,
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 20,
    flexDirection: "row",
    paddingHorizontal: 10,
  },

  titulo: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

  iconoFlecha: {
    color: "white",
  },

  topMenu: {
    color: "white",
  },
});

export default SuperiorBand;
