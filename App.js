import React from "react";
import { StackNavigator, TabNavigator } from "react-navigation";
import { AppLoading, Asset } from "expo";
import MonsterFieldGuide from "./src/MonsterFieldGuide";
import Ecology from "./src/Ecology";
import Physiology from "./src/Physiology";
import Monsters from "./src/monsters";

class MonsterDetails extends React.Component {
  render() {
    return (
      <MonsterDetailsStack screenProps={this.props.navigation.state.params} />
    );
  }
}

const MonsterDetailsStack = TabNavigator({
  Ecology: Ecology,
  Physiology: Physiology
});

const RootStack = StackNavigator({
  MonsterFieldGuide: {
    screen: MonsterFieldGuide
  },
  MonsterDetails: {
    screen: MonsterDetails,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`
    })
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
