import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import SpeciesListItem from "./speciesListItem";
import ListItemSeparator from './listItemSeparator'

const SpeciesListSection = (props) => {
  return (
    <View style={styles.section}>
      <FlatList
        data={props.list}
        keyExtractor={(item) => item.ID.toString()}
        renderItem={({ item }) => {
          return <SpeciesListItem onPress={props.onPress} key={item.ID} itemData={item} />;
        }}
        // ItemSeparatorComponent={ListItemSeparator}
        persistentScrollbar={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    flex: 1,
  },
});

export default SpeciesListSection;
