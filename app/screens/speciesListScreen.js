import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import SearchSpeciesBar from "../components/searchSpeciesBar";
import SpeciesGridSection from "../components/speciesGridSection";


const SpeciesListScreen = (props) => {

  const handleItemSelect = (item) => {
    props.navigation.navigate('VistaDetalleEspecie', item);
  }
    return (
        <View style={{ width: "100%", height: "100%" }}>
          <LinearGradient
            colors={["#001709", "#0E4926"]}
            locations={[0.5, 1]}
            style={styles.fondo}
          >
            <View style={styles.searchBar}>
              <SearchSpeciesBar />
            </View>
              <SpeciesGridSection onPress={handleItemSelect}/>
          </LinearGradient>
        </View>
    )
};

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
  },

  searchBar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 18,
    marginBottom: 20,
  },

  icon: {
    color: 'white',
    marginTop: 15
  }
});


export default SpeciesListScreen;
