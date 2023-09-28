import React, { useEffect, useState } from 'react'
import { Card, Divider, Text } from 'react-native-paper'
import apiChaves from '../services/apiChaves'
import { ScrollView, View } from 'react-native'
import Titulo from '../components/Titulo'

const Detalhes = ({ navigation, route }) => {

    const [personagem, setPersonagem] = useState({})
    const [frases, setFrases] = useState([])

    useEffect(() => {
        const id = route.params.id
        apiChaves.get(`/personagens/${id}`).then(resultado => {
            setPersonagem(resultado.data)
        })

        apiChaves.get(`/bordoes?personagem_id=${id}`).then(resultado => {
            setFrases(resultado.data)
        })
    }, [])

    return (
        <ScrollView style={{margin: 15}}>

            <Titulo descricao={personagem.nome} />
            <Card mode="outlined" style={{ marginBottom: 15 }}>
                <Card.Cover style={{ height: 400 }} source={{ uri: personagem.urlImagem }} />
                <Card.Content>
                    <Text variant="titleLarge">{personagem.nome}</Text>
                    <Text variant="bodyMedium">{personagem.biografia}</Text>
                </Card.Content>
            </Card>

            <Titulo descricao={personagem.nome + ' criança'} />
            <Card mode="outlined" style={{ marginBottom: 15 }}>
                <Card.Cover style={{ height: 400 }} source={{ uri: personagem.urlImagemCrianca }} />
                <Card.Content>
                    <Text variant="bodyMedium">Idade: {personagem.idade}</Text>
                    <Text variant="bodyMedium">Sexo: {personagem.sexo}</Text>
                    <Text variant="bodyMedium">Endereço: {personagem.endereco}</Text>
                </Card.Content>
            </Card>

            <Titulo descricao="Frases" />
            <Card mode="outlined" >
                <Card.Content>
                    {frases.map(item => (
                        <View key={item.id}>
                            <Text style={{padding: 15}}>{item.bordao}</Text>
                            <Divider />
                        </View>
                    ))}
                </Card.Content>
            </Card>
        </ScrollView>
    )
}

export default Detalhes