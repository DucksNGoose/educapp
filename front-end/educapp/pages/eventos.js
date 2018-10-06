import React from 'react';
import {
  Container, 
  Content, 
  Accordion
} from 'native-base';

export default class Eventos extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  
    navigator.geolocation.getCurrentPosition((position) => {
      this.state.latitude = position.coords.latitude
      this.state.longitude = position.coords.longitude
    }, (error) => this.state = error);
  }

  QueryEvents(){
    fetch('http://localhost:3000/events/', { //TODO: TIRAR ESSE LOCALHOST SAFADO E COLOCAR EM UM ENV ACEITÁVEL
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        latitude: this.state.latitude,
        longitude: this.state.longitude,
      }),
    }).then((response) =>{ 
        response.json()
      }).catch((error) => {
          console.error(error);
        });
  }
  
  dataArray = QueryEvents();

  static navigationOptions = {
    title: "Eventos"
  }  
  render() {    
    
    return (      
      <Container>
      <Content padder>
        <Accordion dataArray={dataArray} expanded={0}/>
      </Content>
    </Container>
    );
  }
}