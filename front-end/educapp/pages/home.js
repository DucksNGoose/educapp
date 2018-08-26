import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button} from 'react-native-elements';

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
        <Text style={{fontSize:19, alignSelf:'center'}}>Home</Text>
        <Button 
          onPress={this._onButtonVocTestPress} 
          title="Teste Vocacional"
          style={{padding:9}} 
          buttonStyle={{
            backgroundColor: "rgba(92, 99,216, 1)",
            width: 300,
            height: 40,                      
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5,
            alignSelf:'center'
          }}
        />
        <Button 
          onPress={this._onButtonCursosPress} 
          title="Cursos"
          style={{padding:9}} 
          buttonStyle={{
            backgroundColor: "rgba(92, 99,216, 1)",
            width: 300,
            height: 40,                      
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5,
            alignSelf:'center'
          }}
        />
        <Button 
          onPress={this._onButtonLivrosPress} 
          title="Livros e Pesquisa"
          style={{padding:9}} 
          buttonStyle={{
            backgroundColor: "rgba(92, 99,216, 1)",
            width: 300,
            height: 40,                      
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5,
            alignSelf:'center'
          }}
        />        
      </View>
    );
  }
}

const Viewstyles = StyleSheet.create({
  container: {
    padding:10,
    flex:1,    
    backgroundColor: '#fff',   
    flexDirection: 'column'
  },

  text:{  
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#005678'
  
  }
});