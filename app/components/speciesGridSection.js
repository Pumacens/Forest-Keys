import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import SpeciesGridItem from "./speciesGridItem";
import SpeciesDataContext from '../context/SpeciesDataContext';

const SpeciesGridSection = (props) => {

  return (
    <View style={styles.section}>
      <SpeciesDataContext.Consumer>
        {context => { return(
          <FlatList
            data={context.data}
            keyExtractor={(item) => item.ID.toString()}
            renderItem={({ item }) => {
              return <SpeciesGridItem key={item.ID} itemData={item} onPress={props.onPress}/>;
            }}
            persistentScrollbar={true}
            numColumns={2}
            initialNumToRender={4}
          />
        ) }}
      </SpeciesDataContext.Consumer>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    flex: 1,
  },
});

export default SpeciesGridSection;