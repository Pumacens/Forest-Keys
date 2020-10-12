import React from "react";
import { View, Text } from "react-native";

class SpecieDetailScreen extends React.Component {

  componentDidMount() {
    this.props.navigation.setOptions({ title: this.props.route.params.name });
  }

  render() {
    return (
      <View>
        <Text>Specie ID:{this.props.route.params.ID}</Text>
      </View>
    );
  }
}

export default SpecieDetailScreen;
