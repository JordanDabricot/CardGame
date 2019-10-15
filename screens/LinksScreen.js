import React from 'react';
import {
   View, 
   StyleSheet, 
   ImageBackground, 
   Text, 
   StatusBar 
  } from 'react-native';
import Draggable from 'react-native-draggable';

export default class LinksScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      valueInput: "",
      nbPlayer: "1",
      nameError: ""
    };
  };

  render(){
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/bg.png')} style={{ flex: 1 }}>
          <StatusBar hidden={true} />
          <ImageBackground source={require('../assets/board.png')} style={{ flex: 3, width:375, height:300, marginTop:350 }}>
            <Draggable
              reverse={false}
              renderShape='image'
              offsetX={150}
              offsetY={-250}
              imageSource={require('../assets/back.jpg')}
              renderSize={130}
            />
          </ImageBackground>
        </ImageBackground>
      </View>
    );
  }
}

LinksScreen.navigationOptions = {
  title: 'Partie',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15
  }
});
