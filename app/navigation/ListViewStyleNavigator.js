import React, { useState } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

import SuperiorBand from "../components/superiorBand";
import SearchSpeciesBar from "../components/searchSpeciesBar";
import SpeciesListSection from "../components/speciesListSection";
import SpeciesGridSection from "../components/speciesGridSection";
import colors from '../config/colors';

const MyTheme = {
  colors: {
    background: 'transparent',
    border:'transparent'
  },
};

const Tab = createBottomTabNavigator();
const TabNavigator = (props) => {
  return (
    <Tab.Navigator headerMode="none" tabBarOptions={{
      activeBackgroundColor: colors.listSpeciesBlack,
      inactiveBackgroundColor: colors.listSpeciesGreen
    }} >
      <Tab.Screen
        name="FlatList"
        component={SpeciesListSection}
        initialParams={{ ...props }}
        options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome5 name="list" size={size} style={styles.icon} />
          ),
          tabBarLabel: '',
          
        }}
        
      />
      <Tab.Screen
        name="GridList"
        component={SpeciesGridSection}
        initialParams={{ ...props }}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons
            name='view-grid'
            size={size}
            style={styles.icon}
          />
          ),
          tabBarLabel: '',
        }}
      />
    </Tab.Navigator>
  );
};

const ListViewStyleNavigator = (props) => {
  const [listIcon, changeListIcon] = useState("view-grid");

  return (
    <NavigationContainer theme={MyTheme}>
      <View style={{ width: "100%", height: "100%" }}>
        <SuperiorBand title="Especies" />
        <LinearGradient
          colors={["#001709", "#0E4926"]}
          locations={[0.5, 1]}
          style={styles.fondo}
        >
          <View style={styles.topSection}>
            <SearchSpeciesBar />
          </View>
          <TabNavigator {...props} />
        </LinearGradient>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
  },

  topSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 18,
    marginBottom: 30,
  },

  icon: {
    color: "white",
    paddingTop: 15
  },
});

export default ListViewStyleNavigator;
