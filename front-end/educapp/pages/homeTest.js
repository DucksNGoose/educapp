import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, CheckBox, Divider} from 'react-native-elements';

export default class VocationalTest extends React.Component {
  static navigationOptions = {
    title: "EducApp - Learn U"
  }
  
  _onButtonStartTestPress = () =>{
    this.props.navigation.navigate('Teste')
  } 
  render() {
    return (
      <View style={Viewstyles.container}>
        <Text style={textStyles.container}>EducApp - Um App Passatempo Educacional</Text>
        <Divider style={{ backgroundColor: 'blue' }} />      
        <Text>Teste vocacional pra vc que não sabe oq fazer, seu imaturo</Text>
        {/* <Button onPress={()=>{}} title="Começar Teste"/> */}
        <Button 
          title="Começar teste" 
          onPress={this._onButtonStartTestPress} 
          buttonStyle={{
            backgroundColor: "rgba(92, 99,216, 1)",
            width: 300,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5
          }}
        />
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