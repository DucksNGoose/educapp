//TODO: LEMBRAR DE TIRAR OS LOCALHOST DA VIDA E COLOCAR EM UM ENV 

import React from 'react';
import { View } from 'react-native';
import {CheckBox, Text, Button} from 'react-native-elements';
import {ViewStyles} from './../bundle/styles'

export default class Teste extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
          lastAwnser: this.props.awnser,
          quests: this.QueryQuests()
        };        
      }
    
    QueryQuests(){
        fetch('http://localhost:3002/quests/', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            lastAwnser: this.state.lastAwnser
            }),
        }).then((response) =>{ 
            response.json()
            }).catch((error) => {
                console.error(error);
            });
    }    
    
    static navigationOptions = {
        title: "Teste"
      }
      
    _onButtonStartTestPress = () =>{
        this.props.navigation.push('Teste')
    }

    render() {
        return(
            <View style={ViewStyles.container}>
                <Text h3>{this.state.quests.title}</Text>
                {this.state.quests.questions.map((index, element) => {
                    <CheckBox key={index}
                        checkedColor={element.color}
                        title={element.title}
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={element.checked}
                        onPress={() => {element.checked = false}}
                    ></CheckBox>
                })}                
            </View>
        )
    }
}