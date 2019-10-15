import React from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
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
        <Draggable
          reverse={false}
          renderShape='image'
          offsetX={0}
          offsetY={0}
          imageSource={require('../assets/card/back.png')}
          renderSize={100}
        />
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
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  title: {
    flex:1,
    height:200
  },
});
