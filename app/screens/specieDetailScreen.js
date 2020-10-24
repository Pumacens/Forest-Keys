import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

class SpecieDetailScreen extends React.Component {

  componentDidMount() {
    this.props.navigation.setOptions({ title: this.props.route.params.nombrecientifico });
    // console.log(this.props.route.params.imagen[0]);
  }

  render() {
    return (
      <View>
        <Text>Specie ID:{this.props.route.params.id}</Text>
        <ScrollView style={styles.carousel} horizontal={true}>
          {this.props.route.params.imagen.map((img, indx) => {
            return <Image style={styles.img} key={indx} source={{
              uri: img
            }}/>
          })}
        </ScrollView>
        <View style={styles.nombrescomunes} >
          {this.props.route.params.nombrecomun.map((nc, indx) => {
            return <Text key={indx}>{nc}</Text>
          })}
        </View>
        <Text>Descripcion:</Text>
        <Text>{this.props.route.params.descripcion}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nombrescomunes: {
    marginVertical: 20
  },

  carousel:{
    height: 300,
    marginHorizontal: 20
  },

  img: {
    height: 300,
    width: 300,
  }

})

export default SpecieDetailScreen;
