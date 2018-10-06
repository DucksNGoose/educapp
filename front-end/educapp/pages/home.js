import React from 'react';
import {Container, Content} from 'native-base';
import FixedFooter from './../components/footer';
import DefaultFeed from './../components/feed'

export default class Home extends React.Component {
  constructor(props){    
    super(props);        
  }

  static navigationOptions = {
    title: "Socratic"
  }

  _onButtonVocTestPress = () => {
      this.props.navigation.navigate('Teste')
  }
  _onButtonCursosPress = () => {
    this.props.navigation.navigate('Eventos')
  }

  footer = {obj: [
    {
      icon:"md-calendar", 
      badge:"3",
      name:"Eventos", 
      func: this._onButtonCursosPress
    },
    {
      icon:"flask",
      badge:"1", 
      name:"Teste", 
      func: this._onButtonVocTestPress
    },
    {
      icon:"person", 
      badge:"1",
      name:"Perfil", 
      func: this._onButtonCursosPress
    }
  ]}

  render() {
    return (
      <Container>
        <Content>
          <DefaultFeed></DefaultFeed>
        </Content>
        <FixedFooter 
          buttonProps={this.footer}
      />
      </Container>
    );
  }
}