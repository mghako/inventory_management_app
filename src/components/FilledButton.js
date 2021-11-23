import React from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native'

const FilledButton = ({title, style, onPress}) => {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Text style={styles.text}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#16537e',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 18,
        borderRadius: 6
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14
    }
})

export default FilledButton