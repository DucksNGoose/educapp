import React from 'react';
import { View } from 'react-native';
import { Text, Button} from 'react-native-elements';
import {ViewStyles} from './../styles'
import Buttons from './../node_modules/react-native-elements/example/src/views/buttons_home'

export default class Home extends React.Component {
  static navigationOptions = {
    title: "EducApp - Learn U"
  }

  _onButtonVocTestPress = () => {
      this.props.navigation.navigate('VocationalTest')
  }
  _onButtonCursosPress = () => {
    this.props.navigation.navigate('Curses')
  }

  _onButtonLivrosPress = () =>{
    this.props.navigation.navigate('Livros')
  } 
  render() {
    return (
      <View style={ViewStyles.container}>
        <Text style={ViewStyles.pageTitle}>Home</Text>
        <Button 
          // color="#96ebff"
          onPress={this._onButtonVocTestPress} 
          title="Teste Vocacional"
          style={{padding:2}} 
          buttonStyle={ViewStyles.button}
        />
        <Button
          // color="#96ebff" 
          onPress={this._onButtonCursosPress} 
          title="Cursos"
          style={{padding:2}} 
          buttonStyle={ViewStyles.button}
        />
        <Button
          // color="#96ebff" 
          onPress={this._onButtonLivrosPress} 
          title="Livros e Pesquisa"
          style={{padding:2}} 
          buttonStyle={ViewStyles.button}
        />        
      </View>
    );
  }
}