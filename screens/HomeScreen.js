import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Picker,
  TextInput,
  ImageBackground
} from 'react-native';

import { MonoText } from '../components/StyledText';
import UserIcons from '../components/UserIcons';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Anonymous",
      message : "",
      messageTab: []
    };
  };
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.viewTitle}>
          <ImageBackground source={require('../assets/images/background-image/home-header.jpg')} style={styles.title}>
          </ImageBackground>
        </View>
        <View style={styles.viewCustomSettings}>
          <UserIcons style={{flex:1}}/>
          <TextInput style={styles.inputSettings}
            placeholder="Entrer votre nom"
          />
        </View>
        <View style={styles.viewListGame}>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewTitle: {
    flex: 1
  },
  title: {
    flex:1
  },
  viewCustomSettings: {
    flex: 1,
    flexDirection: "row"
  },
  inputSettings: {
   width:300,
   height:50
  },
  emojiPicker: {
   height: 50,
   width: 150
  },
  viewListGame: {
    flex: 4
  }
});
