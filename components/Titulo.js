import React from 'react'
import { Text } from 'react-native-paper'

const Titulo = (props) => {
    return (
        <>
            <Text variant="titleLarge" style={{ color: 'red', textAlign: 'center', marginBottom: 15 }}>
                {props.descricao}
            </Text>
        </>
    )
}

export default Titulo