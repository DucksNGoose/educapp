import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class VocationalTest extends React.Component {
  static navigationOptions = {
    title: "EducApp - Learn U"
  }

  render() {
    return (
      <View style={Viewstyles.container}>
        <Text style={textStyles.container}>EducApp - Um App Passatempo Educacional</Text>      
        <Text>Teste vocacional pra vc que não sabe oq fazer, seu imaturo</Text>
        <Button onPress={()=>{}} title="Começar Teste"/>
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