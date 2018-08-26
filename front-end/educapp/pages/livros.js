import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button} from 'react-native-elements';
import {ViewStyles} from './../styles'

export default class Livros extends React.Component {
  static navigationOptions = {
    title: "EducApp - Learn U"
  }
  
  render() {
    return (
      <View style={ViewStyles.container}>
           <Text style={ViewStyles.pageTitle}>Livros</Text>         
           <Text style={ViewStyles.subTitle}>jumento</Text>
      </View>
    );
  }
}