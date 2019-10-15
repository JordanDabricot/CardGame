import React from 'react';
import {StyleSheet, Text, View, Modal, Button, TextInput, Picker, ImageBackground} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

class CreateGameModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      valueInput: "",
      nbPlayer: "1",
      nameError: ""
    };
  };

  closeModal = () => {
    this.setState({modalVisible: false});
  }

  openModal = () => {
    this.setState({modalVisible: true})
  }

  handleValueInput = (value) => {
    this.setState({valueInput: value})
  }

  changeValuePicker = (item) => {
    this.setState({nbPlayer: item})
  }

  checkValueInput = () => {
    if (this.state.valueInput === "") {
      this.setState({nameError: "Le champs est requis"})
    } else {
      this.setState({nameError: ""})
    }
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={this.closeModal}>
          <View style={styles.viewTitleModal}>
            <Text>Créer une partie</Text>
          </View>
          <ImageBackground source={require('../assets/images/background-image/home-header.jpg')} style={styles.title}>
          </ImageBackground>
          <View style={styles.viewinputModal}>
            <TextInput
              placeholder="Entrer le nom de votre room"
              onChangeText={this.handleValueInput}
              style={{marginTop:150,  borderColor: 'black',borderWidth: 1,borderRadius:10,height:50}}
            />
            {!!this.state.nameError && (
              <Text style={{ color: "red" }}>{this.state.nameError}</Text>
            )}
          </View>
          <View style={styles.chooseNbPlayer}>
            <Text>Nombre de joueur</Text>
            <Picker
              selectedValue={this.state.nbPlayer}
              style={{height: 50, width: 100}}
              onValueChange={this.changeValuePicker}
            >
            {players.map((item, index) => {
              return <Picker.Item key={index} label={item} value={item} />
            })}
          </Picker>
          </View>
          <View style={styles.buttonOption}>
            <Button
              title="Créer"
              onPress={() => {
                this.checkValueInput();
                if (this.state.valueInput !== "") {
                  this.closeModal();
                  navigate('Game', {nbPlayer: this.state.nbPlayer});
                }
              }}
            />
            <Button
              style={styles.cancelButton}
              title="Annuler"
              onPress={this.closeModal}
            />
          </View>
        </Modal>
        <Button
          title="Créer une partie"
          onPress={this.openModal}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewTitleModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    marginTop: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 3
  },
  title: {
    flex:1,
    height:200,
  },
  viewinputModal: {
    flex:4
  },
  buttonOption: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginBottom:30
  },
  cancelButton: {
    backgroundColor: "red",
  },
  chooseNbPlayer: {
    flex: 1,
    marginBottom:200,
    marginLeft:100
  }
})

const players = ["1", "2", "3", "4", "5"];

export default CreateGameModal;
