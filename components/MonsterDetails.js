import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class MonsterDetails extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
