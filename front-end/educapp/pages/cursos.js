import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Divider} from 'react-native-elements';
import {ViewStyles} from './../styles'
import CustomCard from './../components/cards'

export default class Curses extends React.Component {
  constructor(props){
    super(props);
    this.state = {showText: true, fontSize: 20}

    setInterval(() => {
      this.setState(previousState => {
        return { 
          showText: !previousState.showText          
        };
      });
    }, 300);
  }
  static navigationOptions = {
    title: "Cursos"
  }
  
  render() {
    let display = this.state.showText ? 'Faculdade é dispensável!' : 'Faculdade é superficial';
    return (
      <View style={ViewStyles.container}>    
        <Text style={{fontSize:this.state.fontSize, alignSelf:'center', fontWeight:'bold'}}>
          {display}
        </Text>
        <CustomCard></CustomCard>
      </View>
    );
  }
}