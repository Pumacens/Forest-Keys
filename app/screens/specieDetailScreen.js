import React from "react";
import { View, Text } from "react-native";

class SpecieDetailScreen extends React.Component {

  componentDidMount() {
    this.props.navigation.setOptions({ title: this.props.route.params.nombrecientifico });
  }

  render() {
    return (
      <View>
        <Text>Specie ID:{this.props.route.params.id}</Text>
        <Text>Descripcion:{this.props.route.params.descripcion}</Text>
      </View>
    );
  }
}

export default SpecieDetailScreen;
