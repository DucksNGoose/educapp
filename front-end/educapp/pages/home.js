import React from 'react';
import {Container, Content} from 'native-base';
import FixedFooter from './../components/footer';
import DefaultFeed from './../components/feed'

export default class Home extends React.Component {
  constructor(props){    
    super(props);        
  }

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

  footer = {obj: [
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
  ]}

  render() {
    return (
      <Container>
        <Content>
          <DefaultFeed dataFeed={{
            user:{
                name: 'Henrique Alves',
                image: 
                'https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.0-9/15170876_1095317807248414_2191708399766728705_n.jpg?_nc_cat=0&oh=4377495847f9cb337659cc4311bbb428&oe=5C32082D',
                ocupation:"Open Source Activist" 
            },
            post:{
                image:'https://antivigilancia.org/wordpress/wp-content/uploads/2016/02/cryptorave-1024x512.png'
            }
          }}></DefaultFeed>
        </Content>
        <FixedFooter 
          buttonProps={this.footer}
      />
      </Container>
    );
  }
}