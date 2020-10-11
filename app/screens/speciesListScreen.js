import React from "react";
import { StyleSheet } from "react-native";

import ListViewStyleNavigator from "../navigation/ListViewStyleNavigator";
import data from '../data/dummySpecies';

const SpeciesListScreen = (props) => {

  const handleItemPress = (specie) => {
    console.log("pressed, ", specie);
  };

  return (
    <ListViewStyleNavigator onPress={handleItemPress} data={data}/>
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

});

export default SpeciesListScreen;
