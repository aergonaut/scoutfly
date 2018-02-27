import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView
} from "react-native";
import Monsters from "./monsters";

export default class MonsterFieldGuide extends React.Component {
  static navigationOptions = {
    title: "Monster Field Guide"
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.monsterHeader}>Large Monsters</Text>
          <View style={styles.monsterList}>
            {Monsters.Large.map((monsterData, idx) => {
              return (
                <TouchableHighlight
                  key={idx}
                  onPress={() =>
                    this.props.navigation.navigate(
                      "MonsterDetails",
                      monsterData
                    )
                  }
                >
                  <Image style={styles.monsterIcon} source={monsterData.icon} />
                </TouchableHighlight>
              );
            })}
          </View>
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
    paddingTop: 20
  },
  monsterHeader: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20
  },
  monsterList: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
  },
  monsterIcon: {
    width: 100,
    height: 100,
    margin: 10
  }
});
