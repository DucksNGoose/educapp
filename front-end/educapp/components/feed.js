import React from 'react'
import BaseCard from './card'
import { Container } from 'native-base';


export default class DefaultFeed extends React.Component{
    constructor(props){
        super(props);
        this.dataFeed = props.dataFeed
    }
    
    render(){
        return(
            <Container>
                <BaseCard cardContent={this.dataFeed}></BaseCard>
                <BaseCard cardContent={this.dataFeed}></BaseCard>
            </Container>
        )
    }
}