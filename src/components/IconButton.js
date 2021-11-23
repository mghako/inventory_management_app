import React from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-ionicons'

const IconButton = ({name, style, onPress}) => {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Icon name={name} color={"#16537e"}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {},
})

export default IconButton