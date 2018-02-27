import React from "react";
import { StackNavigator } from "react-navigation";
import MonsterFieldGuide from "./src/MonsterFieldGuide";
import MonsterDetails from "./src/MonsterDetails";

const RootStack = StackNavigator({
  MonsterFieldGuide: {
    screen: MonsterFieldGuide
  },
  MonsterDetails: {
    screen: MonsterDetails
  }
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
