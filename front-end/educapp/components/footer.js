import React from 'react'
import {Footer, FooterTab, Button, Icon, Text} from 'native-base'

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
                        <Button key={index} vertical={true} onPress={element.func}>
                            <Icon name={element.icon}/>
                            <Text>{element.name}</Text>
                        </Button>
                )}                
            </FooterTab>
        </Footer>
        )
    }
}