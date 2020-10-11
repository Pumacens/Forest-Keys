import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons"

import SuperiorBand from "../components/superiorBand";
import SearchSpeciesBar from '../components/searchSpeciesBar';
import SpeciesListSection from '../components/speciesListSection';
import SpeciesGridSection from '../components/speciesGridSection';
import data from '../data/dummySpecies'

const SpeciesListView = (props) => {

  const handleItemPress = (specie) => {
    console.log("pressed, ", specie);
  };

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <SuperiorBand title="Especies" />
      <LinearGradient
        colors={["#001709", "#0E4926"]}
        locations={[0.5, 1]}
        style={styles.fondo}
      >
        <View style={styles.topSection}>
          <SearchSpeciesBar/>
          <FontAwesome5 name='grip-vertical' size={25} style={styles.iconoLista}/>
        </View>

        {/* <SpeciesListSection  onPress={handleItemPress} list={data} style={styles.flatList} /> */}
        <SpeciesGridSection  onPress={handleItemPress} list={data} style={styles.flatList} />

      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
  },

  topSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 18,
    marginBottom: 20,
  },

  iconoLista: {
    color: 'white',
    marginLeft: 16
  },

  flatList: {

  }
});

export default SpeciesListView;
