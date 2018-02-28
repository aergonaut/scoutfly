import React from "react";
import { StackNavigator } from "react-navigation";
import { AppLoading, Asset } from "expo";
import MonsterFieldGuide from "./src/MonsterFieldGuide";
import MonsterDetails from "./src/MonsterDetails";
import Monsters from "./src/monsters";

const RootStack = StackNavigator({
  MonsterFieldGuide: {
    screen: MonsterFieldGuide
  },
  MonsterDetails: {
    screen: MonsterDetails
  }
});

function cacheImages() {
  return Monsters.Large.map(({ icon }) => {
    return Asset.fromModule(icon).downloadAsync();
  });
}

export default class App extends React.Component {
  state = {
    isReady: false
  };

  async loadAssets() {
    const images = cacheImages();
    await Promise.all([...images]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.loadAssets}
          onFinish={() => this.setState({ isReady: true })}
        />
      );
    } else {
      return <RootStack />;
    }
  }
}
