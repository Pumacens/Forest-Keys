import React, { Component } from "react";
import { Text, View, TouchableNativeFeedback, StyleSheet } from "react-native";

export default class KeyOptions extends Component {

  render() {
    return (
      <View  style={{
        alignItems:'center',
        justifyContent: 'center',
        flex: 1
      }}>
        {this.props.route.params.keyData.map((i) => {
          return (
            <TouchableNativeFeedback
              key={i.ID}
              background={TouchableNativeFeedback.Ripple("#23681c", false)}
              onPress={() => {
                this.props.route.params.onPress(i);
              }}
              delayPressIn={0}
            >
              <View 
                style={styles.opciones}
              >
                <Text>{i.Opcion}</Text>
              </View>
            </TouchableNativeFeedback>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  opciones: {
    marginVertical: 20,
    borderWidth: 2,
    borderColor: "black",
    height: 150,
    width: '80%',
    backgroundColor: '#bde2b8',
  },
});
