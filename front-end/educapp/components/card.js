import React from 'react';
import {Image} from 'react-native'
import {Card, CardItem, Left, Right, Thumbnail, Body, Text, Icon, Button} from 'native-base';

export default class BaseCard extends React.Component{
    constructor(props){
        super(props);
        this.cardContent = props.cardContent
    }
    render(){
        return(
            <Card>
                <CardItem>
                    <Left>
                    <Thumbnail source={{uri: this.cardContent.user.image}} />
                    <Body>
                        <Text>{this.cardContent.user.name}</Text>
                        <Text note>{this.cardContent.user.ocupation}</Text>
                    </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                <Image source={{uri: this.cardContent.post.image}} style={{height: 200, width: 200, flex: 1}}/>                    
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent>
                            <Icon active name="thumbs-up" />
                            <Text>120</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Button transparent>
                            <Icon active name="chatbubbles" />
                            <Text>4</Text>
                        </Button>
                    </Body>
                    <Right>
                        <Text>11h ago</Text>
                    </Right>
                </CardItem>
            </Card>
        )
    }
}