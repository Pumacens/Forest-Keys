import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import SpeciesGridItem from "./speciesGridItem";
import ListItemSeparator from './listItemSeparator'

const SpeciesGridSection = (props) => {
  return (
    <View style={styles.section}>
      <FlatList
        data={props.route.params.data}
        keyExtractor={(item) => item.ID.toString()}
        renderItem={({ item }) => {
          return <SpeciesGridItem onPress={props.route.params.onPress} key={item.ID} itemData={item} />;
        }}
        persistentScrollbar={true}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    flex: 1,
  },
});

export default SpeciesGridSection;