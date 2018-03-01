import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default class Physiology extends React.Component {
  static navigationOptions = {
    title: "Physiology"
  };

  render() {
    const { name, species, elements } = this.props.screenProps;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.species}>{species}</Text>
          <Text style={styles.name}>{name}</Text>
          {elements.map(([element, ranking]) => {
            return (
              <Text
                key={element}
                style={styles.paragraph}
              >{`${element}: ${ranking}`}</Text>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    minHeight: "100%"
  },
  paragraph: {
    marginBottom: 10,
    width: "100%"
  },
  species: {
    fontSize: 20
  },
  name: {
    fontSize: 30,
    marginBottom: 10
  },
  icon: {
    flex: 1,
    width: undefined,
    height: undefined,
    alignSelf: "stretch",
    minWidth: "100%",
    marginBottom: 10
  }
});
