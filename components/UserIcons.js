import React from 'react';
import { Text, View, Image } from 'react-native';
import { CustomPicker } from 'react-native-custom-picker';

export function UserIcons(props) {
  const pic = [
    {
      item: 'donkey',
      uri: require('../assets/images/user-icons/donkey.png')
    },
    {
      item: 'luigi',
      uri: require('../assets/images/user-icons/luigi.png')
    },
    {
      item: 'mario',
      uri: require('../assets/images/user-icons/mario.png')
    },
    {
      item: 'peach',
      uri: require('../assets/images/user-icons/peach.png')
    },
    {
      item: 'toad',
      uri: require('../assets/images/user-icons/toad.png')
    },
    {
      item: 'wario',
      uri: require('../assets/images/user-icons/wario.png')
    },
    {
      item: 'yoshi',
      uri: require('../assets/images/user-icons/yoshi.png')
    }
  ];

  renderOption = (settings) => {
    const { item, getLabel } = settings
    return (
      <View style={{flex:1}}>
        <Image
          source={item.uri}
          style={{width: 50, height: 50, resizeMode: 'contain'}}
        />
      </View>
    )
  }

  return (
    <View>
      <CustomPicker
        options={pic}
        getLabel={item => item.item}
        optionTemplate={this.renderOption}
        onValueChange={(item) => {this.selectedItem(item)}}
        style={{width:150, height:50}}
      />
    </View>
  );
}
