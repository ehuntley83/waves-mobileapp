import React from 'react';
import Constants from 'expo-constants';
import { Text, Image, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

import MainMenu from './components/MainMenu';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.menuTitle}>
            Wavez Mobile
          </Text>
          <Image style={styles.icon} source={require('./assets/icon.png')} />
        </View>
        <Card>
          <MainMenu />
        </Card>
      </View>
    );
  }
}

// todo: move these to a styles file
// color pallette: https://www.color-hex.com/color-palette/80300
const styles = StyleSheet.create({
  appContainer: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#25273a',
    padding: 8,
    height: '100%',
  },
  titleContainer: {
    backgroundColor: '#25273a', 
    alignItems: 'center',
  },
  menuTitle: {
    color: '#becce7',
    margin: 24,
    fontSize: 36,
    fontWeight: 'bold',
  },
  icon: {
    height: 128,
    width: 128,
  },
});