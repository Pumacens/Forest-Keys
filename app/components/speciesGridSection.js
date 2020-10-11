import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import SpeciesGridItem from "./speciesGridItem";
import ListItemSeparator from './listItemSeparator'

const SpeciesGridSection = (props) => {
  return (
    <View style={styles.section}>
      <FlatList
        data={props.list}
        keyExtractor={(item) => item.ID.toString()}
        renderItem={({ item }) => {
          return <SpeciesGridItem onPress={props.onPress} key={item.ID} itemData={item} />;
        }}
        ItemSeparatorComponent={ListItemSeparator}
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