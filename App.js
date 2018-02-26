import React from "react";
import { StackNavigator } from "react-navigation";
import MonsterFieldGuide from "./components/MonsterFieldGuide";

const RootStack = StackNavigator({
  MonsterFieldGuide: {
    screen: MonsterFieldGuide
  }
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
