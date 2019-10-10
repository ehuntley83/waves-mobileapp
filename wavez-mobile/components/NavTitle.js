import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default class NavTitle extends Component {
  render() {
    return (
      <View style={styles.navTitleContainer}>
        <Text style={styles.navTitleText}>Wavez </Text>
        <Image style={styles.navTitleIcon} source={require('../assets/icon.png')} />
        <Text style={styles.navTitleText}> Mobile</Text>
      </View>
    );
  }
}

// todo: move these to a styles file
const styles = StyleSheet.create({
  navTitleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  navTitleText: {
    fontWeight: 'bold',
    color: '#becce7',
    fontSize: 28,
  },
  navTitleIcon: {
    width: 32,
    height: 32,
  },
});