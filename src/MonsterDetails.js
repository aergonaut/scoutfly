import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { type NavigationScreenProp } from "react-navigation";

type Props = {
  navigation: NavigationScreenProp
};

export default class MonsterDetails extends React.Component<Props> {
  static navigationOptions = {
    title: "Monster Details"
  };

  render() {
    const {
      icon,
      name,
      species,
      characteristics,
      usefulInformation
    } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.species}>{species}</Text>
          <Text style={styles.name}>{name}</Text>
          <Image style={styles.icon} source={icon} resizeMode="contain" />
          <Text style={styles.paragraph}>{characteristics}</Text>
          <Text style={styles.paragraph}>{usefulInformation}</Text>
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
