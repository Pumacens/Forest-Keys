import React, { Component } from "react";
import { Text, View, ActivityIndicator, BackHandler } from "react-native";
import KeyOptions from "../components/keyOptions";
import SpeciesDataContext from "../context/SpeciesDataContext";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default class SpeciesKeyScreen extends Component {

  filterCopla = (data) => {
    return data.filter((i) => {
      return i.Copla === this.state.enCopla;
    });
  };

  handleOptionPress = (opcion) => {
    let Siguiente = opcion.Siguiente;
    
    if (Siguiente.startsWith('C')){
      this.props.navigation.push("KeyOptions", {
        keyData: this.props.route.params.keyData.filter(i => {
          return i.Copla === parseInt(Siguiente[1])
        }),
      });

    } else {
      let SpData = this.props.route.params.data.filter(i => {
        return i.id === parseInt(Siguiente)
      })[0]

      this.props.navigation.navigate('VistaDetalleEspecie', SpData);
    }
  };

  render() {
    return (
      <SpeciesDataContext.Consumer>
        {(context) => {
            return (
              <Stack.Navigator>
                <Stack.Screen
                  name="KeyOptions"
                  component={KeyOptions}
                  options={{ headerShown: false }}
                  initialParams={{
                    keyData: this.props.route.params.keyData.filter(i => {
                      return i.Copla === 1
                    }),
                    onPress: this.handleOptionPress
                  }}
                />
              </Stack.Navigator>
            );
        }}
      </SpeciesDataContext.Consumer>
    );
  }
}
