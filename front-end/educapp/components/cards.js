import {Card, Text, Button, Icon} from 'react-native-elements';
import React from 'react'

export  default class CustomCard extends React.Component{
    render(){
        return(
            <Card
                title='Engenharia da Computação'
                image={{uri:"https://www.acritica.com/uploads/opinion/image/5812/show_uninorte.JPG"}}>
                <Text style={{marginBottom: 10}}>
                    Se voce quiser um curso amplo que não tem nada para se aprofundar e vai te dar apenas conteúdo 
                    superficial sobre a área, esse é seu curso! Seu raso!
                </Text>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    backgroundColor='#03A9F4'
                    buttonStyle={{
                        borderRadius: 0, 
                        marginLeft: 0, 
                        marginRight: 0, 
                        marginBottom: 0
                    }}
                    title='Ver mais (não vê não)' />
            </Card>
        )
    }
}
