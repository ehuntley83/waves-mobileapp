import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapView from 'react-native-maps';
import Constants from 'expo-constants';

export default class AroundMe extends Component {
  state = {
    location: null,
    errorMessage: null,
    testMarkers: [
      { id: '01', latitude: 42.054811, longitude: -71.496436 },
      { id: '02', latitude: 42.048545, longitude: -71.519142 },
      { id: '03', latitude: 42.050878, longitude: -71.518744 },
      { id: '04', latitude: 42.032763, longitude: -71.504890 },
      { id: '05', latitude: 42.018984, longitude: -71.509221 },
      { id: '06', latitude: 42.030872, longitude: -71.463038 },
      { id: '07', latitude: 42.061212, longitude: -71.466386 },
      { id: '08', latitude: 42.092938, longitude: -71.491277 },
      { id: '09', latitude: 42.115545, longitude: -71.487243 }
    ]
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };


  render() {
    let text = 'Loading...';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    }

    return (
      <View style={styles.container}>
        {(this.state.errorMessage || !this.state.location)
        ? <Text style={styles.paragraph}>{text}</Text>
        : <MapView style={styles.mapStyle} 
            initialRegion={{
              latitude: this.state.location.coords.latitude,
              longitude: this.state.location.coords.longitude,
              latitudeDelta: 0.06,
              longitudeDelta: 0.02}}>
            <MapView.Marker
              coordinate={{
                latitude: this.state.location.coords.latitude,
                longitude: this.state.location.coords.longitude
              }}
              pinColor='blue'
            />
            {this.state.testMarkers.map(marker => (
              <MapView.Marker
                key={marker.latitude + marker.longitude}
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude
                }}
                pinColor='red'
                onPress={() => this.props.navigation.navigate('LocationDetails', { locationId: marker.id })}
              />
            ))}
          </MapView>
        }
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