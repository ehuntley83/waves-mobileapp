import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView from 'react-native-maps';
import Constants from 'expo-constants';

export default class AroundMe extends Component {
  static navigationOptions = {
    title: 'Around Me',
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} />
      </View>
    );
  }
}

// todo: move these to a styles file
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#25273a',
    padding: 8,
    height: '100%',
  },
  paragraph: {
    color: '#becce7',
    fontSize: 20,
  },
  mapStyle: {
    width: '100%',
    height: '100%',
  }
});