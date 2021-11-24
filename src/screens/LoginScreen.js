import React from 'react'
import {StyleSheet} from 'react-native'
import Heading from '../components/Heading'
import Input from '../components/Input'
import FilledButton from '../components/FilledButton'
import TextButton from '../components/TextButton'
import Error from '../components/Error'
import AuthContainer from '../components/AuthContainer'
import { AuthContext } from '../contexts/AuthContext'
import Loading from '../components/Loading'

const LoginScreen = ({navigation}) => {

  const {login} =  React.useContext(AuthContext)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const device_name = "mobile_app"
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')

  return (
    <AuthContainer>
      <Heading style={styles.title}>Inventory Management System</Heading>
      <Error error={error} />
      <Input style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <Input style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <FilledButton title={'Login'} style={styles.loginButton} onPress={ async () => {
        try {
          setLoading(true)
          await login(email, password, device_name)
          setLoading(false)
        } catch (error) {
          setError(error.message)
          setLoading(false)
          console.log('error', error)
        }
      }} />
      <TextButton title={'No Account Yet? Register Now'} onPress={() => {
        navigation.navigate('RegistrationScreen')
      }}/>
      <Loading loading={loading} />
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