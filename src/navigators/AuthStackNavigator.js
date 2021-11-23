import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';

const AuthStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      mode={'modal'}
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name={'LoginStack'}>
        {() => (
          <LoginStack.Navigator
            mode={'card'}
            screenOptions={{
              headerShown: false,
            }}>
            <LoginStack.Screen name={'Login'} component={LoginScreen} />
          </LoginStack.Navigator>
        )}
      </AuthStack.Screen>
      <AuthStack.Screen name={'RegistrationScreen'} component={RegistrationScreen} />
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigator