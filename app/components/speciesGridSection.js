import React from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

import SpeciesGridItem from "./speciesGridItem";
import SpeciesDataContext from '../context/SpeciesDataContext';

const SpeciesGridSection = (props) => {

  return (
    <View style={styles.section}>
      <SpeciesDataContext.Consumer>
        {context => { 
          if (context.data.length === 0){
            return <ActivityIndicator size="large" color="#00ff00" />

          } else {
            return(
            <FlatList
              data={context.data}
              keyExtractor={(item) => { return item.id.toString() }}
              renderItem={({ item }) => {
                // console.log(item.id.toString());
                return <SpeciesGridItem key={item.id} itemData={item} onPress={props.onPress}/>;
              }}
              persistentScrollbar={true}
              numColumns={2}
              initialNumToRender={4}
            />
          )
          }
         }}
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