import React from 'react';
import {Container, Content} from 'native-base';
import FixedFooter from './../components/footer';
import BaseCard from './../components/card';

export default class Home extends React.Component {
  static navigationOptions = {
    title: "Learn U"
  }

  _onButtonVocTestPress = () => {
      this.props.navigation.navigate('VocationalTest')
  }
  _onButtonCursosPress = () => {
    this.props.navigation.navigate('Curses')
  }

  _onButtonLivrosPress = () =>{
    this.props.navigation.navigate('Livros')
  } 

  render() {
    return (
      <Container>
        <Content>
          <BaseCard></BaseCard>
          <BaseCard></BaseCard>
          <BaseCard></BaseCard>
          <BaseCard></BaseCard>
          <BaseCard></BaseCard>
          <BaseCard></BaseCard>
          <BaseCard></BaseCard>
        </Content>
        <FixedFooter 
          buttonProps={{
            obj:[
              {
                icon:"film", 
                name:"Referencia", 
                func: this._onButtonCursosPress
              },
              {
                icon:"flask", 
                name:"Teste", 
                func: this._onButtonVocTestPress
              },
              {
                icon:"person", 
                name:"Perfil", 
                func: this._onButtonLivrosPress
              }
            ]
          }}
      />
      </Container>


      // <View style={ViewStyles.container}>
      //   <Text style={ViewStyles.pageTitle}>Home</Text>
      //   <Button 
      //     onPress={this._onButtonVocTestPress} 
      //     title="Teste Vocacional"
      //     style={{padding:2}} 
      //     buttonStyle={ViewStyles.button}
      //   />
      //   <Button 
      //     onPress={this._onButtonCursosPress} 
      //     title="Cursos"
      //     style={{padding:2}} 
      //     buttonStyle={ViewStyles.button}
      //   />
      //   <Button 
      //     onPress={this._onButtonLivrosPress} 
      //     title="Livros e Pesquisa"
      //     style={{padding:2}} 
      //     buttonStyle={ViewStyles.button}
      //   />        
      // </View>
    );
  }
}