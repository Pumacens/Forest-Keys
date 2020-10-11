import React from "react";
import { View, StyleSheet } from "react-native";

const ListItemSeparator = () => {
  return <View style={styles.separador}></View>;
};

const styles = StyleSheet.create({
  separador: {
    height: 2,
    width: '90%',
    backgroundColor: '#8E9C9355',
    marginLeft: 15
  }
})

export default ListItemSeparator;
