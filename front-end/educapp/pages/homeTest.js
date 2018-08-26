import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, CheckBox, Divider} from 'react-native-elements';
import {ViewStyles} from './../styles'
export default class VocationalTest extends React.Component {
  static navigationOptions = {
    title: "Teste Vocacional"
  }
  
  _onButtonStartTestPress = () =>{
    this.props.navigation.navigate('Teste')
  } 
  render() {
    return (
      <View style={ViewStyles.container}>
        <Text style={ViewStyles.subTitle}>Teste vocacional pra vc que não sabe oq fazer, seu imaturo</Text>
        {/* <Button onPress={()=>{}} title="Começar Teste"/> */}
        <Button 
          title="Começar teste" 
          onPress={this._onButtonStartTestPress} 
          buttonStyle={ViewStyles.button}
        />
      </View>
    );
  }
}