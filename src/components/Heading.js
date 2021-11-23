import React from 'react'
import {StyleSheet, Text} from 'react-native'

const Heading = ({children, style, props}) => {
    return <Text {...props} style={[styles.text, style]}>{children}</Text>
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000'

    }
})

export default  Heading