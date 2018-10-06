import React from 'react'
import {Footer, FooterTab, Button, Icon, Text, Badge} from 'native-base'

export default class FixedFooter extends React.Component {
    constructor(props){
        super(props);
        console.log(props)
        this.buttonProps = props.buttonProps.obj
    }
    render(){
        return( 
        <Footer>
            <FooterTab>            
                {this.buttonProps.map(
                    (element, index) =>
                        <Button badge vertical key={index} vertical={true} onPress={element.func}>
                            <Badge><Text>{element.badge}</Text></Badge>                            
                            <Icon name={element.icon}/>
                            <Text>{element.name}</Text>
                        </Button>
                )}                
            </FooterTab>
        </Footer>
        )
    }
}