import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";

import colors from '../config/colors'

const SpeciesListItem = (props) => {

  return (
    <TouchableHighlight onPress={() => props.onPress(props.itemData)} underlayColor={colors.superiorBandGreen}>
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
    width: "90%",
    padding: 15,
  },

  image: {
    height: 60,
    width: 60,
    marginRight: 15,
  },

  listText: {
    flexDirection: "column",
  },

  title: {
    color: "white",
    fontSize: 20,
  },

  subTitle: {
    color: "#C4C4C4",
    fontSize: 16,
  },
});

export default SpeciesListItem;
