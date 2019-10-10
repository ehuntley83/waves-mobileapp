import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { withNavigation } from 'react-navigation';

class MenuItem extends Component {
  _onPressButton = () => {
    this.props.navigation.navigate(this.props.routeName);
  }

  render() {
    return (
      <View style={[styles.container, { width: this.props.width }]}>
        <TouchableOpacity style={styles.button} onPress={this._onPressButton}>
          <Text style={styles.paragraph}>{this.props.topText}</Text>
          <Image style={styles.buttonImage} source={this.props.imageUri} />
          <Text style={styles.paragraph}>{this.props.bottomText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// withNavigation returns a component that wraps MenuItem and passes in the
// navigation prop
export default withNavigation(MenuItem);

// todo: move these to a styles file
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#2a4780',
    margin: 5,
  },
  paragraph: {
    color: '#becce7',
    fontSize: 20,
  },
  button: {
    alignItems: 'center',
  },
  buttonImage: {
    height: 128,
    width: 128,
  },
});