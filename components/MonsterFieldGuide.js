import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const LARGE_MONSTERS = [
  require("../assets/images/MHWorldIcons/Large/MHW-Great_Jagras_Icon.png"),
  require("../assets/images/MHWorldIcons/Large/MHW-Kulu-Ya-Ku_Icon.png"),
  require("../assets/images/MHWorldIcons/Large/MHW-Pukei-Pukei_Icon.png"),
  require("../assets/images/MHWorldIcons/Large/MHW-Barroth_Icon.png"),
  require("../assets/images/MHWorldIcons/Large/MHW-Jyuratodus_Icon.png"),
  require("../assets/images/MHWorldIcons/Large/MHW-Tobi-Kadachi_Icon.png"),
  require("../assets/images/MHWorldIcons/Large/MHW-Anjanath_Icon.png"),
  require("../assets/images/MHWorldIcons/Large/MHW-Rathian_Icon.png"),
  require("../assets/images/MHWorldIcons/Large/MHW-Rathalos_Icon.png")
];

export default class MonsterFieldGuide extends React.Component {
  static navigationOptions = {
    title: "Monster Field Guide"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.monsterHeader}>Large Monsters</Text>
        <View style={styles.monsterList}>
          {LARGE_MONSTERS.map((imageSource, idx) => {
            return (
              <Image
                style={styles.monsterIcon}
                source={imageSource}
                key={idx}
              />
            );
          })}
        </View>
      </View>
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
