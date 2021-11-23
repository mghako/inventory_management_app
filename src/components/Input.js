import React from 'react'
import {StyleSheet, TextInput} from 'react-native'

const Input = ({style, ...props}) => {
    return (
        <TextInput {...props} style={[style, styles.input ]} />
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        backgroundColor: '#e8e8e8',
        padding: 16,
        borderRadius: 10
    }
})

export default Input