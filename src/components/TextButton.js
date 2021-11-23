import React from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native'

const TextButton = ({title, style, onPress}) => {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Text style={styles.text}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 18,
        borderRadius: 6
    },
    text: {
        color: '#f26627',
        fontWeight: 'bold',
        fontSize: 14
    }
})

export default TextButton