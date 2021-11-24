import React from 'react'
import {View, StyleSheet, ActivityIndicator, Text} from 'react-native'

const Loading = ({loading}) => {
    
    if(! loading) return <View />
    
    return (
        <View style={styles.overlay}>
            <View style={styles.container}>
                <ActivityIndicator />
                <Text style={styles.text}>Loading...</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFill,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        alignItems: 'center',
        justifyContent: 'center'

    },
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        padding: 18,
        borderRadius: 7
    },
    text: {
        marginLeft: 7,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#16537e'
    }
  }) 

export default Loading