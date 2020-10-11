import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons"

import SuperiorBand from "../components/superiorBand";
import SearchSpeciesBar from '../components/searchSpeciesBar';
import SpeciesListSection from '../components/speciesListSectionSection';
import SpeciesGridSection from '../components/speciesGridSection';

const SpeciesListView = (props) => {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <SuperiorBand title="Especies" />
      <LinearGradient
        colors={["#001709", "#0E4926"]}
        locations={[0.5, 1]}
        style={styles.fondo}
      >
        <View style={styles.topSection}>
          <SearchSpeciesBar />
          <FontAwesome5 name='grip-vertical' size={25} style={styles.iconoLista}/>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  fondo: {
    width: "100%",
    height: "100%",
  },

  topSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 18
  },

  iconoLista: {
    color: 'white',
    marginLeft: 16
  }
});

export default SpeciesListView;
