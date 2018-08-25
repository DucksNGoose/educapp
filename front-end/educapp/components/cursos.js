import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button} from 'react-native-elements';

export default class Curses extends React.Component {
  static navigationOptions = {
    title: "EducApp - Learn U"
  }
  
  render() {
    return (
      <View style={Viewstyles.container}>
        <Text style={{fontSize:19, alignSelf:'center'}}>Cursos</Text>    
        <Text style={{fontSize:15, alignSelf:'flex-start'}}>Você nem sabe oq quer fazer da vida e ainda quer ver carga suplementar, você é um otário</Text>
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