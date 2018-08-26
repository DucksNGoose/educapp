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
          showText: !previousState.showText, 
          fontSize: previousState.fontSize <= 47? previousState.fontSize+1 : 20 
        };
      });
    }, 100);
  }
  static navigationOptions = {
    title: "Cursos"
  }
  
  render() {
    let display = this.state.showText ? 'Você é um otário!' : ' ';
    return (
      <View style={ViewStyles.container}>    
        <Text style={ViewStyles.subTitle}>
          Você nem sabe oq quer fazer da vida e ainda quer ver carga suplementar?
        </Text>
        <Text style={{fontSize:this.state.fontSize, alignSelf:'center', fontWeight:'bold'}}>
          {display}
        </Text>
        <CustomCard></CustomCard>
      </View>
    );
  }
}