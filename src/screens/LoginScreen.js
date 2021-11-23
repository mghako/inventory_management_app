import React from 'react'
import {StyleSheet} from 'react-native'
import Heading from '../components/Heading'
import Input from '../components/Input'
import FilledButton from '../components/FilledButton'
import TextButton from '../components/TextButton'
import Error from '../components/Error'
import AuthContainer from '../components/AuthContainer'

const LoginScreen = ({navigation}) => {
  
  return (
    <AuthContainer>
      <Heading style={styles.title}>Inventory Management System</Heading>
      <Error error={''} />
      <Input style={styles.input} placeholder="Email" keyboardType="email-address" />
      <Input style={styles.input} placeholder="Password" secureTextEntry />
      <FilledButton title={'Login'} style={styles.loginButton} onPress={() => {
        
      }} />
      <TextButton title={'No Account Yet? Register Now'} onPress={() => {
        navigation.navigate('RegistrationScreen')
      }}/>
    </AuthContainer>
  )
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 26
  },
  input: {
    marginVertical: 10,
  },
  loginButton: {
    marginVertical: 26
  }
}) 

export default LoginScreen