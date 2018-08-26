import React from 'react';
import { StyleSheet, View } from 'react-native';
import {CheckBox, Text, Button} from 'react-native-elements';

export default class Teste extends React.Component{
    constructor(props){
        super(props);
        this.state = {isChecked: [false,false,false,false]}
    }
    static navigationOptions = {
        title: "EducApp - Learn U"
      }
      
    _onButtonStartTestPress = () =>{
        this.props.navigation.navigate('Teste')
    }

    render() {
        return(
            <View style={Viewstyles.container}>
                <Text h3>Se você matar um cara, você:</Text>
                <CheckBox
                    style={{padding:10}}
                    title='Deixa na rua'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.isChecked[0]}
                    onPress={() => this.setState({
                        isChecked: [!this.state.isChecked[0],false,false,false]})}
                />
                <CheckBox
                    style={{padding:10}}
                    title='Joga no rio mais próximo'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.isChecked[1]}
                    onPress={() => this.setState({
                        isChecked: [false,!this.state.isChecked[1],false,false]
                    })}
                />
                <CheckBox
                    style={{padding:10}}
                    title='Mutila o corpo e serve para o Cachorro/Mendigo mais próximo'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.isChecked[2]}
                    onPress={() => this.setState({
                        isChecked: [false,false,!this.state.isChecked[2],false]
                    })}
                />
                <CheckBox
                    style={{padding:10}}
                    title='Cortar em pedaços e congelar em casa para a próxima feijoada'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.isChecked[3]}
                    onPress={() => this.setState({
                        isChecked: [false,false,false,!this.state.isChecked[3]]})
                    }
                />
                <Button title = "Próximo"
                    onPress={this._onButtonStartTestPress} 
                    buttonStyle={{
                      backgroundColor: "rgba(92, 99,216, 1)",
                      width: 300,
                      height: 45,                      
                      borderColor: "transparent",
                      borderWidth: 0,
                      borderRadius: 5,
                      padding: 10,
                      alignSelf:'center'                      
                    }}
                />
                    

            </View>
        )
    }
}

const Viewstyles = StyleSheet.create({
    container: {
      flex:1,    
      backgroundColor: '#fff',    
      flexDirection: 'column',
      padding:10    
    },
  
    text:{  
      marginBottom: 20,
      fontWeight: 'bold',
      color: '#005678'
    
    }
  });