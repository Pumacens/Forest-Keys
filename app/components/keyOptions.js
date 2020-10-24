import React, { Component } from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";

export default class KeyOptions extends Component {
  render() {
    return (
      <View>
        <TouchableWithoutFeedback onPress={() => this.props.navigate('VistaClaveEspecies')}>
          <Text> textInComponent </Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
