import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

const MapMarker = ({marker, onPress}) => {
  return (
    <View>
      <MapView.Marker
        coordinate={{
          latitude: marker.latitude,
          longitude: marker.longitude
        }}
        pinColor='red'
        onPress={() => onPress()}
      />
    </View>
  );
}

export default MapMarker;