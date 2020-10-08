import React from 'react';
import { View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const TopMenu = (props) => {
    console.log(props.style)
    return ( 
      <Entypo style={props.style} name="menu" size={25} />
    );
}
 
export default TopMenu;