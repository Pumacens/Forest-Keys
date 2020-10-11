import React from 'react';
// import { View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const TopMenu = (props) => {
    return ( 
      <Entypo style={props.style} name="menu" size={30} />
    );
}
 
export default TopMenu;