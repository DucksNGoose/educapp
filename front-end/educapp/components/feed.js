import React from 'react'
import BaseCard from './card'
import { Container, Content } from 'native-base';


export default class DefaultFeed extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
          IdForbagWorlds: 1,
        };    
    }
    
    QueryEvents(){
    fetch('http://localhost:3001/feed/', { //FlaskApi
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        id: this.state.IdForbagWorlds,
        }),
    }).then((response) =>{ 
        response.json()
        }).catch((error) => {
            console.error(error);
        });
    }
    
    dataFeed = QueryEvents
    render(){
        return(
            <Content>
                {this.dataFeed.map((index, element) =>{
                    <BaseCard key={index} cardContent={{
                        user:{
                            name: element.user.name,
                            image: element.user.image,
                            ocupation: element.user.ocupation
                        },
                        post:{
                            image: element.post.image
                        }
                    }}></BaseCard>
                })}
            </Content>
        )
    }
}