import React, { useEffect, useState } from 'react'
import { Avatar, Card, IconButton, Text } from 'react-native-paper'
import apiChaves from '../services/apiChaves'
import { ScrollView, View } from 'react-native'
import Titulo from '../components/Titulo'

const Personagens = ({navigation}) => {

    const [personagens, setPersonagens] = useState([])

    useEffect(() => {
        apiChaves.get('/personagens').then(resultado => {
            setPersonagens(resultado.data)
        })
    }, [])

    return (
        <ScrollView style={{margin: 15}}>
            <Titulo descricao="Personagens do Chaves" />

            {personagens.map(item => (
                <Card
                    key={item.id}
                    mode="outlined"
                    style={{ marginBottom: 10 }}
                    onPress={() => navigation.push('detalhes', { id: item.id })}
                >
                    <Card.Title
                        title={item.nome}
                        subtitle={item.ator}
                        left={(props) => <Avatar.Image size={50} source={{ uri: item.urlImagem }} />}
                        right={(props) => <IconButton {...props} icon="chevron-right" />}
                    />
                </Card>
            ))}

        </ScrollView>
    )
}

export default Personagens