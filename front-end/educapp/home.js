import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

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
      <View style={Viewstyles.container}>
        <Text style={Viewstyles.text}>EducApp - Um App Passatempo Educacional</Text>
        <Button onPress={this._onButtonVocTestPress} title="Teste Vocacional"/>
        <Button onPress={this._onButtonCursosPress} title="Cursos"/>
        <Button onPress={this._onButtonLivrosPress} title="Livros e Pesquisa"/>        
      </View>
    );
  }
}

const Viewstyles = StyleSheet.create({
  container: {
    flex:1,    
    backgroundColor: '#fff',
    alignItems: 'center',    
    flexDirection: 'column',    
    alignItems: 'center',
  },

  text:{  
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#005678'
  
  }
});