import {Card, Text, Button, Icon} from 'react-native-elements';
import {Linking} from 'react-native'
import React from 'react'

export  default class CustomCard extends React.Component{
    render(){
        return(
            <Card
                title='Engenharia da Computação'
                image={{uri:"https://www.acritica.com/uploads/opinion/image/5812/show_uninorte.JPG"}}>
                <Text style={{marginBottom: 10}}>
                    Um curso gigantesco que não vai te aprofundar em nada e vai te dar apenas conteúdo 
                    introdutório sobre a área e sem nenhum peso se você tiver só ele como fonte de conhecimento, 
                    fazendo de você uma pessoa mediocre!
                </Text>
                <Text style={{fontWeight:'bold', alignSelf:'center', fontSize:15}}>Você não precisa fazer se não quiser</Text>
                <Button
                    onPress={() => Linking.openURL("https://www.fiap.com.br/graduacao/bacharelado/engenharia-de-computacao/")}
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
