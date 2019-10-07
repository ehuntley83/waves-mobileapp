import React from 'react';
import Constants from 'expo-constants';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

import MainMenu from './components/MainMenu';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Wavez Mobile
        </Text>
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
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#25273a',
    padding: 8,
    height: '100%',
  },
  paragraph: {
    color: '#becce7',
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});