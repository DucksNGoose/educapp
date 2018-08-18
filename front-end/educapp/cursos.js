import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Curses extends React.Component {
  static navigationOptions = {
    title: "EducApp - Learn U"
  }
  
  render() {
    return (
      <View style={Viewstyles.container}>
        <Text style={textStyles.container}>EducApp - Um App Passatempo Educacional</Text>      
        <Text>Você nem sabe oq quer fazer da vida e ainda quer ver carga suplementar, você é um otário</Text>
      </View>
    );
  }
}

const textStyles = StyleSheet.create({
  container:{  
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#005678'
  
  },
});

const Viewstyles = StyleSheet.create({
  container: {
    flex:1,    
    backgroundColor: '#fff',
    alignItems: 'center',    
    flexDirection: 'column',    
    alignItems: 'center',
  },
});