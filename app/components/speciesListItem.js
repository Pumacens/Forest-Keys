import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";

import colors from "../config/colors";

const SpeciesListItem = (props) => {
  return (
    <TouchableHighlight
      onPress={() => props.onPress(props.itemData)}
      underlayColor={colors.itemTapColor}
    >
      <View style={styles.listItem}>
        <Image
          style={styles.image}
          source={{
            uri: `https://picsum.photos/id/${props.itemData.ID + 10}/60/60`,
          }}
        />
        <View styles={styles.listText}>
          <Text style={styles.title}>{props.itemData.name}</Text>
          <Text style={styles.subTitle}>{props.itemData.nombreComun}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    // width: "100%",
    margin: 10,
    backgroundColor: colors.superiorBandGreen,
    borderRadius: 5,
  },

  image: {
    height: 75,
    width: 80,
    marginRight: 15,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },

  listText: {
    flexDirection: "column",
  },

  title: {
    color: "white",
    fontSize: 18,
    marginTop: 10,
  },

  subTitle: {
    color: "#C4C4C4",
    fontSize: 14,
  },
});

export default SpeciesListItem;
