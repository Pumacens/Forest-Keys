import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"

const SearchSpeciesBar = () => {
  return (
    <View style={styles.barra}>
      <FontAwesome5 name='search' size={20} style={styles.iconoBusqueda}/>
      <Text style={styles.texto}>Especie, familia, nombre común...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  barra:{
    borderRadius: 5,
    height: 45,
    width: '80%', 
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center'
  },

  iconoBusqueda: {
    color: '#A9A9A9',
    marginRight: 7
  },

  texto: {
    color: '#A9A9A9',
    fontSize: 14
  }
})

export default SearchSpeciesBar;
