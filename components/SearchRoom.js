import React from 'react';
import { Text, View, Image, StyleSheet, TextInput, FlatList, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';

class SearchRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      label: "",
      arrayRoom: room
    };
    this.allRoom = room;
  };

  itemOptions =  ({item}) => {
    return (<Text style={{borderBottomWidth:10}}>{item.label}</Text>)
  }

  updateSearch = search => {
    if (search === '') {
      this.setState({arrayRoom: this.allRoom, search: ""})
    } else {
      let resultRoom = this.allRoom.filter((item) => {
        let itemData = item.label ? item.label.toUpperCase() : ''.toUpperCase();
        let textData = search.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      this.setState({arrayRoom: resultRoom, search: search})
    }
  };

  render() {
    return (
      <View>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={this.state.search}
        />
        <ScrollView>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            style={styles.searchList}
            data={this.state.arrayRoom}
            renderItem={this.itemOptions}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  updateSearch: {
    flex: 1
  },
  searchList: {
    flex:5,
    backgroundColor: "lightgrey"
  }
})

const room = [
  {
    id: 1,
    label: "GDNord"
  },
  {
    id: 2,
    label: "GDLyon"
  },
  {
    id: 3,
    label: "GStLazare"
  },
  {
    id: 4,
    label: "GMontParnasse"
  },
  {
    id: 5,
    label: "GDAusterlitz"
  }
];

export default SearchRoom;
