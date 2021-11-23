import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStackNavigator from './navigators/AuthStackNavigator'
import { lightTheme } from './themes/light';
import { AuthContext } from './contexts/AuthContext'

const RootStack = createNativeStackNavigator();

const App = () => {
  const auth = React.useMemo( ()=> ({
    login: async () => {
      console.log("login")
    },
    logout: async () => {
      console.log("logout")
    },
    register: async () => {
      console.log("register")
    }
  }), [])
  return (
    <AuthContext.Provider value={auth}>
      <NavigationContainer theme={lightTheme}>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <RootStack.Screen name={"AuthStack"} component={AuthStackNavigator} />

        </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  )
}


export default App