import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

const LocationDetails = ({navigation}) => {
  const locationId = navigation.state.params.locationId;

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{locationId}</Text>
    </View>
  );
}

export default LocationDetails;

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
});