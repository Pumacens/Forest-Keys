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
    width: '93%', 
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent:'flex-start',
    alignItems: 'center',
  },

  iconoBusqueda: {
    marginHorizontal: 10,
    color: '#A9A9A9',
  },

  texto: {
    color: '#A9A9A9',
    fontSize: 14
  }
})

export default SearchSpeciesBar;
