import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import MenuItem from './MenuItem';

const menuItemImages = {
  first: require('../assets/icon.png'),
  second: require('../assets/icon.png')
};

export default class MainMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MenuItem menuItemId='1' text='Make Wavez' imageUri={menuItemImages.first} />
        <MenuItem menuItemId='2' text='Rule World' imageUri={menuItemImages.second} />
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
    flexDirection: 'row',
  }
});