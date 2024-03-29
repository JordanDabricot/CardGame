import React from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';
import { CustomPicker } from 'react-native-custom-picker';

class UserIcons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uriCharat: require('../assets/images/user-icons/donkey.png')
    };

    this.pic = [
      {
        item: 'Donkey',
        uri: require('../assets/images/user-icons/donkey.png')
      },
      {
        item: 'Luigi',
        uri: require('../assets/images/user-icons/luigi.png')
      },
      {
        item: 'Mario',
        uri: require('../assets/images/user-icons/mario.png')
      },
      {
        item: 'Peach',
        uri: require('../assets/images/user-icons/peach.png')
      },
      {
        item: 'Toad',
        uri: require('../assets/images/user-icons/toad.png')
      },
      {
        item: 'Wario',
        uri: require('../assets/images/user-icons/wario.png')
      },
      {
        item: 'Yoshi',
        uri: require('../assets/images/user-icons/yoshi.png')
      }
    ];
  }



  renderOption = (settings) => {
    const { item, getLabel } = settings
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image
          source={item.uri}
          style={{width: 50, height: 50, resizeMode: 'contain'}}
        />
        <Text style={{marginTop:20}}>
        {item.item}

        </Text>
      </View>
    )
  }

  defaultItem = () => {
    return (
      <View style={{flex:1}}>
        <Image
          source={this.state.uriCharat}
          style={{width: 30, height: 30, resizeMode: 'contain'}}
        />
      </View>
    )
  };

  renderField = (settings) => {
    const { selectedItem, defaultText, getLabel, clear } = settings
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.innerContainer}>
            <Image
              source={this.state.uriCharat}
              style={{width: 30, height: 30}}
            />
          </View>
        </View>
      </View>
    )
  }

  selectedItem = (item) => {
    let selected = item;
    this.setState({uriCharat: selected.uri})
  }

  render() {
    return (
      <View>
        <CustomPicker
          options={this.pic}
          getLabel={item => item.item}
          fieldTemplate={this.renderField}
          optionTemplate={this.renderOption}
          onValueChange={(item) => {this.selectedItem(item)}}
          modalStyle = {{width:100, marginTop:200}}
          value={this.state.uriCharat}
          style={{width:20, height:20, marginRight:20,borderColor:'#ffff',borderRadius:100}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
container: {
  flex:1
},
innerContainer: {
  flexDirection: 'row',
  alignItems: 'stretch'
},
text: {
  fontSize: 18
},
headerFooterContainer: {
  padding: 10,
  alignItems: 'center'
},
clearButton: { backgroundColor: 'grey', borderRadius: 5, marginRight: 10, padding: 5 },
optionContainer: {
  padding: 10,
  borderBottomColor: 'grey',
  borderBottomWidth: 1
},
optionInnerContainer: {
  flex: 1,
  flexDirection: 'row'
},
box: {
  width: 20,
  height: 20,
  marginRight: 10
}
})

export default UserIcons;
