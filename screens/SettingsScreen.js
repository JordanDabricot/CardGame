import React from 'react';
import { View, StatusBar, ImageBackground, Button } from 'react-native';

class GameMenu extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <ImageBackground source={require('../assets/bg.png')} style={{ flex: 1 }}>
          <StatusBar hidden={true} />
          <ImageBackground source={require('../assets/board.png')} style={{ flex: 3, width:375, height:300, marginTop:350 }}>
          </ImageBackground>
        </ImageBackground>
      </View>
    );
  }
}

export default GameMenu;
