import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { withNavigation } from 'react-navigation';

const MenuItem = ({navigation, routeName, width, topText, imageUri, bottomText}) => {
  _onPressButton = () => {
    navigation.navigate(routeName);
  }

  return (
    <View style={[styles.container, { width: width }]}>
      <TouchableOpacity style={styles.button} onPress={this._onPressButton}>
        <Text style={styles.paragraph}>{topText}</Text>
        <Image style={styles.buttonImage} source={imageUri} />
        <Text style={styles.paragraph}>{bottomText}</Text>
      </TouchableOpacity>
    </View>
  );
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