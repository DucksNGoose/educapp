import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Divider} from 'react-native-elements';
import CustomCard from './../components/cards'

export default class Curses extends React.Component {
  static navigationOptions = {
    title: "EducApp - Learn U"
  }
  
  render() {
    return (
      <View style={Viewstyles.container}>
        <Text style={{fontSize:19, alignSelf:'center'}}>Cursos</Text>    
        <Divider style={{height:5, backgroundColor:'blue'}}></Divider>
        <Text style={{fontSize:10, alignSelf:'flex-start', fontWeight:'bold'}}>
          Você nem sabe oq quer fazer da vida e ainda quer ver carga suplementar?
        </Text>
        <Text style={{fontSize:20, alignSelf:'center', fontWeight:'bold'}}>
          Você é um otário!
        </Text>
        <Divider style={{height:5, backgroundColor:'blue'}}></Divider>
        <CustomCard></CustomCard>
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