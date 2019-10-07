import React, { Component } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';

export default class MenuItem extends Component {
  _onPressButton = () => {
    Alert.alert(`Menu item ${this.props.menuItemId} pressed`);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPressButton}>
          <Text style={styles.paragraph}>Makin' Wavez</Text>
          <Image style={styles.logo} source={require('../assets/icon.png')} />
        </TouchableOpacity>
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
    width: '50%',
  },
  paragraph: {
    color: '#becce7',
  },
  logo: {
    height: 128,
    width: 128,
  }
});