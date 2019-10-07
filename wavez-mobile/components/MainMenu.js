import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class MainMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Makin' Wavez</Text>
        <Image style={styles.logo} source={require('../assets/icon.png')} />
      </View>
    );
  }
}

// todo: move these to a styles file
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#2a4780',
  },
  paragraph: {
    color: '#becce7',
  },
  logo: {
    height: 128,
    width: 128,
  }
});