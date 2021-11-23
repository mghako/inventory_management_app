import React from 'react'
import {View, StyleSheet} from 'react-native'
import Heading from '../components/Heading'
import Input from '../components/Input'
import FilledButton from '../components/FilledButton'
import Error from '../components/Error'
import IconButton from '../components/IconButton'
import AuthContainer from '../components/AuthContainer'

const RegistrationScreen = ({navigation}) => {  
  return (
    <AuthContainer>
      <Heading style={styles.title}>Inventory Management System</Heading>
      <IconButton style={styles.closeIcon} name={'close-circle-outline'} onPress={()=> {
        navigation.pop()
      }}/>
      <Error error={''} />
      <Input style={styles.input} placeholder="Email" keyboardType="email-address" />
      <Input style={styles.input} placeholder="Password" secureTextEntry />
      <FilledButton title={'Register'} style={styles.loginButton} onPress={() => {}} />
    </AuthContainer>
  )
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 36
  },
  input: {
    marginVertical: 8,
  },
  loginButton: {
    marginVertical: 26
  },
  closeIcon: {
    position: 'absolute',
    top: 30,
    right: 15
  }
}) 

export default RegistrationScreen