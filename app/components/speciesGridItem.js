import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";

import colors from "../config/colors";

const SpeciesGridItem = (props) => {
  return (
    <TouchableHighlight
      onPress={() => props.onPress(props.itemData)}
      underlayColor={colors.superiorBandGreen}
    >
      <View style={styles.listItem}>
        <View styles={styles.listText}>
          <Text style={styles.title}>{props.itemData.name} - {props.itemData.nombreComun}</Text>
        </View>
        <Image
          style={styles.image}
          source={{
            uri: `https://picsum.photos/id/${props.itemData.ID + 10}/200/200`,
          }}
        />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: 300,
    height: 300
  },

  image: {
    height: 60,
    width: 60,
  },

  titleBar: {
    backgroundColor: colors.superiorBandGreen,
    height: '100%',
    width: '100%'
  },

  title: {
    color: "white",
    fontSize: 20,
  },

});

export default SpeciesGridItem;
