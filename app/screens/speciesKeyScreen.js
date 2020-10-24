import React, { Component } from "react";
import { Text, View } from "react-native";
import KeyOptions from '../components/keyOptions';

export default class SpeciesKeyScreen extends Component {
  

  render() {
    return (
      <View>
        <KeyOptions navigate={this.props.navigation.navigate}/>
      </View>
    );
  }
}
