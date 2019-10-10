import React from 'react';
import Constants from 'expo-constants';
import { View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import NavTitle from './components/NavTitle';
import MainMenu from './components/MainMenu';
import Search from './components/Search';
import AroundMe from './components/AroundMe';
import Sos from './components/Sos';

class App extends React.Component {
  static navigationOptions = {
    headerTitle: <NavTitle />, // headerTitle rather than just title since this contains a component
  };

  render() {
    return (
      <View style={styles.appContainer}>
        <Card>
          <MainMenu />
        </Card>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: App,
    Search: Search,
    AroundMe: AroundMe,
    Sos: Sos
  },
  {
    initialRouteName: 'Home',
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#25273a',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#becce7',
        fontSize: 28,
      },
    },
  }
);

export default createAppContainer(AppNavigator);

// todo: move these to a styles file
// color pallette: https://www.color-hex.com/color-palette/80300
const styles = StyleSheet.create({
  appContainer: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#25273a',
    padding: 8,
    height: '100%',
  },
});