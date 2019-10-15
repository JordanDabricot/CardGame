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
import SearchRoom from '../components/SearchRoom';
import CreateGameModal from '../components/CreateGameModal';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Anonymous",
      message : "",
      messageTab: []
    };
  };

  static navigationOptions = {
    title: 'Welcome',
  };

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.viewTitle}>
          <ImageBackground source={require('../assets/mariobg.jpg')} style={styles.title}>
          </ImageBackground>
        </View>
        <View style={styles.viewCustomSettings}>
          <UserIcons style={{flex:1}}/>
          <TextInput style={styles.inputSettings}
            placeholder="Entrer votre nom"
          />
        </View>
        <View style={styles.viewListGame}>
          <SearchRoom/>
        </View>
        <View style={styles.buttonPlay}>
        <CreateGameModal style={styles.gameModal} navigation={this.props.navigation}/>
        </View>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  title: 'Accueil',
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewTitle: {
    flex: 1
  },
  title: {
    flex:1,
    height:200,
  },
  viewCustomSettings: {
    flex: 1,
    flexDirection: "row",
    marginTop:170,
  },
  inputSettings: {
   width:200,
   height:30,
   borderColor: 'black',
   borderWidth: 1,
   borderRadius:10,
  },
  buttonPlay: {
   borderWidth:1,
   borderColor:'black',
   borderRadius:10,
   width:200,
   marginLeft: 80,
   marginBottom:50
  },
  emojiPicker: {
   height: 100,
   width: 150
  },
  viewListGame: {
    flex: 5
  }
});
