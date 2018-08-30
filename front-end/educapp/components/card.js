import React from 'react';
import {Image} from 'react-native'
import {Card, CardItem, Left, Right, Thumbnail, Body, Text, Icon, Button} from 'native-base';

export default class BaseCard extends React.Component{
    render(){
        return(
            <Card>
                <CardItem>
                    <Left>
                    <Thumbnail source={{uri: 'https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.0-9/15170876_1095317807248414_2191708399766728705_n.jpg?_nc_cat=0&oh=4377495847f9cb337659cc4311bbb428&oe=5C32082D'}} />
                    <Body>
                        <Text>Henrique Alves</Text>
                        <Text note>Open Source Activist</Text>
                    </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={{uri: 'https://antivigilancia.org/wordpress/wp-content/uploads/2016/02/cryptorave-1024x512.png'}} style={{height: 200, width: 200, flex: 1}}/>                    
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