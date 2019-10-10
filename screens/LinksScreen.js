import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function LinksScreen() {
  return (
    <View style={styles.container}>
    <ImageBackground source={require('../assets/images/background-image/home-header.jpg')} style={styles.title}>
    </ImageBackground>
    </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'Créer une partie',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  title: {
    flex:1,
    height:200
  },
});
