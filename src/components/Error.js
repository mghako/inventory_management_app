import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const Error = ({error}) => {
    return (
       <View style={styles.container}>
           <Text style={styles.text}>{error}</Text>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10
    },
    text: {
        color: '#FF0000',
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default Error