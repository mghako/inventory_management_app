import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStackNavigator from './navigators/AuthStackNavigator'
import MainStackNavigator from './navigators/MainStackNavigator'
import { lightTheme } from './themes/light';
import { AuthContext } from './contexts/AuthContext'
import { UserContext } from './contexts/UserContext';
import { useAuth } from './hooks/useAuth';
import SplashScreen from './screens/SplashScreen';

const RootStack = createNativeStackNavigator();

const App = () => {

  const {auth, state} = useAuth()

  function renderScreens() {
    if(state.loading) {
      return <RootStack.Screen name={"Splash"} component={SplashScreen} />
    }
    return state.user ? (
              
      <RootStack.Screen name={"MainStack"}>
    { 
      () => (
        <UserContext.Provider value={state.user}>
          <MainStackNavigator />
        </UserContext.Provider>
      )
    }
      </RootStack.Screen>
  ) : 
  (
    <RootStack.Screen name={"AuthStack"} component={AuthStackNavigator} />
  )
  }

  return (
    <AuthContext.Provider value={auth}>
      <NavigationContainer theme={lightTheme}>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          {
            renderScreens()
          }
          
          
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  )
}


export default App