import React from 'react'
import {StyleSheet} from 'react-native'
import Heading from '../components/Heading'
import Input from '../components/Input'
import FilledButton from '../components/FilledButton'
import Error from '../components/Error'
import IconButton from '../components/IconButton'
import AuthContainer from '../components/AuthContainer'
import { AuthContext } from '../contexts/AuthContext'
import Loading from '../components/Loading'

const RegistrationScreen = ({navigation}) => { 

  const {auth: {register}} = React.useContext(AuthContext)
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')

  return (
    <AuthContainer>
      
      <Heading style={styles.title}>Inventory Management System</Heading>
      <IconButton style={styles.closeIcon} name={'close-circle-outline'} onPress={()=> {
        navigation.pop()
      }}/>
      <Error error={error} />
      <Input 
        style={styles.input} 
        placeholder="Name" 
        keyboardType="default"
        value={name}
        onChangeText={setName}  
      />
      <Input 
        style={styles.input} 
        placeholder="Email" 
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}  
      />
      <Input 
        style={styles.input} 
        placeholder="Password" 
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        />
      <FilledButton title={'Register'} style={styles.loginButton} onPress={ async () => {
        try {
          setLoading(true)
          await register(name, email, password)
          setLoading(false)
          navigation.pop()
        } catch (error) {
          setError(error.message)
          setLoading(false)
          console.log('error', error)
        }
      }} />
      <Loading loading={loading} />
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