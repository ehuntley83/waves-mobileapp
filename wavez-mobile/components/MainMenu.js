import React from 'react';
import { View, StyleSheet } from 'react-native';

import MenuItem from './MenuItem';

const menuItemImages = {
  compass: require('../assets/compass.png'),
  icon: require('../assets/icon.png'),
  search: require('../assets/search.png'),
  sos: require('../assets/sos.png'),
};

const MainMenu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menuRow}>
        <MenuItem menuItemId='1' bottomText='Search Destination' imageUri={menuItemImages.search} routeName='Search' width='98.5%'/>
      </View>
      <View style={styles.menuRow}>
        <MenuItem menuItemId='2' topText='Around' bottomText='Me' imageUri={menuItemImages.compass} routeName='AroundMe' width='48%'/>
        <MenuItem menuItemId='3' topText='SOS' bottomText='Contacts' imageUri={menuItemImages.sos} routeName='Sos' width='48%'/>
      </View>
    </View>
  );
}

export default MainMenu;

// todo: move these to a styles file
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#25273a',
  },
  menuRow: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
  },
});