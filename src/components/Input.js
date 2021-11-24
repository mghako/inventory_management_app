import React from 'react'
import {StyleSheet, TextInput} from 'react-native'

const Input = ({style, ...props}) => {
    return (
        <TextInput {...props} style={[styles.input, style]} />
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        backgroundColor: '#e8e8e8',
        padding: 16,
        borderRadius: 10,
        color: '#000'
    }
})

export default Input