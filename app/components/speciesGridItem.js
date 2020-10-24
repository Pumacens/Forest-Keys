import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";

import colors from "../config/colors";
import data from '../config/deviceData'

const SpeciesGridItem = (props) => {

  const convertImage = (blob) => {
    // console.log(blob);
    // return blob
  }

  return (
    <TouchableHighlight
      onPress={() => props.onPress(props.itemData)}
      underlayColor={colors.itemTapColor}
    >
      <View style={styles.listItem}>
        <View style={styles.titleBar}>
          <Text style={styles.title}>{props.itemData.nombrecientifico}</Text>
          <Text style={styles.subTitle}>{props.itemData.familia}</Text>
        </View>
        <Image
          style={styles.image}
          source={{
            // uri: `https://picsum.photos/id/${props.itemData.id + 10}/200/200`,
            uri: props.itemData.imagen[0],
          }}
        />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: data.width / 2,
    height: 250,
    padding: 5,
  },

  image: {
    flex:1
  },

  titleBar: {
    backgroundColor: colors.superiorBandGreen,
    alignItems: 'center',
    paddingVertical: 4

  },

  title: {
    color: "white",
    fontSize: 16,
  },

  subTitle: {
    color: "#C4C4C4",
    fontSize: 13,
  },

});

export default SpeciesGridItem;
