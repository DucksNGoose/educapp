import React from 'react';
import { View } from 'react-native';
import {CheckBox, Text, Button} from 'react-native-elements';
import {ViewStyles} from './../styles'

export default class Teste extends React.Component{
    constructor(props){
        super(props);
        this.state = {isChecked: [false,false,false,false]}
    }
    static navigationOptions = {
        title: "EducApp - Learn U"
      }
      
    _onButtonStartTestPress = () =>{
        this.props.navigation.push('Teste')
    }

    render() {
        return(
            <View style={ViewStyles.container}>
                <Text h3>Se você matar um cara, você:</Text>
                <CheckBox
                    style={ViewStyles.checkBox}
                    title='Deixa na rua'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.isChecked[0]}
                    onPress={() => this.setState({
                        isChecked: [!this.state.isChecked[0],false,false,false]})}
                />
                <CheckBox
                    style={ViewStyles.checkBox}
                    title='Joga no rio mais próximo'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.isChecked[1]}
                    onPress={() => this.setState({
                        isChecked: [false,!this.state.isChecked[1],false,false]
                    })}
                />
                <CheckBox
                    style={ViewStyles.checkBox}
                    title='Mutila o corpo e serve para o Cachorro/Mendigo mais próximo'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.isChecked[2]}
                    onPress={() => this.setState({
                        isChecked: [false,false,!this.state.isChecked[2],false]
                    })}
                />
                <CheckBox
                    style={ViewStyles.checkBox}
                    title='Cortar em pedaços e congelar em casa para a próxima feijoada'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.isChecked[3]}
                    onPress={() => this.setState({
                        isChecked: [false,false,false,!this.state.isChecked[3]]})
                    }
                />
                <Button title = "Próximo"
                    onPress={() => this.props.navigation.push('Teste')} 
                    buttonStyle={ViewStyles.button}
                />
            </View>
        )
    }
}