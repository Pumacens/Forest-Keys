import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Picker } from "@react-native-community/picker";
import { FontAwesome5 } from "@expo/vector-icons";

const KeysDropdown = (props) => {
  return ( 
    <View style={props.styles}>
      <Picker
        mode="dialog"
        style={{ height: 50, width: "100%", color: "white" }}
      >
        <Picker.Item label="Clave de prueba 1..." value="..." />
        <Picker.Item label="a" value="..." />
        <Picker.Item label="b" value="..." />
        <Picker.Item label="c" value="..." />
      </Picker>
      <FontAwesome5 style={[styles.iconDropClaves]} name="sort-down" />
    </View>    
  );
}

const styles = StyleSheet.create({

  iconDropClaves: {
    color: "white",
    position: "absolute",
    left: "94%",
    top: "30%",
  },

})
 
export default KeysDropdown;